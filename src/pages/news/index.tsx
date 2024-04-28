import { I18_NAMESPACES } from '@/common/constants/Locales';
import { NewsFeature } from '@/features';
import type { NextPage } from 'next';
import { languageInitializer, ssrInitializer, ssrPrefetchInitializer } from '@/config/nextConfigs';

import { layoutInitializers } from '@/common/components/Layout/PageLayout/initializers';
import { usePostsQuery } from '@/api/services/blog/_queries';
import { numberOrDefault } from '@/utils/helpers';

const headerPostsInitializer = ssrPrefetchInitializer(usePostsQuery.prefetch, {
  mapper: () => ({
    type: 'N' as const,
    contentType: 'V' as const,
    pageSize: 7,
  }),
});

const selectedPostsInitializer = ssrPrefetchInitializer(usePostsQuery.prefetch, {
  mapper: () => ({
    type: 'N' as const,
    pageSize: 4,
    isVip: true,
  }),
});

const latestPostsInitializer = ssrPrefetchInitializer(usePostsQuery.prefetch, {
  mapper: ({ context }) => ({
    type: 'N' as const,
    pageSize: numberOrDefault(context.query.pageSize, 12),
    page: numberOrDefault(context.query.page, 1),
    name: context.query.name as string,
    ordering: context.query.ordering as string,
  }),
});

export const getServerSideProps = ssrInitializer({
  initializers: [
    ...layoutInitializers,
    languageInitializer({ namespaces: [I18_NAMESPACES.NEWS] }),
    headerPostsInitializer,
    selectedPostsInitializer,
    latestPostsInitializer,
  ],
});

const News: NextPage = () => <NewsFeature />;

export default News;
