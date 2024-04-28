import {
  Alert,
  AlertDescription,
  AlertIcon,
  AlertTitle,
  Box,
  Button,
  Flex,
  Heading,
} from '@chakra-ui/react';
import { PlusIcon, TrashIcon } from '@/common/icons';
import { FunctionComponent } from 'react';
import { useText } from '@/hooks';
import { I18_NAMESPACES } from '@/common/constants/Locales';
import NextLink from 'next/link';
import { useOrderCheckoutQuery } from '@/api/services/shop/_queries';
import { useOrderCheckoutUpdateMutation } from '@/api/services/shop/_mutations';
import { useQueryClient } from 'react-query';
import ROUTES from '@/routers';
import { CartList } from './CartList/CartList';

export const CartSection: FunctionComponent = () => {
  const { data: shoppingCart } = useOrderCheckoutQuery(null);
  const queryClient = useQueryClient();
  const mutate = useOrderCheckoutUpdateMutation(queryClient);
  const t = useText(I18_NAMESPACES.ORDER);

  const onRemoveItem = (id: number) => {
    mutate.mutate({
      items: shoppingCart!.items.map(item => item.product.id).filter(itemId => itemId !== id),
    });
  };

  const clearShoppingCard = () => {
    mutate.mutate({
      items: [],
    });
  };

  return (
    <Box>
      <Heading size="md" mb="20px" textAlign="center" as="h1">
        {t('shoppingCart.title')}
      </Heading>
      <Flex align="center" justify="flex-end" mb="20px">
        <Button
          disabled={!shoppingCart?.items.length || mutate.isLoading}
          isLoading={mutate.isLoading}
          onClick={clearShoppingCard}
          leftIcon={<TrashIcon />}
          colorScheme="red"
          variant="ghost"
          size="sm"
        >
          {t('shoppingCart.deleteBtn')}
        </Button>
      </Flex>
      {shoppingCart?.items.length ? (
        <CartList products={shoppingCart?.items} onClickRemove={onRemoveItem} />
      ) : (
        <Alert
          status="info"
          variant="subtle"
          flexDirection="column"
          alignItems="center"
          justifyContent="center"
          textAlign="center"
          minH="180px"
          p="15px"
          rounded="md"
        >
          <AlertIcon typeof="error" boxSize="40px" mr={0} />
          <AlertTitle mt={4} mb={1} fontSize="lg">
            {t('alert.title')}
          </AlertTitle>
          <AlertDescription maxWidth="md">{t('alert.text')}</AlertDescription>
        </Alert>
      )}

      <Flex mt="40px" align="center" justify="center">
        <NextLink passHref href={ROUTES.SHOP.INDEX}>
          <Button
            as="a"
            leftIcon={<PlusIcon />}
            fontWeight="normal"
            colorScheme="red"
            rounded="xl"
            size="lg"
          >
            {t('shoppingCart.goToShop')}
          </Button>
        </NextLink>
      </Flex>
    </Box>
  );
};
