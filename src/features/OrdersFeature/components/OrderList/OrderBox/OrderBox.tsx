import { FunctionComponent } from 'react';
import {
  Box,
  Button,
  Collapse,
  Heading,
  HStack,
  Stack,
  Text,
  useDisclosure,
} from '@chakra-ui/react';
import { CheckedIcon, ErrorIcon, WarningIcon } from '@/common/icons';
import { useDate } from '@/utils/helpers';
import { useText } from '@/hooks';
import { I18_NAMESPACES } from '@/common/constants/Locales';
import { ProductList } from './ProductList/ProductList';
import { OrderModel } from '../../types';

interface OrderBoxProps {
  order: OrderModel;
}

const OrderBox: FunctionComponent<OrderBoxProps> = ({ order }) => {
  const { date } = useDate();
  const { isOpen, onToggle } = useDisclosure();
  const t = useText(I18_NAMESPACES.PROFILE);
  const colorStatus = order.status === 'CR' ? 'orange' : order.status === 'FA' ? 'red' : 'green';

  return (
    <Box shadow="sm" border="1px solid" borderColor="gray.100" p="10px" rounded="lg" w="100%">
      <Stack
        direction={{ base: 'column', md: 'row' }}
        align={{ md: 'center' }}
        justify={{ md: 'space-between' }}
        spacing="10px"
      >
        <Stack align="flex-start" spacing={3}>
          <Stack
            direction={{ base: 'column', sm: 'row' }}
            spacing="20px"
            color={`${colorStatus}.300`}
          >
            <HStack>
              <Box rounded="full" fontSize="2xl">
                {order.status === 'CO' && <CheckedIcon />}
                {order.status === 'CR' && <WarningIcon />}
                {order.status === 'FA' && <ErrorIcon />}
              </Box>
              <Heading fontSize="lg">
                {order.status === 'CO' && t('orders.orderType.done')}
                {order.status === 'CR' && t('orders.orderType.expectation')}
                {order.status === 'FA' && t('orders.orderType.faild')}
              </Heading>
            </HStack>
            <Text display={{ base: 'none', sm: 'inline' }}> | </Text>
            <Text fontWeight="bold">
              {' '}
              {t('orders.orderCode')} {order.id}
            </Text>
          </Stack>
          <Stack direction={{ base: 'column', md: 'row' }} color="GrayText" spacing={3}>
            <Text>
              {' '}
              {t('orders.dateOrder')}: {date(order.createdAt)}
            </Text>
            {!!order.supportCall && (
              <>
                <Text> - </Text>
                <Text>
                  {t('orders.callOrder')}: {date(order.supportCall)}
                </Text>
              </>
            )}
            {!!order.supporterName && (
              <>
                <Text> - </Text>
                <Text>
                  {' '}
                  {t('orders.supportName')}: {order.supporterName}{' '}
                </Text>
              </>
            )}
          </Stack>
        </Stack>

        <Button onClick={onToggle} size="sm" colorScheme="gray">
          {!isOpen ? t('orders.moreButton') : t('orders.summaryButton')}
        </Button>
      </Stack>
      <Collapse in={isOpen} animateOpacity>
        <Box p="15px" mt="5" bg="gray.100" rounded="md" shadow="base">
          <ProductList products={order.products} />
        </Box>
      </Collapse>
    </Box>
  );
};

export default OrderBox;

// اگر محصول قیمت داشت

// 4.مرجوع شده
// 3.لغو سفارش
// 3.تحویل داده شده
// 2.در حال آماده سازی برای ارسال
// 1.در حال پردازش
