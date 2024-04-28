import { Box, Stack } from '@chakra-ui/react';
import { FunctionComponent } from 'react';
import { OrderModel } from '../../../types';
import ProductBox from './ProductBox/ProductBox';

interface ProductListProps {
  products: OrderModel['products'];
}

export const ProductList: FunctionComponent<ProductListProps> = ({ products }) => {
  return (
    <Box>
      <Stack spacing="20px">
        {products.map(product => (
          <ProductBox key={product.id} product={product} />
        ))}
      </Stack>
    </Box>
  );
};
