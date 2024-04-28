import { useLogOutMutation } from '@/api/services/auth';
import { I18_NAMESPACES } from '@/common/constants/Locales';
import { useText } from '@/hooks';
import ROUTES from '@/routers';
import { Center, Flex, Heading, Icon } from '@chakra-ui/react';
import { IconType } from '@react-icons/all-files/lib';
import Link from 'next/link';
import { useRouter } from 'next/router';
import { FunctionComponent, MouseEventHandler } from 'react';

interface MenuBoxProps {
  id: number;
  title: string;
  isExit?: boolean;
  icon: IconType;
  slug: string;
  notification: boolean;
  notificationCount: number;
}

export const MenuBox: FunctionComponent<MenuBoxProps> = ({
  title,
  isExit,
  icon,
  notification,
  slug,
  notificationCount = 0,
}) => {
  const t = useText(I18_NAMESPACES.COMMON);
  const { pathname, locale } = useRouter();
  const mutate = useLogOutMutation();
  const exitHandler: MouseEventHandler<HTMLDivElement> = event => {
    if (isExit) {
      event.preventDefault();
      mutate.mutate(undefined, {
        onSuccess: () => {
          window.location.href = ROUTES.HOME + (locale !== 'fa' ? locale ?? 'fa' : '');
        },
      });
    }
  };

  return (
    <Link passHref href={slug}>
      <Flex
        onClick={exitHandler}
        as="a"
        py="10px"
        px="5px"
        cursor="pointer"
        align="center"
        position="relative"
        _before={
          pathname === slug
            ? {
                content: `" "`,
                width: '4px',
                height: '100%',
                bgColor: 'brand.500',
                display: 'block',
                borderRadius: '10px',
                position: 'absolute',
                left: '-23px',
              }
            : {}
        }
      >
        <Icon as={icon} me="10px" fontSize="xl" color={isExit ? 'red.500' : 'gray.600'} />
        <Heading fontSize="md" color={isExit ? 'red.500' : 'gray.600'}>
          {t(title)}
        </Heading>
        {notification && !!notificationCount && (
          <Center
            ms="auto"
            color="white"
            bgColor="red.500"
            rounded="full"
            p="5px"
            w="28px"
            h="28px"
          >
            {notificationCount}
          </Center>
        )}
      </Flex>
    </Link>
  );
};
