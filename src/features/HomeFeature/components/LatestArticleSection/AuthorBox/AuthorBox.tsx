import { AuthorIcon, CalenderIcon } from '@/common/icons';
import { useDate } from '@/utils/helpers';
import { Flex, Text } from '@chakra-ui/react';
import { FunctionComponent } from 'react';
import { useOverview } from '../../../hooks';

interface AuthorBoxProps {
  active: number;
}

const AuthorBox: FunctionComponent<AuthorBoxProps> = ({ active }) => {
  const { date } = useDate();
  const { overview } = useOverview();

  const activeMag = overview?.mags[active];

  if (!activeMag) {
    return null;
  }

  return (
    <Flex align="center" justify={{ base: 'center ', xl: 'flex-end' }} my="20px" gap="20px">
      <Flex align="center">
        <CalenderIcon />
        <Text ml="5px">{date(activeMag.createdAt)}</Text>
      </Flex>
      <Flex align="center">
        <AuthorIcon />
        <Text ml="5px">{activeMag.author}</Text>
      </Flex>
    </Flex>
  );
};

export default AuthorBox;
