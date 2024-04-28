import { Flex } from '@chakra-ui/react';
import { FunctionComponent } from 'react';
import CardList, { MemberModel } from './CardList/CardList';
import HeaderBox from './HeaderBox/HeaderBox';

interface UnitListProps {
  units: {
    id: number;
    name: string;
    teamMembers: MemberModel[];
  }[];
}

const COLORS = [
  'red',
  'green',
  'blue',
  'gray',
  'pink',
  'purple',
  'cyan',
  'teal',
  'yellow',
  'orange',
];

const UnitList: FunctionComponent<UnitListProps> = ({ units }) => {
  return (
    <>
      {units?.map(unit => (
        <Flex w="100%" key={unit.id} direction="column">
          <HeaderBox title={unit.name} color={COLORS[Math.floor(Math.random() * COLORS.length)]} />
          <CardList members={unit.teamMembers} />
        </Flex>
      ))}
    </>
  );
};

export default UnitList;
