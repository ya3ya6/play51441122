import { I18_NAMESPACES } from '@/common/constants/Locales';
import { MagWebinarFeature } from '@/features';
import type { NextPage } from 'next';
import { languageInitializer, ssrInitializer, ssrPrefetchInitializer } from '@/config/nextConfigs';

import { usePostsQuery } from '@/api/services/blog/_queries';
import { numberOrDefault } from '@/utils/helpers';
import { layoutInitializers } from '@/common/components/Layout/PageLayout/initializers';

const webinarsInitializer = ssrPrefetchInitializer(usePostsQuery.prefetch, {
  mapper: () => ({
    type: 'M' as const,
    contentType: 'C' as const,
    pageSize: 8,
  }),
});

const latestPostsInitializer = ssrPrefetchInitializer(usePostsQuery.prefetch, {
  mapper: ({ context }) => ({
    type: 'M' as const,
    contentType: 'C' as const,
    page: numberOrDefault(context.query.page, 1),
    pageSize: numberOrDefault(context.query.pageSize, 12),
    name: context.query.name as string,
    ordering: context.query.ordering as string,
  }),
});

export const getServerSideProps = ssrInitializer({
  initializers: [
    ...layoutInitializers,
    languageInitializer({ namespaces: [I18_NAMESPACES.MAG] }),
    webinarsInitializer,
    latestPostsInitializer,
  ],
});

const MagWebinar: NextPage = () => <MagWebinarFeature />;

export default MagWebinar;
