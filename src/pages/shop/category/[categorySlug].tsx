import { I18_NAMESPACES } from '@/common/constants/Locales';
import {
  Initializer,
  ssrInitializer,
  languageInitializer,
  ssrPrefetchInitializer,
} from '@/config/nextConfigs';
import { ShopSingleCategoryFeature } from '@/features/ShopCategoryFeature/single';
import type { NextPage } from 'next';
import { useShopCategoryQuery, useProductsQuery } from '@/api/services/shop';
import { numberOrDefault } from '@/utils/helpers';
import { layoutInitializers } from '@/common/components/Layout/PageLayout/initializers';

const categoryInitializer: Initializer = ssrPrefetchInitializer(useShopCategoryQuery.prefetch, {
  raiseOn404: true,
  mapper: ({ context }) => context.query.categorySlug as string,
});

const productsInitializer: Initializer = ssrPrefetchInitializer(useProductsQuery.prefetch, {
  mapper: ({ context }) => ({
    categorySlug: context.query.categorySlug as string,
    page: numberOrDefault(context.query.page, 1),
    pageSize: numberOrDefault(context.query.pageSize, 10),
  }),
});

export const getServerSideProps = ssrInitializer({
  initializers: [
    ...layoutInitializers,
    languageInitializer({ namespaces: [I18_NAMESPACES.CATEGORY] }),
    categoryInitializer,
    productsInitializer,
  ],
});

const Category: NextPage = () => <ShopSingleCategoryFeature />;

export default Category;
