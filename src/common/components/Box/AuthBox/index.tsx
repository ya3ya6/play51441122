import { useLogOutMutation } from '@/api/services/auth';
import { ProfileMenu } from '@/common/constants/Global';
import { I18_NAMESPACES } from '@/common/constants/Locales';
import { AuthIcon, LoginIcon, SignUpIcon } from '@/common/icons';
import { useText } from '@/hooks';
import { useAuth } from '@/store/AuthStore/auth/store';
import { useLoginModal } from '@/store/AuthStore/modalLogin/store';
import { useSignUpModal } from '@/store/AuthStore/modalSignUp/store';
import { Box, Button, Center, Menu, MenuButton, MenuItem, MenuList } from '@chakra-ui/react';
import Link from 'next/link';
import { useRouter } from 'next/router';
import { FunctionComponent } from 'react';

interface AuthBoxProps {
  varient?: 'IconButton' | 'Button';
}

export const AuthBox: FunctionComponent<AuthBoxProps> = ({ varient = 'IconButton' }) => {
  const { loginModalSetOpen } = useLoginModal();
  const { signUpModalSetOpen } = useSignUpModal();
  const { isLoggedIn } = useAuth();
  const router = useRouter();
  const mutate = useLogOutMutation();
  const t = useText(I18_NAMESPACES.COMMON);
  const exitHandler = (isExit: boolean) => {
    if (isExit) {
      mutate.mutate(undefined, {
        onSuccess: data => {
          router.reload();
        },
      });
    }
  };

  return (
    <Box>
      <Menu>
        {varient === 'Button' ? (
          <MenuButton as={Button}>{t('auth.account')}</MenuButton>
        ) : (
          <MenuButton as={Button} rounded="full" fontSize="xl" p="0" w="40px" h="40px">
            <Center>
              <AuthIcon />
            </Center>
          </MenuButton>
        )}
        <MenuList minW="190px">
          {isLoggedIn ? (
            <>
              {ProfileMenu.map(({ icon: Icon, id, slug = '', title, isExit = false }) =>
                isExit ? (
                  <MenuItem
                    key={id}
                    icon={<Icon fontSize="18px" />}
                    onClick={() => exitHandler(isExit)}
                  >
                    {t(title)}
                  </MenuItem>
                ) : (
                  <Link href={slug} passHref>
                    <MenuItem as="a" key={id} icon={<Icon fontSize="18px" />}>
                      {t(title)}
                    </MenuItem>
                  </Link>
                ),
              )}
            </>
          ) : (
            <>
              <MenuItem icon={<LoginIcon fontSize="18px" />} onClick={loginModalSetOpen}>
                {t('auth.login')}
              </MenuItem>
              <MenuItem icon={<SignUpIcon fontSize="18px" />} onClick={signUpModalSetOpen}>
                {t('auth.signUp')}
              </MenuItem>
            </>
          )}
        </MenuList>
      </Menu>
    </Box>
  );
};
