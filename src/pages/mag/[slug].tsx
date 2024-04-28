import { SinglePostFeature } from '@/features';
import type { NextPage } from 'next';
import { I18_NAMESPACES } from '@/common/constants/Locales';
import { languageInitializer, ssrInitializer, ssrPrefetchInitializer } from '@/config/nextConfigs';
import { layoutInitializers } from '@/common/components/Layout/PageLayout/initializers';
import { useCommentsQuery, usePostQuery } from '@/api/services/blog/_queries';

const postInitiailizer = ssrPrefetchInitializer(usePostQuery.prefetch, {
  raiseOn404: true,
  mapper: ({ context }) => ({
    slug: context.query.slug as string,
    type: 'M' as const,
  }),
});

const commentsInitializer = ssrPrefetchInitializer(useCommentsQuery.prefetch, {
  mapper: ({ context }) => ({ slug: context.query.productSlug as string }),
});

export const getServerSideProps = ssrInitializer({
  initializers: [
    ...layoutInitializers,
    languageInitializer({ namespaces: [I18_NAMESPACES.SINGLE] }),
    postInitiailizer,
    commentsInitializer,
  ],
});

const MagSingleBlog: NextPage = () => {
  return <SinglePostFeature id="magContent" type="M" />;
};

export default MagSingleBlog;
