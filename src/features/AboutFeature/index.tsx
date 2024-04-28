import { Box, Container } from '@chakra-ui/react';
import { FunctionComponent } from 'react';
import { useText } from '@/hooks';
import { I18_NAMESPACES } from '@/common/constants/Locales';
import { Hero } from '@/common/components/Box';
import { BioBox, ImageBox, ProductSection, VideoBox } from './components';

export const AboutFeature: FunctionComponent = () => {
  const t = useText(I18_NAMESPACES.ABOUT);

  return (
    <Box>
      <Hero title={t('hero.title')} text={t('hero.description')} image="/images/about/hero.jpg" />
      <Container mt="100px" mb="0" maxW="container.xl">
        <BioBox />
        <VideoBox />
      </Container>
      <ImageBox />
      <Container mt="30px" mb="130px" maxW="container.xl">
        <ProductSection />
      </Container>
    </Box>
  );
};
