import { useLanguageQuery, useMenuQuery } from '@/api/services/core';
import { AuthBox, LangBox, TopNav } from '@/common/components/Box';
import { MenuIcon } from '@/common/icons';
import { useDirection, useText } from '@/hooks';
import {
  Drawer,
  DrawerBody,
  DrawerCloseButton,
  DrawerContent,
  DrawerHeader,
  DrawerOverlay,
  Flex,
  IconButton,
  Text,
  useDisclosure,
  useMediaQuery,
  Box,
} from '@chakra-ui/react';
import { useEffect } from 'react';
import 'react-pro-sidebar/dist/css/styles.css';
import { MenuList } from './components';

export const MobileMenuFeature = () => {
  const [isMd] = useMediaQuery('(min-width: 768px)');
  const t = useText();
  const { isOpen, onOpen, onClose } = useDisclosure();
  const { data } = useLanguageQuery(null);
  const { direction } = useDirection();
  const { data: mainMenu } = useMenuQuery({
    slug: 'main-menu',
  });

  useEffect(() => {
    if (!isMd) return;
    onClose();
  }, [isMd]);

  return (
    <Box>
      <IconButton
        aria-label="shopping-card"
        onClick={onOpen}
        display={{ base: 'flex', lg: 'none' }}
        cursor="pointer"
        position="absolute"
        left="30px"
        top="25px"
        fontSize="1.6rem"
        alignItems="center"
        justifyContent="center"
        rounded="full"
        colorScheme="cyan"
        variant="ghost"
        p={2}
        icon={<MenuIcon />}
      />
      <Drawer id="menuDrawer" size="full" isOpen={isOpen} placement="right" onClose={onClose}>
        <DrawerOverlay />
        <DrawerContent>
          <DrawerHeader pb="80px" borderBottom="1px solid" borderColor="gray.300" textAlign="right">
            <Flex justifyContent="space-between">
              <TopNav action={<DrawerCloseButton />} />
            </Flex>
          </DrawerHeader>
          <DrawerBody p="0">
            <Box overflowY="auto" p="20px">
              <Flex dir={direction} align="center" justifyContent="space-between">
                <Text>{t('selectLang')}</Text>
                <LangBox language={data} />
              </Flex>
              <Flex dir={direction} mt="30px" align="center" justifyContent="space-between">
                <Text>{t('accManage')}</Text>
                <AuthBox varient="Button" />
              </Flex>
              <Box mt="30px">
                <MenuList data={mainMenu?.children ?? []} onClose={onClose} />
              </Box>
            </Box>
          </DrawerBody>
        </DrawerContent>
      </Drawer>
    </Box>
  );
};
