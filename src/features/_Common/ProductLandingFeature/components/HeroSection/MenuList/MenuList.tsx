import { Flex, Grid } from '@chakra-ui/react';
import { FunctionComponent } from 'react';
import { MENU_LIST } from '../../../constants';
import MenuBox from './MenuBox/MenuBox';

interface MenuListProps {
  color: string;
}

const MenuList: FunctionComponent<MenuListProps> = ({ color }) => {
  return (
    <Flex flexWrap="wrap" mt="60px" w="100%" justify="center" align="center">
      <Grid gridTemplateColumns={{ base: '1fr 1fr', lg: '1fr 1fr 1fr' }} gap="20px">
        {MENU_LIST.map(({ id, slug, title }) => (
          <MenuBox key={id} title={title} slug={slug} color={color} />
        ))}
      </Grid>
    </Flex>
  );
};

export default MenuList;
