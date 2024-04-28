import { FunctionComponent, useEffect } from 'react';
import {
  Box,
  Button,
  Center,
  Drawer,
  DrawerCloseButton,
  DrawerContent,
  DrawerOverlay,
  Flex,
  Heading,
  HStack,
  useMediaQuery,
  VStack,
} from '@chakra-ui/react';
import { useShoppingModal } from '@/store/productStore';
import { useDirection, useText, useToast } from '@/hooks';
import { useOrderCheckoutUpdateMutation } from '@/api/services/shop/_mutations';
import { useQueryClient } from 'react-query';
import Link from 'next/link';
import ROUTES from '@/routers';
import { useRouter } from 'next/router';
import { I18_NAMESPACES } from '@/common/constants/Locales';
import { useOrderCheckoutQuery } from '../../../api/services/shop/_queries';
import { ProductList } from './components';

interface ShoppingCardFeatureProps {}

export const ShoppingCardFeature: FunctionComponent<ShoppingCardFeatureProps> = () => {
  const [isMd] = useMediaQuery('(min-width: 768px)');
  const { successToast } = useToast();
  const { modal, setClose } = useShoppingModal();
  const { isRtl, direction } = useDirection();
  const queryClient = useQueryClient();
  const { data: checkout } = useOrderCheckoutQuery(null);
  const { mutate, isLoading } = useOrderCheckoutUpdateMutation(queryClient);
  const router = useRouter();
  const t = useText(I18_NAMESPACES.COMMON);
  const handleClear = () => {
    mutate(
      {
        items: [],
      },
      {
        onSuccess: () => {
          successToast(t('shoppingCard.message.clear', { isCommon: true }));
          setClose();
        },
      },
    );
  };

  useEffect(() => {
    if (!isMd) return;
    setClose();
  }, [isMd]);

  useEffect(() => {
    setClose();
  }, [router.route]);

  return (
    <Box id="shoppingCardModal">
      <Drawer
        size={isMd ? 'sm' : 'full'}
        isOpen={modal}
        placement={isRtl ? 'right' : 'left'}
        onClose={setClose}
      >
        <DrawerOverlay />
        <DrawerContent>
          <VStack height="full" alignItems="stretch">
            <Box h="60px">
              <Flex p="20px" dir={direction} align="center" justifyContent="space-between">
                <Heading fontSize="lg">{t('shoppingCard.title', { isCommon: true })}</Heading>
                <DrawerCloseButton position="static" />
              </Flex>
            </Box>
            <Box p="20px" flex={1} overflowY="auto">
              {checkout?.items.length ? (
                <ProductList />
              ) : (
                <Center h="full" w="full">
                  {t('shoppingCard.emptyText', { isCommon: true })}
                </Center>
              )}
            </Box>
            <Center
              bottom="0"
              left="0"
              right="0"
              h="70px"
              px="20px"
              borderTop="1px solid"
              borderColor="gray.300"
            >
              {!!checkout?.items.length && (
                <HStack w="100%">
                  <Link href={ROUTES.ORDER} passHref>
                    <Button as="a" w="50%" height="40px" colorScheme="green">
                      {t('shoppingCard.finalizeBtn')}
                    </Button>
                  </Link>
                  <Button
                    isLoading={isLoading}
                    disabled={isLoading}
                    onClick={handleClear}
                    w="50%"
                    height="40px"
                    colorScheme="red"
                  >
                    {t('shoppingCard.clearBtn')}
                  </Button>
                </HStack>
              )}
            </Center>
          </VStack>
        </DrawerContent>
      </Drawer>
    </Box>
  );
};
