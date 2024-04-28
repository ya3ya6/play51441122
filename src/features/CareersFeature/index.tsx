import { Box } from '@chakra-ui/react';
import { FunctionComponent } from 'react';
import { useText } from '@/hooks';
import { I18_NAMESPACES } from '@/common/constants/Locales';
import { Hero } from '@/common/components/Box';
import { useCareersQuery } from '@/api/services/overview/_queries';
import { FormSection, WorkSection } from './components';

interface CareersFeatureProps {}

export const CareersFeature: FunctionComponent<CareersFeatureProps> = () => {
  const { data } = useCareersQuery(null);
  const t = useText(I18_NAMESPACES.CAREERS);

  return (
    <Box mb="50px">
      <Hero
        title={t('hero.title')}
        text={t('hero.description')}
        image="/images/careers/heroBg.png"
        p={{
          base: '80px 0 30px',
          lg: '0',
        }}
      />
      {data?.length ? (
        <>
          <WorkSection />
          <FormSection />
        </>
      ) : null}
    </Box>
  );
};
