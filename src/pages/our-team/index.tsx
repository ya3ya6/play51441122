import { useTeamQuery } from '@/api/services/overview/_queries';
import { layoutInitializers } from '@/common/components/Layout/PageLayout/initializers';
import { I18_NAMESPACES } from '@/common/constants/Locales';
import { languageInitializer, ssrInitializer, ssrPrefetchInitializer } from '@/config/nextConfigs';
import { TeamFeature } from '@/features';
import type { NextPage } from 'next';

export const getServerSideProps = ssrInitializer({
  initializers: [
    ...layoutInitializers,
    languageInitializer({ namespaces: [I18_NAMESPACES.TEAM] }),
    ssrPrefetchInitializer(useTeamQuery.prefetch),
  ],
});

const Team: NextPage = () => <TeamFeature />;

export default Team;
