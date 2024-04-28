import { I18_NAMESPACES } from '@/common/constants/Locales';
import { OrderFeature } from '@/features';
import { languageInitializer, ssrInitializer, ssrPrefetchInitializer } from '@/config/nextConfigs';
import type { NextPage } from 'next';
import { layoutInitializers } from '@/common/components/Layout/PageLayout/initializers';
import { useUserQuery } from '@/api/services/auth';

export const getServerSideProps = ssrInitializer({
  isPrivate: false,
  initializers: [
    ...layoutInitializers,
    languageInitializer({ namespaces: [I18_NAMESPACES.ORDER] }),
    ssrPrefetchInitializer(useUserQuery.prefetch),
  ],
});

const Order: NextPage = () => <OrderFeature />;

export default Order;
