import { Box, Grid, Heading, HStack } from '@chakra-ui/react';
import { FunctionComponent } from 'react';

interface HeaderBoxProps {
  color: string;
  title: string;
}

const HeaderBox: FunctionComponent<HeaderBoxProps> = ({ color, title }) => {
  return (
    <HStack w="100%" align="center" spacing="10px">
      <HStack flexShrink={0} align="center" spacing="8px" mx="10px">
        <Grid placeContent="center" w="20px" h="20px" bgColor={`${color}.100`} rounded="full">
          <Box w="10px" h="10px" bgColor={`${color}.500`} rounded="full" />
        </Grid>
        <Heading color="gray.600" size="md">
          {title}
        </Heading>
      </HStack>
    </HStack>
  );
};

export default HeaderBox;
