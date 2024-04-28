import { layoutInitializers } from '@/common/components/Layout/PageLayout/initializers';
import { I18_NAMESPACES } from '@/common/constants/Locales';
import { languageInitializer, ssrInitializer } from '@/config/nextConfigs';
import { AboutFeature } from '@/features';
import type { NextPage } from 'next';

export const getServerSideProps = ssrInitializer({
  initializers: [
    ...layoutInitializers,
    languageInitializer({ namespaces: [I18_NAMESPACES.ABOUT] }),
  ],
});

const About: NextPage = () => <AboutFeature />;

export default About;
