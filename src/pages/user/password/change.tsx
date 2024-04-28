import { I18_NAMESPACES } from '@/common/constants/Locales';
import { AppNextPage } from '@/common/types';
import { languageInitializer, ssrInitializer } from '@/config/nextConfigs';
import { ChangePasswordFeature } from '@/features/ChangePasswordFeature';

const ChangePassword: AppNextPage = () => <ChangePasswordFeature />;
export default ChangePassword;

export const getServerSideProps = ssrInitializer({
  initializers: [languageInitializer({ namespaces: [I18_NAMESPACES.COMMON] })],
});

ChangePassword.pageLayoutProps = {
  hasFooter: false,
  hasDesktopMenu: false,
  hasTopNav: false,
};
