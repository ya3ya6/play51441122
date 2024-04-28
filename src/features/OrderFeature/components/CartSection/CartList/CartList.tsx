import { Stack } from '@chakra-ui/react';
import { FunctionComponent } from 'react';
import { CartBox } from './CartBox/CartBox';

interface CartSectionProps {
  products: {
    product: {
      id: number;
      name: string;
      cover: string;
      coverAlt: string;
      isAvailable: boolean;
      abstract: string;
    };
  }[];
  onClickRemove: (id: number) => void;
}

export const CartList: FunctionComponent<CartSectionProps> = ({ products, onClickRemove }) => {
  return (
    <Stack spacing="20px">
      {products.map(({ product }) => (
        <CartBox
          key={product.id}
          abstract={product.abstract}
          name={product.name}
          cover={product.cover}
          coverAlt={product.coverAlt}
          isAvailable={product.isAvailable}
          id={product.id}
          onClickRemove={onClickRemove}
        />
      ))}
    </Stack>
  );
};
