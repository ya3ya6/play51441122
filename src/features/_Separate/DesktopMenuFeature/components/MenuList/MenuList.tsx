import { ChakraProps, Stack } from '@chakra-ui/react';
import { FunctionComponent } from 'react';
import MenuBox from './MenuBox/MenuBox';

type SingleMenu = {
  name: string;
  slug: string;
  id: number;
  url?: string;
  children: SingleMenu[] | [];
};

interface MenuListProps extends ChakraProps {
  data: SingleMenu[];
}

const MenuList: FunctionComponent<MenuListProps> = ({ data, ...chakraProps }) => {
  return (
    <Stack direction="row" marginLeft="30px" spacing="30px" as="nav" {...chakraProps}>
      {data.map(({ name, children, id, url }) => {
        return <MenuBox key={id} name={name} url={url} children={children} depthLevel={0} />;
      })}
    </Stack>
  );
};

export default MenuList;
