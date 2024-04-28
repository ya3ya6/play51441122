import { I18_NAMESPACES } from '@/common/constants/Locales';
import { MagArticleFeature } from '@/features';
import type { NextPage } from 'next';

import { languageInitializer, ssrInitializer, ssrPrefetchInitializer } from '@/config/nextConfigs';
import { layoutInitializers } from '@/common/components/Layout/PageLayout/initializers';
import { numberOrDefault } from '@/utils/helpers';
import { useMagHeaderPostsQuery } from '@/api/services/overview/_queries';
import { usePostsQuery } from '../../api/services/blog/_queries';

const headerPostsInitializer = ssrPrefetchInitializer(useMagHeaderPostsQuery.prefetch);

const latestPostsInitializer = ssrPrefetchInitializer(usePostsQuery.prefetch, {
  mapper: ({ context }) => ({
    pageSize: numberOrDefault(context.query.pageSize, 12),
    type: 'M' as const,
    contentType: 'T' as const,
    page: numberOrDefault(context.query.page, 1),
    name: context.query.name as string,
    ordering: context.query.ordering as string,
  }),
});

export const getServerSideProps = ssrInitializer({
  initializers: [
    ...layoutInitializers,
    languageInitializer({ namespaces: [I18_NAMESPACES.MAG] }),
    headerPostsInitializer,
    latestPostsInitializer,
  ],
});

const MagArticle: NextPage = () => <MagArticleFeature />;

export default MagArticle;
