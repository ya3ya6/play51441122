import { Box, Center, Heading } from '@chakra-ui/react';
import { FunctionComponent } from 'react';

interface TitleProps {
  children: string;
}

export const Title: FunctionComponent<TitleProps> = ({ children }) => {
  return (
    <Center>
      <Box w="100%" h="1px" bgColor="gray.300" />
      <Heading color="gray.500" size="md" flexShrink={0} mx="50px">
        {children}
      </Heading>
      <Box w="100%" h="1px" bgColor="gray.300" />
    </Center>
  );
};
