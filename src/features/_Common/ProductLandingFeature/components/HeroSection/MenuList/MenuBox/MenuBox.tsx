import { Box, Text } from '@chakra-ui/react';
import { FunctionComponent } from 'react';

interface MenuBoxProps {
  title: string;
  slug: string;
  color: string;
}

const MenuBox: FunctionComponent<MenuBoxProps> = ({ title, slug, color }) => {
  return (
    <Box
      border="2px solid"
      fontWeight="black"
      color={color}
      borderColor={color}
      _hover={{
        bgColor: color,
        color: 'white',
      }}
      rounded="xl"
      p="10px"
    >
      <a href={slug}>
        <Text textAlign="center">{title}</Text>
      </a>
    </Box>
  );
};

export default MenuBox;
