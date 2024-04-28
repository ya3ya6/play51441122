import { I18_NAMESPACES } from '@/common/constants/Locales';
import { SupportSystemFeature } from '@/features';
import { AppNextPage } from '@/common/types';
import { layoutInitializers } from '@/common/components/Layout/PageLayout/initializers';
import { languageInitializer, ssrInitializer } from '../config/nextConfigs';

export const getServerSideProps = ssrInitializer({
  initializers: [
    ...layoutInitializers,
    languageInitializer({ namespaces: [I18_NAMESPACES.SUPPORTY_SYSTEM] }),
  ],
});

const Home: AppNextPage = () => {
  return <SupportSystemFeature />;
};

export default Home;
