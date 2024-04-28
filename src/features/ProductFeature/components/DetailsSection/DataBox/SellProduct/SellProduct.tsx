import { CheckCircleIcon } from '@/common/icons';
import { useProduct } from '@/features/ProductFeature/hooks';
import { Flex, Grid, Heading, HStack, Icon, Text } from '@chakra-ui/react';
import { FunctionComponent } from 'react';

interface SellProductProps {}

const SellProduct: FunctionComponent<SellProductProps> = () => {
  const product = useProduct();

  const exist = product.salesCondition.length !== 0;

  return (
    <Flex
      direction="column"
      justify="center"
      shadow={exist ? 'base' : 'none'}
      w="100%"
      rounded="lg"
      minH="140px"
      bgColor={exist ? 'white' : 'transparent'}
      p="12px"
    >
      {exist && <Heading fontSize="lg">شرایط فروش {product.name}</Heading>}

      <Grid maxW="100%" mt="15px" gap="12px" gridTemplateColumns={{ base: '1fr', xl: '1fr 1fr' }}>
        {product.salesCondition.map(({ text, id }) => (
          <HStack alignItems="center" color="GrayText" key={id}>
            <Icon as={CheckCircleIcon} color="green.400" />
            <Text>{text}</Text>
          </HStack>
        ))}
      </Grid>
    </Flex>
  );
};

export default SellProduct;
