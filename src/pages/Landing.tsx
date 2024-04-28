import { I18_NAMESPACES } from '@/common/constants/Locales';
import { AppNextPage } from '@/common/types';
import { languageInitializer, ssrInitializer } from '@/config/nextConfigs';
import { LandingFeature } from '@/features/LandingFeature/LandingFeature';

const LadningPage: AppNextPage = () => {
  return <LandingFeature />;
};

export const getServerSideProps = ssrInitializer({
  initializers: [languageInitializer({ namespaces: [I18_NAMESPACES.HOME] })],
});

LadningPage.pageLayoutProps = {
  hasBottomNavigation: false,
  hasDesktopMenu: false,
  hasFixPhone: {
    exist: false,
    color: '#00b4db',
  },
  hasFooter: false,
  hasScrollToTop: false,
  hasTopNav: false,
};

export default LadningPage;
