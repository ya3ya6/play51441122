import { I18_NAMESPACES } from '@/common/constants/Locales';
import type { NextPage } from 'next';
import { useBlogCategoriesQuery } from '@/api/services/blog/_queries';
import { NewsCategoryFeature } from '@/features/NewsCategoryFeature';
import { ssrInitializer, ssrPrefetchInitializer, languageInitializer } from '@/config/nextConfigs';
import { layoutInitializers } from '@/common/components/Layout/PageLayout/initializers';
import { useText } from '@/hooks';

export const getServerSideProps = ssrInitializer({
  initializers: [
    ...layoutInitializers,
    languageInitializer({ namespaces: [I18_NAMESPACES.CATEGORY] }),
    ssrPrefetchInitializer(useBlogCategoriesQuery.prefetch, {
      mapper: () => ({
        type: 'N' as const,
      }),
    }),
  ],
});

const Category: NextPage = () => {
  const t = useText(I18_NAMESPACES.CATEGORY);
  return <NewsCategoryFeature title={t('category.news')} />;
};

export default Category;
