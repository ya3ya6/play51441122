import { Flex, Heading, Text } from '@chakra-ui/react';
import { FunctionComponent } from 'react';
import { useAboutusQuery } from '@/api/services/overview/_queries';

export const BioBox: FunctionComponent = () => {
  const { data: aboutUs } = useAboutusQuery(null);

  return (
    <Flex
      maxW="container.xl"
      align="center"
      mx="auto"
      bgColor="#9CDFF621"
      justify="center"
      textAlign="center"
      mt="-100px"
      direction="column"
      pt="20px"
      px="30px"
      pb={{ base: '120px', sm: '150px', md: '200px' }}
      borderBottomRadius="100px"
    >
      <Heading my="20px" as="h2" size="md">
        {aboutUs?.title}
      </Heading>
      <Text
        maxW="container.md"
        textAlign="justify"
        style={{
          textAlignLast: 'center',
        }}
        lineHeight="40px"
      >
        {aboutUs?.description}
      </Text>
    </Flex>
  );
};
