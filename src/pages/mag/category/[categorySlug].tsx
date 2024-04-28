import { I18_NAMESPACES } from '@/common/constants/Locales';
import {
  Initializer,
  ssrInitializer,
  languageInitializer,
  ssrPrefetchInitializer,
} from '@/config/nextConfigs';
import type { NextPage } from 'next';
import { useBlogCategoryQuery, usePostsQuery } from '@/api/services/blog/_queries';
import { numberOrDefault } from '@/utils/helpers';
import { MagSingleCategoryFeature } from '@/features/MagCategoryFeature/single';
import { layoutInitializers } from '@/common/components/Layout/PageLayout/initializers';

const categoryInitializer: Initializer = ssrPrefetchInitializer(useBlogCategoryQuery.prefetch, {
  raiseOn404: true,
  mapper: ({ context }) => context.query.categorySlug as string,
});

const postsInitializer: Initializer = ssrPrefetchInitializer(usePostsQuery.prefetch, {
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
    postsInitializer,
  ],
});

const Category: NextPage = () => <MagSingleCategoryFeature />;

export default Category;
