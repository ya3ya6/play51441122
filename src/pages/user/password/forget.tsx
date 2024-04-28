import { I18_NAMESPACES } from '@/common/constants/Locales';
import { AppNextPage } from '@/common/types';
import { languageInitializer, ssrInitializer } from '@/config/nextConfigs';
import { ResetPasswordFeature } from '@/features';

const ForgetPassword: AppNextPage = () => <ResetPasswordFeature />;
export default ForgetPassword;

export const getServerSideProps = ssrInitializer({
  initializers: [languageInitializer({ namespaces: [I18_NAMESPACES.COMMON] })],
});

ForgetPassword.pageLayoutProps = {
  hasFooter: false,
  hasDesktopMenu: false,
  hasTopNav: false,
};
