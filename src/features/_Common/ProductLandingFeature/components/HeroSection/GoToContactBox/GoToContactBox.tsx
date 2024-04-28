import { PhoneIcon } from '@/common/icons';
import { Center } from '@chakra-ui/react';
import { FunctionComponent } from 'react';

interface GoToContactBoxProps {
  gradient: string;
}

const GoToContactBox: FunctionComponent<GoToContactBoxProps> = ({ gradient }) => {
  return (
    <a href="#contact">
      <Center
        cursor="pointer"
        zIndex={12}
        w={{ base: '80px', lg: '100px' }}
        h={{ base: '80px', lg: '100px' }}
        bgImage={gradient}
        rounded="full"
        color="white"
        fontSize="5xl"
      >
        <PhoneIcon />
      </Center>
    </a>
  );
};

export default GoToContactBox;
