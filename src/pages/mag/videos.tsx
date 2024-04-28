import { I18_NAMESPACES } from '@/common/constants/Locales';
import { MagTutorialVideoFeature } from '@/features';

import type { NextPage } from 'next';

import { languageInitializer, ssrInitializer, ssrPrefetchInitializer } from '@/config/nextConfigs';
import { numberOrDefault } from '@/utils/helpers';
import { usePostsQuery } from '@/api/services/blog/_queries';
import { layoutInitializers } from '@/common/components/Layout/PageLayout/initializers';

const headerPostsInitializer = ssrPrefetchInitializer(usePostsQuery.prefetch, {
  mapper: () => ({
    type: 'M' as const,
    contentType: 'V' as const,
    pageSize: 6,
    ordering: '-views',
  }),
});

const latestPostsInitializer = ssrPrefetchInitializer(usePostsQuery.prefetch, {
  mapper: ({ context }) => ({
    pageSize: numberOrDefault(context.query.pageSize, 12),
    type: 'M' as const,
    contentType: 'V' as const,
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

const MagVideos: NextPage = () => <MagTutorialVideoFeature />;

export default MagVideos;
