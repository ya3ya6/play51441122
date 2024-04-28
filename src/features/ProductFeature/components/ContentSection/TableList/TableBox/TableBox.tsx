import { Center, Heading, HStack, Stack, Text } from '@chakra-ui/react';
import { FunctionComponent } from 'react';

interface TableBoxProps {
  title: string;
  text: string;
}

const TableBox: FunctionComponent<TableBoxProps> = ({ title, text }) => {
  return (
    <Stack w="100%" spacing="10px" direction={{ base: 'column', lg: 'row' }}>
      <Center rounded="lg" p="15px" minW="250px" lineHeight={7} bgColor="#BFEEF7" color="brand.900">
        <Heading fontSize="md">{title}</Heading>
      </Center>
      <HStack
        rounded="lg"
        p="15px"
        minW="250px"
        lineHeight={7}
        bgColor="gray.100"
        color="brand.900"
        flex={1}
      >
        <Text textAlign="start">{text}</Text>
      </HStack>
    </Stack>
  );
};

export default TableBox;
