import { Grid } from '@chakra-ui/react';
import { FunctionComponent } from 'react';
import CardBox from './CardBox/CardBox';

export type MemberModel = {
  id: number;
  image: string;
  imageAlt: string;
  description: string;
  name: string;
  role: string;
};

interface CardListProps {
  members: MemberModel[];
}

const CardList: FunctionComponent<CardListProps> = ({ members }) => {
  return (
    <Grid
      my="50px"
      gridTemplateColumns={{ base: '1fr', md: '1fr 1fr', lg: '1fr 1fr 1fr 1fr' }}
      gap="30px"
    >
      {members.map(member => (
        <CardBox key={member.id} member={member} />
      ))}
    </Grid>
  );
};

export default CardList;
