import { I18_NAMESPACES } from '@/common/constants/Locales';
import { MagFeature } from '@/features';
import { languageInitializer, ssrInitializer, ssrPrefetchInitializer } from '@/config/nextConfigs';
import { layoutInitializers } from '@/common/components/Layout/PageLayout/initializers';
import { usePostsQuery } from '@/api/services/blog/_queries';
import { numberOrDefault } from '@/utils/helpers';
import { useMagHeaderPostsQuery } from '@/api/services/overview/_queries';
import { AppNextPage } from '@/common/types';

const headerPostsInitializer = ssrPrefetchInitializer(useMagHeaderPostsQuery.prefetch);

const tutorialPostsInitializer = ssrPrefetchInitializer(usePostsQuery.prefetch, {
  mapper: () => ({
    type: 'M' as const,
    contentType: 'V' as const,
    pageSize: 8,
  }),
});

const webinarsInitializer = ssrPrefetchInitializer(usePostsQuery.prefetch, {
  mapper: () => ({
    type: 'M' as const,
    contentType: 'C' as const,
    pageSize: 8,
  }),
});

const latestPostsInitializer = ssrPrefetchInitializer(usePostsQuery.prefetch, {
  mapper: ({ context }) => ({
    pageSize: numberOrDefault(context.query.pageSize, 12),
    type: 'M' as const,
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
    tutorialPostsInitializer,
    webinarsInitializer,
    latestPostsInitializer,
  ],
});

const Mag: AppNextPage = () => <MagFeature />;

export default Mag;
