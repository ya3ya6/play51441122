import { useCareersQuery } from '@/api/services/overview/_queries';
import { layoutInitializers } from '@/common/components/Layout/PageLayout/initializers';
import { I18_NAMESPACES } from '@/common/constants/Locales';
import { languageInitializer, ssrInitializer, ssrPrefetchInitializer } from '@/config/nextConfigs';
import { CareersFeature } from '@/features';
import type { NextPage } from 'next';

export const getServerSideProps = ssrInitializer({
  initializers: [
    ...layoutInitializers,
    languageInitializer({ namespaces: [I18_NAMESPACES.CAREERS] }),
    ssrPrefetchInitializer(useCareersQuery.prefetch),
  ],
});

const Careers: NextPage = () => <CareersFeature />;

export default Careers;
