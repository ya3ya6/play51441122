import { Box, Flex, Text } from '@chakra-ui/react';
import Link from 'next/link';
import { FunctionComponent, useState } from 'react';
import DropDown from '../DropDown/DropDown';

type SingleMenu = {
  name: string;
  slug: string;
  id: number;
  url?: string;
  children: SingleMenu[] | [];
};

interface MenuBoxProps {
  name: string;
  url?: string;
  depthLevel: number;
  children: SingleMenu[];
}

const MenuBox: FunctionComponent<MenuBoxProps> = ({ name, children, depthLevel, url }) => {
  const [dropdown, setDropdown] = useState(false);
  return (
    <Flex
      direction="column"
      role="group"
      height="100%"
      position="relative"
      onMouseOver={() => setDropdown(true)}
      onMouseLeave={() => setDropdown(false)}
    >
      {children?.length > 0 ? (
        <Box>
          <Flex
            _hover={
              depthLevel > 0
                ? {
                    bgColor: 'gray.100',
                  }
                : {}
            }
            padding="20px"
            rounded="lg"
            align="center"
            justify="space-between"
          >
            {url ? (
              <Link passHref href={url ?? ''}>
                <Text as="a" rounded="lg">
                  {name}
                </Text>
              </Link>
            ) : (
              <Text as="a" rounded="lg">
                {name}
              </Text>
            )}
            {depthLevel > 0 ? <span>&raquo;</span> : <span className="arrow" />}
          </Flex>
          <DropDown depthLevel={depthLevel} submenus={children} dropdown={dropdown} />
        </Box>
      ) : (
        <Link passHref href={url ?? ''}>
          <Text
            padding="20px"
            as="a"
            // colorScheme="whiteAlpha"
            _hover={
              depthLevel > 0
                ? {
                    bgColor: 'gray.100',
                  }
                : {}
            }
            // padding="20px"
            rounded="lg"
            aria-expanded={dropdown ? 'true' : 'false'}
          >
            {name}
          </Text>
        </Link>
      )}
    </Flex>
  );
};

export default MenuBox;
