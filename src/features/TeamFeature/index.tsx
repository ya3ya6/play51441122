import { Box, Container } from '@chakra-ui/react';
import { FunctionComponent } from 'react';
import { useText } from '@/hooks';
import { I18_NAMESPACES } from '@/common/constants/Locales';
import { Hero } from '@/common/components/Box';
import EmployeeSection from './components/EmployeeSection/EmployeeSection';

interface TeamFeatureProps {}

export const TeamFeature: FunctionComponent<TeamFeatureProps> = () => {
  const t = useText(I18_NAMESPACES.TEAM);
  return (
    <Box>
      <Hero title={t('hero.title')} text={t('hero.description')} image="/images/team/hero.jpg" />
      <Container my="40px" mb="100px" maxW="container.xl">
        <EmployeeSection />
      </Container>
    </Box>
  );
};
