import { useOrdersQuery } from '@/api/services/shop';
import EmptyBox from '@/common/components/Box/EmptyBox/EmptyBox';
import { I18_NAMESPACES } from '@/common/constants/Locales';
import { useText } from '@/hooks';
import ROUTES from '@/routers';
import { Stack } from '@chakra-ui/react';
import { useRouter } from 'next/router';
import { FunctionComponent } from 'react';
import { OrderModel } from '../types';
import OrderBox from './OrderBox/OrderBox';

interface OrderListProps {}

export const OrderList: FunctionComponent<OrderListProps> = () => {
  const router = useRouter();
  const t = useText(I18_NAMESPACES.PROFILE);
  const { data: orders } = useOrdersQuery({
    status: (router.query.status as OrderModel['status']) ?? '',
  });

  const ordersWithLink =
    orders?.map(order => ({
      ...order,
      products: order.products.map(product => ({
        ...product,
        link: ROUTES.PRODUCT.PRODUCT(product.slug),
      })),
    })) ?? [];

  return (
    <>
      {orders?.length ? (
        <Stack spacing="20px" align="center" justify="flex-start" w="100%">
          {ordersWithLink?.map(order => (
            <OrderBox key={order.id} order={order} />
          ))}
        </Stack>
      ) : (
        <EmptyBox title={t('orders.alert.title')} text={t('orders.alert.text')} />
      )}
    </>
  );
};
