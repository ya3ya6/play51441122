import { useAboutusQuery } from '@/api/services/overview/_queries';
import { I18_NAMESPACES } from '@/common/constants/Locales';
import { useText } from '@/hooks';
import { Flex, Heading } from '@chakra-ui/react';
import { FunctionComponent } from 'react';
import { ProductList } from './ProductList/ProductList';

export const ProductSection: FunctionComponent = () => {
  const { data: aboutUs } = useAboutusQuery(null);

  const t = useText(I18_NAMESPACES.ABOUT);

  if (!aboutUs?.simpleProducts.length) {
    return null;
  }

  return (
    <Flex mt={{ base: 20, sm: 40, md: 50, lg: 60 }} align="center" direction="column">
      <Heading size="lg" color="#1f87ad">
        {t('products.title')}
      </Heading>
      <Flex
        align="center"
        justify="center"
        direction={{ base: 'column', md: 'row' }}
        gap="20px"
        mt="50px"
        w="100%"
      >
        {aboutUs?.simpleProducts.map(product => (
          <ProductList key={product.id} product={product} />
        ))}
      </Flex>
    </Flex>
  );
};
