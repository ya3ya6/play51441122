import { I18_NAMESPACES } from '@/common/constants/Locales';
import type { NextPage } from 'next';
import { useShopCategoriesQuery } from '@/api/services/shop/_queries';
import { ShopCategoryFeature } from '@/features/ShopCategoryFeature';
import { ssrInitializer, ssrPrefetchInitializer, languageInitializer } from '@/config/nextConfigs';
import { layoutInitializers } from '@/common/components/Layout/PageLayout/initializers';
import { useText } from '@/hooks';

export const getServerSideProps = ssrInitializer({
  initializers: [
    ...layoutInitializers,
    languageInitializer({ namespaces: [I18_NAMESPACES.CATEGORY] }),
    ssrPrefetchInitializer(useShopCategoriesQuery.prefetch),
  ],
});

const Category: NextPage = () => {
  const t = useText(I18_NAMESPACES.CATEGORY);
  return <ShopCategoryFeature title={t('category.shop')} />;
};

export default Category;
