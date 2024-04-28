import React, { useState } from 'react';
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
import { SubmitHandler } from 'react-hook-form';
import { useRegisterUserMutation } from '@/api/services/auth';
import { useSignUpModal } from '@/store/AuthStore/modalSignUp/store';
import { useText, useToast } from '@/hooks';
import { useLoginModal } from '@/store/AuthStore/modalLogin/store';
import { AxiosError } from 'axios';
import { BaseErrorReposnseType } from '@/api/common/types/baseResponseType';
import { I18_NAMESPACES } from '@/common/constants/Locales';
import FormList from './components/FormList/FormList';
import { InputsType } from './types';

interface SignUpFeatureProps {
  onClose: () => void;
  isOpen: boolean;
}

export const SignUpFeature = ({ onClose, isOpen }: SignUpFeatureProps) => {
  const [isLarge] = useMediaQuery('(min-width: 800px)');
  const [step] = useState(0);
  const { signUpModalSetClose } = useSignUpModal();
  const { loginModalSetOpen } = useLoginModal();
  const { mutate, isLoading } = useRegisterUserMutation();
  const { errorToast, successToast } = useToast();
  const t = useText(I18_NAMESPACES.COMMON);
  const handleOpenLogin = () => {
    signUpModalSetClose();
    loginModalSetOpen();
  };

  const onSubmit: SubmitHandler<InputsType> = data =>
    mutate(
      { email: data.email, password1: data.password, password2: data.confermPassword },
      {
        onSuccess: () => {
          signUpModalSetClose();
          successToast(t('message.success'));
        },
        // @ts-ignore
        onError: (error: AxiosError<BaseErrorReposnseType<InputsType>>) => {
          Object.values(error?.response?.data ?? {}).forEach(value => {
            errorToast(value[0]);
          });
        },
      },
    );

  return (
    <Box>
      <Modal isOpen={isOpen} onClose={onClose} closeOnEsc isCentered size={isLarge ? 'sm' : 'full'}>
        <ModalOverlay />
        <ModalContent textAlign="left">
          <ModalHeader textAlign="left">{t('signUp.title')}</ModalHeader>
          <ModalCloseButton top="15px" right="20px" left="auto" />

          <ModalBody pb={6}>
            <FormList
              onSubmit={onSubmit}
              buttonText={t('auth.signUp')}
              step={step}
              isLoading={isLoading}
            />
          </ModalBody>

          <ModalFooter
            flexDirection="column"
            gap="10px"
            justifyContent="center"
            p="20px"
            mt="-20px"
          >
            <Text fontSize="14px">
              <Text as="span" textAlign="center" ms="5px">
                {t('signUp.login.part1')}
              </Text>{' '}
              <Text cursor="pointer" as="span" color="brand.600" onClick={handleOpenLogin}>
                {t('signUp.login.part2')}
              </Text>
            </Text>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </Box>
  );
};
