import { LandingModel } from '@/model/LandingPage';
import { Container, Grid } from '@chakra-ui/react';
import { FunctionComponent } from 'react';
import DetailsBox from './DetailsBox/DetailsBox';

type DetailsListProps = {
  DetailsData: Pick<LandingModel, 'detials'>['detials']['detialsList'];
  gradient: string;
};

const DetailsList: FunctionComponent<DetailsListProps> = ({ DetailsData, gradient }) => {
  return (
    <Container maxW="container.xl">
      <Grid
        gap="50px"
        gridTemplateColumns={{ base: '100%', md: '1fr 1fr', lg: '1fr 1fr 1fr' }}
        pb="50px"
      >
        {DetailsData.map(({ icon, id, text }) => (
          <DetailsBox key={id} icon={icon} text={text} gradient={gradient} />
        ))}
      </Grid>
    </Container>
  );
};

export default DetailsList;
