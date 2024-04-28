import { I18_NAMESPACES } from '@/common/constants/Locales';
import { ProductLandingFeature } from '@/features';
import { AppNextPage } from '@/common/types';
import { languageInitializer, ssrInitializer } from '@/config/nextConfigs';
import { ALEXANDRITE_DATA } from '@/features/_Common/ProductLandingFeature/constants/alexandrite';
import { useEffect } from 'react';
import { initTagManager } from '@/libs/tagManager';

const GTM_ID = 'GTM-W7QMTXD';

const Alexandrite: AppNextPage = () => {
  useEffect(() => {
    if (process.env.NODE_ENV === 'production') {
      initTagManager(GTM_ID);
    }
  }, []);

  return <ProductLandingFeature data={ALEXANDRITE_DATA} />;
};

export const getServerSideProps = ssrInitializer({
  initializers: [languageInitializer({ namespaces: [I18_NAMESPACES.HOME] })],
});

Alexandrite.pageLayoutProps = {
  hasBottomNavigation: false,
  hasDesktopMenu: false,
  hasFixPhone: {
    exist: true,
    color: '#5044a7',
  },
  hasFooter: false,
  hasScrollToTop: false,
  hasTopNav: false,
};

export default Alexandrite;
