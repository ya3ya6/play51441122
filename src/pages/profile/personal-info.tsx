import PorfileLayout from '@/common/components/Layout/ProfileLayout';
import { AppNextPage } from '@/common/types';
import { PersonalInfoFeature } from '@/features';

import { languageInitializer, ssrInitializer, ssrPrefetchInitializer } from '@/config/nextConfigs';
import { I18_NAMESPACES } from '@/common/constants/Locales';
import { useUserQuery } from '@/api/services/auth';
import { layoutInitializers } from '@/common/components/Layout/PageLayout/initializers';

export const getServerSideProps = ssrInitializer({
  isPrivate: true,
  initializers: [
    ...layoutInitializers,
    languageInitializer({ namespaces: [I18_NAMESPACES.PROFILE] }),
    ssrPrefetchInitializer(useUserQuery.prefetch),
  ],
});

const PersonalInfo: AppNextPage = () => {
  return (
    <PorfileLayout>
      <PersonalInfoFeature />
    </PorfileLayout>
  );
};

export default PersonalInfo;
