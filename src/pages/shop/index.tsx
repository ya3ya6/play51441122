import { I18_NAMESPACES } from '@/common/constants/Locales';
import { ShopFeature } from '@/features/ShopFeature';
import {
  Initializer,
  languageInitializer,
  ssrPrefetchInitializer,
  ssrInitializer,
} from '@/config/nextConfigs';

import { useBannersQuery } from '@/api/services/shop';
import { useProductsQuery } from '@/api/services/shop/_queries';
import { numberOrDefault } from '@/utils/helpers';
import { layoutInitializers } from '@/common/components/Layout/PageLayout/initializers';

const productsInitializer: Initializer = ssrPrefetchInitializer(useProductsQuery.prefetch, {
  mapper: ({ context }) => ({
    page: numberOrDefault(context.query.page, 1),
    pageSize: numberOrDefault(context.query.pageSize, 10),
  }),
});

const vipProductsInitializer: Initializer = ssrPrefetchInitializer(useProductsQuery.prefetch, {
  mapper: () => ({
    isVip: true,
  }),
});

export const getServerSideProps = ssrInitializer({
  initializers: [
    ...layoutInitializers,
    languageInitializer({ namespaces: [I18_NAMESPACES.SHOP] }),
    ssrPrefetchInitializer(useBannersQuery.prefetch),
    productsInitializer,
    vipProductsInitializer,
  ],
});

const ShopPage = () => {
  return <ShopFeature />;
};

export default ShopPage;
