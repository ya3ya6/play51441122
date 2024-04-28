import { I18_NAMESPACES } from '@/common/constants/Locales';
import type { NextPage } from 'next';
import { useBlogCategoriesQuery } from '@/api/services/blog/_queries';
import { MagCategoryFeature } from '@/features/MagCategoryFeature';
import { ssrInitializer, ssrPrefetchInitializer, languageInitializer } from '@/config/nextConfigs';
import { layoutInitializers } from '@/common/components/Layout/PageLayout/initializers';
import { useText } from '@/hooks';

export const getServerSideProps = ssrInitializer({
  initializers: [
    ...layoutInitializers,
    languageInitializer({ namespaces: [I18_NAMESPACES.CATEGORY] }),
    ssrPrefetchInitializer(useBlogCategoriesQuery.prefetch, {
      mapper: () => ({
        type: 'M' as const,
      }),
    }),
  ],
});

const Category: NextPage = () => {
  const t = useText(I18_NAMESPACES.CATEGORY);
  return <MagCategoryFeature title={t('category.mag')} />;
};

export default Category;
