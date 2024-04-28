import { I18_NAMESPACES } from '@/common/constants/Locales';
import { ProductLandingFeature } from '@/features';
import { AppNextPage } from '@/common/types';
import { languageInitializer, ssrInitializer } from '@/config/nextConfigs';
import { DIODE_DATA } from '@/features/_Common/ProductLandingFeature/constants/diode';
import { useEffect } from 'react';
import { initTagManager } from '@/libs/tagManager';

const GTM_ID = 'GTM-TLCLKV4';

const DiodePage: AppNextPage = () => {
  useEffect(() => {
    if (process.env.NODE_ENV === 'production') {
      initTagManager(GTM_ID);
    }
  }, []);

  return <ProductLandingFeature data={DIODE_DATA} />;
};

export const getServerSideProps = ssrInitializer({
  initializers: [languageInitializer({ namespaces: [I18_NAMESPACES.HOME] })],
});

DiodePage.pageLayoutProps = {
  hasBottomNavigation: false,
  hasDesktopMenu: false,
  hasFixPhone: {
    exist: true,
    color: '#00b4db',
  },
  hasFooter: false,
  hasScrollToTop: false,
  hasTopNav: false,
};

export default DiodePage;
