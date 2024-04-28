import { Flex, Heading, Text } from '@chakra-ui/react';
import { FunctionComponent } from 'react';

interface Props {
  article: {
    name: string;
    abstract: string;
  };
}

export const LatestArticleBox: FunctionComponent<Props> = ({ article }) => {
  return (
    <Flex
      direction="column"
      py="10px"
      maxW={{ xl: ' 75%' }}
      pe={{ base: '0', lg: '100px' }}
      ps={{ base: '0', lg: '80px' }}
    >
      <Heading textAlign={{ base: 'center', xl: 'revert' }} color="gray.700" size="lg" mb="20px">
        {article?.name}
      </Heading>
      <Text
        textAlign={{ base: 'center', xl: 'revert' }}
        noOfLines={5}
        color="gray.600"
        lineHeight={10}
      >
        {article?.abstract}
      </Text>
    </Flex>
  );
};
