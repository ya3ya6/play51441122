import { useOrderCheckoutQuery, useOrderCheckoutUpdateMutation } from '@/api/services/shop';
import { Center, Divider, VStack } from '@chakra-ui/react';
import { FunctionComponent } from 'react';
import { useQueryClient } from 'react-query';
import ProductBox from './ProductBox/ProductBox';

const ProductList: FunctionComponent = () => {
  const { data } = useOrderCheckoutQuery(null);
  const queryClient = useQueryClient();
  const { mutate, isLoading } = useOrderCheckoutUpdateMutation(queryClient);

  const handleRemoveOne = (id: number) => {
    mutate({
      items: data!.items.filter(item => item.product.id !== id).map(item => item.product.id),
    });
  };

  return (
    <VStack spacing="20px" alignItems="stretch">
      {data?.items.map(({ product: { id, name, isAvailable, price, cover, coverAlt } }, index) => (
        <>
          <ProductBox
            key={id}
            coverAlt={coverAlt}
            cover={cover}
            id={id}
            name={name}
            isAvailable={isAvailable}
            price={price}
            isLoading={isLoading}
            onRemoveOne={handleRemoveOne}
          />
          {index !== (data?.items.length ?? 0) - 1 && (
            <Center>
              <Divider />
            </Center>
          )}
        </>
      ))}
    </VStack>
  );
};

export default ProductList;
