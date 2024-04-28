import { Box, Center, Flex, Icon, Text } from '@chakra-ui/react';
import { FunctionComponent } from 'react';

interface DetailsBoxProps {
  icon: () => JSX.Element;
  text: string;
  gradient: string;
}

const DetailsBox: FunctionComponent<DetailsBoxProps> = ({ icon, text, gradient }) => {
  return (
    <Flex direction="column">
      <Center w="100%">
        <Center
          zIndex={2}
          w="110px"
          height="110px"
          border="15px solid"
          borderColor="#f3f3f3"
          rounded="full"
          color="white"
          bgImage={gradient}
          mb="-50px"
        >
          <Icon as={icon as any} />
        </Center>
      </Center>
      <Box shadow="lg" rounded="3xl" bgColor="white" p="20px" flex={1} pt="80px">
        <Text textAlign="center" color="GrayText" lineHeight={9}>
          {text}
        </Text>
      </Box>
    </Flex>
  );
};

export default DetailsBox;
