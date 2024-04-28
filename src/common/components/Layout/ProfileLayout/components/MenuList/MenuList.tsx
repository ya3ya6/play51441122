import { useUserQuery } from '@/api/services/auth';
import { useNotificationsQuery } from '@/api/services/core';
import { ProfileMenu } from '@/common/constants/Global';
import { I18_NAMESPACES } from '@/common/constants/Locales';
import { useText } from '@/hooks';
import { Box, Center, Divider, Heading, Stack, Avatar } from '@chakra-ui/react';
import { FunctionComponent } from 'react';
import { MenuBox } from './MenuBox/MenuBox';

interface MenuListProps {}

export const MenuList: FunctionComponent<MenuListProps> = () => {
  const { data: user } = useUserQuery(null);
  const { data: notifications } = useNotificationsQuery(null);
  const t = useText(I18_NAMESPACES.COMMON);
  return (
    <Box>
      <Box
        w="110px"
        h="110px"
        rounded="full"
        margin="auto"
        border="2px solid"
        borderColor="gray.300"
        mb="20px"
      >
        <Avatar h="full" w="full" />
      </Box>
      <Heading fontSize="md" mb="2" textColor="gray.800" textAlign="center">
        {user?.fullName}
      </Heading>
      <Heading fontSize="md" textColor="gray.800" textAlign="center">
        {user?.email}
      </Heading>
      <Center mt="20px" w="100%">
        <Divider />
      </Center>
      <Stack w="100%" spacing={4} marginTop="20px">
        {ProfileMenu.map(({ id, title, slug = '', icon, notification = false }, index) => (
          <>
            <MenuBox
              key={id}
              id={id}
              title={t(title)}
              isExit={ProfileMenu.length - 1 === index}
              icon={icon}
              slug={slug}
              notification={notification}
              notificationCount={notifications?.allList?.filter(noti => noti.unread).length ?? 0}
            />
            {ProfileMenu.length - 1 !== index && <Divider />}
          </>
        ))}
      </Stack>
    </Box>
  );
};
