import { ChakraProps, Stack } from '@chakra-ui/react';
import { FunctionComponent } from 'react';
import MenuBox from './MenuBox/MenuBox';

interface MenuListProps extends ChakraProps {
  menu: {
    id: number;
    name: string;
    url: string;
  }[];
}

const MenuList: FunctionComponent<MenuListProps> = ({ menu, ...chakraProps }) => {
  return (
    <Stack
      listStyleType="none"
      as="ul"
      w="100%"
      p="10px 0"
      spacing={{ base: '10px', xl: '0' }}
      align="center"
      {...chakraProps}
    >
      {menu.map(menuItem => (
        <MenuBox key={menuItem.id} menuItem={menuItem} />
      ))}
    </Stack>
  );
};

export default MenuList;
