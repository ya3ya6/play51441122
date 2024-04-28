import { I18_NAMESPACES } from '@/common/constants/Locales';
import { FilterIcon, ShopIcon } from '@/common/icons';
import { useText } from '@/hooks';
import {
  Button,
  Heading,
  HStack,
  Icon,
  Menu,
  MenuButton,
  MenuItem,
  MenuList,
} from '@chakra-ui/react';
import { useRouter } from 'next/router';
import { FunctionComponent } from 'react';

interface HeaderBoxProps {}

export const HeaderBox: FunctionComponent<HeaderBoxProps> = () => {
  const t = useText(I18_NAMESPACES.PROFILE);
  const router = useRouter();
  const handleFilterChange = (status: 'CR' | 'FA' | 'CO' | '') => () => {
    router.replace({
      query: {
        ...router.query,
        status,
      },
    });
  };

  return (
    <HStack align="center" spacing="auto">
      <HStack spacing={3}>
        <Icon as={ShopIcon} />
        <Heading fontSize="lg">{t('orders.title')}</Heading>
      </HStack>
      <HStack spacing={3}>
        <Menu>
          <MenuButton as={Button} rightIcon={<FilterIcon />}>
            {t('orders.filters.title')}
          </MenuButton>
          <MenuList minW="120px">
            <MenuItem onClick={handleFilterChange('')}>{t('orders.filters.all')}</MenuItem>
            <MenuItem onClick={handleFilterChange('CR')}>
              {t('orders.filters.expectation')}
            </MenuItem>
            <MenuItem onClick={handleFilterChange('CO')}>{t('orders.filters.call')}</MenuItem>
            <MenuItem onClick={handleFilterChange('FA')}>
              {t('orders.filters.notAnswered')}
            </MenuItem>
          </MenuList>
        </Menu>
      </HStack>
    </HStack>
  );
};
