import { ProfileFeature } from '@/features';
import PorfileLayout from '@/common/components/Layout/ProfileLayout';
import { AppNextPage } from '@/common/types';
import { languageInitializer, ssrInitializer } from '@/config/nextConfigs';
import { I18_NAMESPACES } from '@/common/constants/Locales';
import { layoutInitializers } from '@/common/components/Layout/PageLayout/initializers';

export const getServerSideProps = ssrInitializer({
  isPrivate: true,
  initializers: [
    ...layoutInitializers,
    languageInitializer({ namespaces: [I18_NAMESPACES.PROFILE] }),
  ],
});

const Profile: AppNextPage = () => {
  return (
    <PorfileLayout>
      <ProfileFeature />
    </PorfileLayout>
  );
};

export default Profile;
