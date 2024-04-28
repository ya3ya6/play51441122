import { I18_NAMESPACES } from '@/common/constants/Locales';
import { useText } from '@/hooks';
import ROUTES from '@/routers';
import { useAuth } from '@/store/AuthStore/auth/store';
import { useLoginModal } from '@/store/AuthStore/modalLogin/store';
import { useSignUpModal } from '@/store/AuthStore/modalSignUp/store';
import { Box, Button, Stack, Text } from '@chakra-ui/react';
import { useRouter } from 'next/router';
import { FunctionComponent } from 'react';

interface TextBoxProps {}

const TextBox: FunctionComponent<TextBoxProps> = () => {
  const t = useText(I18_NAMESPACES.SUPPORTY_SYSTEM);
  const { loginModalSetOpen } = useLoginModal();
  const { push } = useRouter();
  const { signUpModalSetOpen } = useSignUpModal();
  const { isLoggedIn } = useAuth();
  return (
    <Box py="100px">
      <Text textAlign={{ base: 'center', lg: 'start' }} fontSize="2xl" lineHeight="65px">
        {t('text.part1')}{' '}
        <Text as="span" fontWeight="bold" color="brand.600">
          {' '}
          {t('text.part2')}{' '}
        </Text>
        {t('text.part3')}{' '}
        <Text as="span" fontWeight="bold" color="brand.600">
          {t('text.part4')}
        </Text>{' '}
        {t('text.part5')}
      </Text>
      <Stack direction="row" spacing="15px" mt="30px" w="100%" align="center" justify="flex-start">
        {isLoggedIn ? (
          <Button colorScheme="brand" w="150px" onClick={() => push(ROUTES.PROFILE.SUPPORT)}>
            {t('profileMenu.support', { isCommon: true })}
          </Button>
        ) : (
          <Stack>
            <Stack direction="row" mb="20px" spacing="15px">
              <Button colorScheme="brand" w="150px" onClick={() => loginModalSetOpen()}>
                {t('auth.login', { isCommon: true })}
              </Button>
              <Button
                colorScheme="brand"
                variant="outline"
                border="2px"
                w="150px"
                onClick={() => signUpModalSetOpen()}
              >
                {t('auth.signUp', { isCommon: true })}
              </Button>
            </Stack>
            <Text color="GrayText">{t('helperText')}</Text>
          </Stack>
        )}
      </Stack>
    </Box>
  );
};

export default TextBox;
