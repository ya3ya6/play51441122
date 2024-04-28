import { SinglePostFeature } from '@/features';
import type { NextPage } from 'next';
import { I18_NAMESPACES } from '@/common/constants/Locales';
import { languageInitializer, ssrInitializer, ssrPrefetchInitializer } from '@/config/nextConfigs';
import { usePostQuery } from '@/api/services/blog/_queries';
import { layoutInitializers } from '@/common/components/Layout/PageLayout/initializers';

const productInitiailizer = ssrPrefetchInitializer(usePostQuery.prefetch, {
  raiseOn404: true,
  mapper: ({ context }) => ({
    slug: context.query.slug as string,
    type: 'N' as const,
  }),
});

export const getServerSideProps = ssrInitializer({
  initializers: [
    ...layoutInitializers,
    languageInitializer({ namespaces: [I18_NAMESPACES.SINGLE] }),
    productInitiailizer,
  ],
});

const SingleBlog: NextPage = () => {
  return <SinglePostFeature id="newsContent" type="N" />;
};

export default SingleBlog;
