import Utils from '@/utils';
import { Box, Container, Grid } from '@chakra-ui/react';
import { FunctionComponent } from 'react';
import { SingleProductModel } from '@/model';
import { ProductBox } from '@/common/components/Box';

interface Props {
  products: SingleProductModel[];
}

export const ProductList: FunctionComponent<Props> = ({ products }) => {
  return (
    <Box w="100%" bgColor="#f3f3f3">
      <Container maxW="container.xl">
        <Grid
          p="30px"
          pb="50px"
          gridTemplateColumns={Utils.DesignUtils.ReponsiveGridBreakPoint(1, 2, 4, 4)}
          gap="30px"
        >
          {products?.map(item => (
            <ProductBox key={item.id} product={item} />
          ))}
        </Grid>
      </Container>
    </Box>
  );
};

export default ProductList;
