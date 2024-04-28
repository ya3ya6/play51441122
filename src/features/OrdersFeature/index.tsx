import { Box, Divider, Flex } from '@chakra-ui/react';
import { FunctionComponent } from 'react';
import { HeaderBox, OrderList } from './components';

interface OrdersFeatureProps {}

export const OrdersFeature: FunctionComponent<OrdersFeatureProps> = () => {
  return (
    <Box h="100%">
      <HeaderBox />
      <Divider mt={5} />
      <Flex
        direction="column"
        align="flex-start"
        justify="flex-start"
        h="calc(100% - 80px)"
        mt="20px"
      >
        <OrderList />
      </Flex>
    </Box>
  );
};
