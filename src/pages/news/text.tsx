import { I18_NAMESPACES } from '@/common/constants/Locales';
import { NewsTextFeature } from '@/features';
import type { NextPage } from 'next';

import { languageInitializer, ssrInitializer, ssrPrefetchInitializer } from '@/config/nextConfigs';
import { numberOrDefault } from '@/utils/helpers';
import { usePostsQuery } from '@/api/services/blog/_queries';
import { layoutInitializers } from '@/common/components/Layout/PageLayout/initializers';

const selectedPostsInitializer = ssrPrefetchInitializer(usePostsQuery.prefetch, {
  mapper: () => ({
    isVip: true,
    pageSize: 4,
    type: 'N' as const,
    contentType: 'T' as const,
  }),
});

const latestPostsInitializer = ssrPrefetchInitializer(usePostsQuery.prefetch, {
  mapper: ({ context }) => ({
    type: 'N' as const,
    contentType: 'T' as const,
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
    selectedPostsInitializer,
    latestPostsInitializer,
  ],
});

const NewsText: NextPage = () => <NewsTextFeature />;

export default NewsText;
