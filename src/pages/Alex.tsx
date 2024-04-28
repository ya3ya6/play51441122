import { I18_NAMESPACES } from '@/common/constants/Locales';
import { AppNextPage } from '@/common/types';
import { ssrInitializer, languageInitializer } from '@/config/nextConfigs';
import { ProductLandingFeature } from '@/features';
import { ALEX_DATA } from '@/features/_Common/ProductLandingFeature/constants/alex';
import { initTagManager } from '@/libs/tagManager';
import { useEffect } from 'react';

const GTM_ID = 'GTM-NX26Z4W';

const AlexPage: AppNextPage = () => {
  useEffect(() => {
    if (process.env.NODE_ENV === 'production') {
      initTagManager(GTM_ID);
    }
  }, []);

  return <ProductLandingFeature data={ALEX_DATA} />;
};
export const getServerSideProps = ssrInitializer({
  initializers: [languageInitializer({ namespaces: [I18_NAMESPACES.HOME] })],
});

AlexPage.pageLayoutProps = {
  hasBottomNavigation: false,
  hasDesktopMenu: false,
  hasFixPhone: {
    exist: true,
    color: '#eb4a59',
  },
  hasFooter: false,
  hasScrollToTop: false,
  hasTopNav: false,
};

export default AlexPage;
