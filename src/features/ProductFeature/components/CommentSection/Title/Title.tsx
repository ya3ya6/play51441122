import { Heading, Text, VStack } from '@chakra-ui/react';
import { FunctionComponent } from 'react';

interface TitleProps {
  title: string;
  text: string;
}

const Title: FunctionComponent<TitleProps> = ({ title, text }) => {
  return (
    <VStack my="80px" spacing={3} px="10px">
      <Heading lineHeight={10} textAlign="center" color="brand.700" fontSize="xl">
        {title}
      </Heading>
      <Text lineHeight={10} textAlign="center" color="GrayText" fontSize="lg">
        {text}
      </Text>
    </VStack>
  );
};

export default Title;
