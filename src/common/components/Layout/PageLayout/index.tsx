import { FixPhone, ScrollToTop, TopNav } from '@/common/components/Box';
import NextNProgress from 'nextjs-progressbar';
import { Box } from '@chakra-ui/react';
import { FunctionComponent, ReactNode } from 'react';
import { useLoginModal } from '@/store/AuthStore/modalLogin/store';
import { useSignUpModal } from '@/store/AuthStore/modalSignUp/store';
import {
  DesktopMenuFeature,
  LoginFeature,
  SignUpFeature,
  FooterFeature,
  BottomNavigationFeature,
  ShoppingCardFeature,
} from '@/features/_Separate';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { useAuth } from '@/store/AuthStore/auth/store';

interface PageLayoutProps {
  hasTopNav?: boolean;
  hasDesktopMenu?: boolean;
  hasScrollToTop?: boolean;
  hasFixPhone?: {
    exist: boolean;
    color: 'brand' | string;
  };
  hasFooter?: boolean;
  hasBottomNavigation?: boolean;
  children?: ReactNode;
}

const PageLayout: FunctionComponent<PageLayoutProps> = ({
  children,
  hasBottomNavigation = true,
  hasDesktopMenu = true,
  hasFixPhone = {
    exist: true,
    color: 'brand',
  },
  hasFooter = true,
  hasScrollToTop = true,
  hasTopNav = true,
}) => {
  const { isLoggedIn } = useAuth();
  const { loginModal, loginModalSetClose } = useLoginModal();
  const { signUpModal, signUpModalSetClose } = useSignUpModal();
  return (
    <>
      <NextNProgress
        color="red"
        startPosition={0.3}
        stopDelayMs={200}
        height={3}
        showOnShallow={false}
      />
      {/* Same as */}
      <ShoppingCardFeature />
      {hasTopNav && <TopNav />}
      {hasDesktopMenu && <DesktopMenuFeature />}
      <Box flexGrow={1}>{children}</Box>
      {hasScrollToTop && <ScrollToTop />}
      {hasFixPhone.exist && <FixPhone color={hasFixPhone.color} />}
      {hasFooter && <FooterFeature />}
      {hasBottomNavigation && <BottomNavigationFeature />}
      {!isLoggedIn && <LoginFeature isOpen={loginModal} onClose={loginModalSetClose} />}
      {!isLoggedIn && <SignUpFeature isOpen={signUpModal} onClose={signUpModalSetClose} />}
      <ToastContainer />
    </>
  );
};

export default PageLayout;
