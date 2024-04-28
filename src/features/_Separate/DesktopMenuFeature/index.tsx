import Link from 'next/link';
import ROUTES from '@/routers';
import { Box, Container, Flex, IconButton, Stack } from '@chakra-ui/react';
import { HomeIcon } from '@/common/icons';

import { FunctionComponent } from 'react';
import { useLanguageQuery } from '@/api/services/core';
import { AuthBox, LangBox } from '@/common/components/Box';
import { useShoppingModal } from '@/store/productStore';
import { useOrderCheckoutQuery } from '@/api/services/shop';
import { useText } from '@/hooks';
import MenuList from './components/MenuList/MenuList';
import { useMenuQuery } from '../../../api/services/core/_queries';

export const DesktopMenuFeature: FunctionComponent = () => {
  const { setOpen } = useShoppingModal();
  const { data: mainMenu } = useMenuQuery({
    slug: 'main-menu',
  });
  const { data } = useLanguageQuery(null);
  const { data: checkout } = useOrderCheckoutQuery(null);
  const t = useText();
  return (
    <Box display={{ base: 'none', lg: 'block' }} position="sticky" zIndex="1300" top="-1">
      <Flex bgImage="linear-gradient(50deg, rgba(19,169,199,1) 0%, rgba(10,85,100,1) 100%)">
        <Container maxW="container.xl">
          <Flex align="center" w="100%" justify="space-between">
            <Stack
              direction="row"
              align="center"
              spacing="20px"
              py={mainMenu ? 0 : 4}
              color="white"
            >
              <Link href={ROUTES.HOME} passHref>
                <a>
                  <IconButton
                    w="30px"
                    h="40px"
                    flexShrink={0}
                    rounded="full"
                    colorScheme="whiteAlpha"
                    aria-label="Home Link"
                    icon={<HomeIcon />}
                  />
                </a>
              </Link>
              {mainMenu && <MenuList data={mainMenu.children} />}
            </Stack>
            <Stack direction="row" ms="auto" spacing="10px">
              <AuthBox />
              {/* <ButtonWithIcon
                onClick={setOpen}
                colorScheme="gray"
                iconPosition="left"
                icon={<ShopIcon />}
              >
                <Text>{t('shoppingCard.title', { isCommon: true })}</Text>
                <Flex
                  align="center"
                  justify="center"
                  color="white"
                  fontSize="12"
                  w="20px"
                  h="20px"
                  me="-5px"
                  bgColor="blue.500"
                  rounded="full"
                  flexShrink={0}
                >
                  {checkout?.items?.length ?? '0'}
                </Flex>
              </ButtonWithIcon> */}
              <LangBox language={data} />
            </Stack>
          </Flex>
        </Container>
      </Flex>
    </Box>
  );
};
