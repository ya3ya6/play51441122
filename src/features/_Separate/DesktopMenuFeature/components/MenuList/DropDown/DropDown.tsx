import { Flex } from '@chakra-ui/react';
import { FunctionComponent } from 'react';
import MenuBox from '../MenuBox/MenuBox';

type SingleMenu = {
  name: string;
  slug: string;
  id: number;
  url?: string;
  children: SingleMenu[] | [];
};

interface DropDownProps {
  submenus: SingleMenu[];
  dropdown: boolean;
  depthLevel: number;
}

const DropDown: FunctionComponent<DropDownProps> = ({ submenus, dropdown, depthLevel }) => {
  const newDepthLevel = depthLevel + 1;
  const dropdownClass = newDepthLevel > 1;
  return (
    <Flex
      display={dropdown ? 'flex' : 'none'}
      direction="column"
      position="absolute"
      minWidth="155px"
      width="fit-content"
      rounded="lg"
      bgColor="white"
      zIndex="1000"
      height="fit-content"
      color="GrayText"
      top={dropdownClass ? '40%' : '80%'}
      left={dropdownClass ? '50%' : '50%'}
      transform={dropdownClass ? 'translateX(40%)' : 'translateX(-50%)'}
      shadow="xl"
    >
      {submenus.map(({ name, children, url, id }, index) => (
        <MenuBox name={name} children={children} key={id} url={url} depthLevel={newDepthLevel} />
      ))}
    </Flex>
  );
};

export default DropDown;
