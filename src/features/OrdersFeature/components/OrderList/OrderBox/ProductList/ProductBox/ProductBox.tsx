import { ImageFallBack } from '@/common/components/Element';
import { I18_NAMESPACES } from '@/common/constants/Locales';
import { OrderModel } from '@/features/OrdersFeature/components/types';
import { useText } from '@/hooks';
import { Button, Center, Heading, HStack, Stack, Text, VStack } from '@chakra-ui/react';
import Link from 'next/link';
import { FunctionComponent } from 'react';

interface ProductBoxProps {
  product: OrderModel['products'][number];
}

const ProductBox: FunctionComponent<ProductBoxProps> = ({ product }) => {
  const t = useText(I18_NAMESPACES.PROFILE);
  return (
    <Stack
      direction={{ base: 'column', md: 'row' }}
      justify="space-between"
      spacing="20px"
      align="center"
      bgColor="white"
      p="20px"
      rounded="md"
      shadow="sm"
    >
      {/* if product has price width and height shoud be 150px else 120px */}
      <ImageFallBack
        flexShrink={0}
        border="2px solid"
        borderColor="gray.300"
        src={product.cover}
        rounded="md"
        fallBackWrapperProps={{
          rounded: 'md',
        }}
        width="120px"
        height="120px"
        objectFit="contain"
        alt={product.name}
      />
      <VStack ms="10px" spacing={4} align="flex-start">
        <HStack>
          <Heading fontSize="md">{t('orders.product.name')}:</Heading>
          <Text fontSize="md">{product.name}</Text>
        </HStack>
        <HStack>
          <Heading fontSize="md">{t('orders.product.type.title')}:</Heading>
          <Text fontSize="md">{t('orders.product.type.contractual')}</Text>
        </HStack>
        {/* if product has price ------------ */}

        {/* <HStack>
          <Heading fontSize="md">شناسه محصول:</Heading>
          <Text fontSize="md">یه چیزی</Text>
        </HStack>
        <HStack>
          <Heading fontSize="md">قیمت محصول:</Heading>
          <Text fontSize="md">1000000 تومان</Text>
        </HStack> */}

        {/* Else ------------ */}
        {!!product.catelog && (
          <HStack>
            <Button as="a" target="_blank" href={product.catelog} size="sm" colorScheme="brand">
              {t('orders.product.download')}
            </Button>
          </HStack>
        )}
      </VStack>
      <Center w={{ base: '100%', md: 'revert' }} ms="auto">
        <Button colorScheme="brand">
          <Link href={product.link} passHref>
            <a> {t('orders.product.link')}</a>
          </Link>
        </Button>
      </Center>
    </Stack>
  );
};

export default ProductBox;
