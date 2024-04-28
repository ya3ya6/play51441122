import { COLORS } from '@/common/constants/Ui';
import { Box, Heading, Stack, Text } from '@chakra-ui/react';
import { FunctionComponent } from 'react';
import { useProduct } from '../../../hooks';

interface TextBoxProps {}

const TextBox: FunctionComponent<TextBoxProps> = () => {
  const product = useProduct();

  return (
    <Box w={{ base: '100%', xl: '60%' }}>
      <Heading as="h1" size="lg" color={COLORS.primaryColor} lineHeight={9}>
        {product.name}{' '}
      </Heading>
      <Heading color="gray.700" my="20px" as="h2" size="md" lineHeight={9}>
        {product.subTitle}
      </Heading>
      <Text color="GrayText" lineHeight={9}>
        {product.abstract}
      </Text>
      <Stack direction="row" mt="40px" spacing="20px" justify={{ base: 'center', lg: 'revert' }}>
        {/* <Button colorScheme="brand" minW="150px" h="45px">
          نظر مشتریان ما
        </Button>
        <Button variant="outline" colorScheme="brand" border="2px" minW="150px" h="45px">
          جزئیات بیشتر
        </Button> */}
      </Stack>
    </Box>
  );
};

export default TextBox;
