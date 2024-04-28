import { Box } from '@chakra-ui/react';
import Link from 'next/link';
import { FunctionComponent } from 'react';

interface MenuBoxProps {
  menuItem: {
    id: number;
    name: string;
    url: string;
  };
}

const MenuBox: FunctionComponent<MenuBoxProps> = ({ menuItem }) => {
  return (
    <Box w="100%">
      <Link passHref href={menuItem.url}>
        <a style={{ width: '100%' }}>
          <Box
            as="li"
            bgColor={{ base: 'rgba(32,137,175,0.12)', xl: 'transparent' }}
            w="100%"
            textAlign="center"
            p={{ base: '11px', xl: '10px 0' }}
            rounded="10px"
            color={{ base: 'var(--primaryColor)', xl: 'gray.500' }}
          >
            {menuItem.name}
          </Box>
        </a>
      </Link>
    </Box>
  );
};

export default MenuBox;
