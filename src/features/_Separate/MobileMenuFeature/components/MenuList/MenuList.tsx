import { MinusIcon, PlusIcon } from '@/common/icons';
import { useDirection } from '@/hooks';
import { Box, ChakraProps, Flex, Icon, Text } from '@chakra-ui/react';
import Link from 'next/link';
import { FunctionComponent } from 'react';
import Collapsible from 'react-collapsible';

type SingleMenu = {
  name: string;
  slug: string;
  id: number;
  url?: string;
  children: SingleMenu[] | [];
};

interface MenuListProps extends ChakraProps {
  data: SingleMenu[];
  onClose: () => void;
}

export const MenuList: FunctionComponent<MenuListProps> = ({ data, onClose, ...chakraProps }) => {
  const { direction } = useDirection();
  return (
    <Flex dir={direction} direction="column" {...chakraProps}>
      {data.map(({ name, id, slug, children, url }) => (
        <Collapsible
          style={{ margin: '40px 0' }}
          key={id}
          trigger={
            <Flex w="100%" align="center" justify="space-between">
              {url ? (
                <Box onClick={() => onClose()}>
                  <Link href={url} passHref>
                    <a>
                      <Text>{name}</Text>
                    </a>
                  </Link>
                </Box>
              ) : (
                <Text>{name}</Text>
              )}

              {children.length > 0 ? <Icon as={PlusIcon} /> : null}
            </Flex>
          }
          triggerWhenOpen={
            <Flex w="100%" align="center" justify="space-between">
              {url ? (
                <Box onClick={() => onClose()}>
                  <Link href={url}>
                    <a href="">
                      <Text>{name}</Text>
                    </a>
                  </Link>
                </Box>
              ) : (
                <Text>{name}</Text>
              )}
              {children.length > 0 ? <Icon as={MinusIcon} /> : null}
            </Flex>
          }
        >
          <MenuList data={children} ms="20px" onClose={onClose} />
        </Collapsible>
      ))}
    </Flex>
  );
};
