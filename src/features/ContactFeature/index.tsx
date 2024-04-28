import { Box } from '@chakra-ui/react';
import { FunctionComponent } from 'react';
import { useText } from '@/hooks';
import { I18_NAMESPACES } from '@/common/constants/Locales';
import { Hero } from '@/common/components/Box';
import { FormSection, MapSection } from './components';

export const ContactFeature: FunctionComponent = () => {
  const t = useText(I18_NAMESPACES.CONTACT);
  return (
    <Box>
      <Hero
        title={t('hero.title')}
        text={t('hero.description')}
        image="/images/about/aboutImg.jpg"
      />
      <FormSection />
      <MapSection />
    </Box>
  );
};
