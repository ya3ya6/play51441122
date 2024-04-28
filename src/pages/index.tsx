import { I18_NAMESPACES } from '@/common/constants/Locales';
import { HomeFeature } from '@/features';
import { AppNextPage } from '@/common/types';
import { useRouter } from 'next/router';
import { useEffect } from 'react';
import { useLoginModal } from '@/store/AuthStore/modalLogin/store';
import { useOverviewQuery, useCustomerOpinionsQuery } from '@/api/services/overview/_queries';
import { layoutInitializers } from '@/common/components/Layout/PageLayout/initializers';
import { MAIN_PAGE_CUSTOMER_OPINIONS_SLUG } from '@/features/HomeFeature/hooks';
import { languageInitializer, ssrInitializer, ssrPrefetchInitializer } from '../config/nextConfigs';

export const getServerSideProps = ssrInitializer({
  initializers: [
    ...layoutInitializers,
    languageInitializer({ namespaces: [I18_NAMESPACES.HOME] }),
    ssrPrefetchInitializer(useOverviewQuery.prefetch),
    ssrPrefetchInitializer(useCustomerOpinionsQuery.prefetch, {
      mapper: () => ({
        slug: MAIN_PAGE_CUSTOMER_OPINIONS_SLUG,
      }),
    }),
  ],
});

const Home: AppNextPage = () => {
  const { query } = useRouter();
  const { loginModalSetOpen } = useLoginModal();

  useEffect(() => {
    if (Object.keys(query).includes('login')) {
      loginModalSetOpen();
    }
  }, [query]);

  return <HomeFeature />;
};

export default Home;
