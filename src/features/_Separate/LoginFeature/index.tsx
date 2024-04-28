import {
  Modal,
  ModalOverlay,
  ModalFooter,
  ModalContent,
  ModalHeader,
  ModalCloseButton,
  ModalBody,
  Text,
  Box,
  useMediaQuery,
} from '@chakra-ui/react';

import { useLoginModal } from '@/store/AuthStore/modalLogin/store';
import { useRouter } from 'next/router';
import ROUTES from '@/routers';
import Link from 'next/link';
import { useEffect } from 'react';
import { useSignUpModal } from '@/store/AuthStore/modalSignUp/store';
import { useText } from '@/hooks';
import { I18_NAMESPACES } from '@/common/constants/Locales';
import FormList from './components/FormList/FormList';

interface LoginFeatureProps {
  onClose: () => void;
  isOpen: boolean;
}

export const LoginFeature = ({ onClose, isOpen }: LoginFeatureProps) => {
  const [isLarge] = useMediaQuery('(min-width: 800px)');
  const { loginModalSetClose } = useLoginModal();
  const { signUpModalSetOpen } = useSignUpModal();
  const router = useRouter();
  const t = useText(I18_NAMESPACES.COMMON);
  const handleOpenSignup = () => {
    loginModalSetClose();
    signUpModalSetOpen();
  };

  useEffect(() => {
    return () => loginModalSetClose();
  }, [router.pathname]);

  return (
    <Box>
      <Modal isOpen={isOpen} onClose={onClose} closeOnEsc isCentered size={isLarge ? 'sm' : 'full'}>
        <ModalOverlay />
        <ModalContent textAlign="left">
          <ModalHeader>{t('login.title')}</ModalHeader>
          <ModalCloseButton
            onClick={() => router.replace(ROUTES.HOME, undefined, { shallow: true })}
            top="15px"
            right="20px"
            left="auto"
          />

          <ModalBody pb={6}>
            <FormList buttonText={t('auth.login')} />
          </ModalBody>

          <ModalFooter
            flexDirection="column"
            gap="10px"
            justifyContent="center"
            p="20px"
            mt="-20px"
          >
            <Text fontSize="14px">
              <Text as="span" ms="5px" textAlign="center">
                {t('login.forgetPassword.part1')}
              </Text>{' '}
              <Link href={ROUTES.USER.FORGET} passHref>
                <a>
                  <Text as="span" color="brand.500" textAlign="center">
                    {t('login.forgetPassword.part2')}
                  </Text>
                </a>
              </Link>
            </Text>
            <Text fontSize="14px">
              <Text ms="5px" as="span" textAlign="center">
                {t('login.signUp.part1')}
              </Text>{' '}
              <Text
                cursor="pointer"
                as="span"
                color="brand.500"
                textAlign="center"
                onClick={handleOpenSignup}
              >
                {t('login.signUp.part2')}
              </Text>
            </Text>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </Box>
  );
};
