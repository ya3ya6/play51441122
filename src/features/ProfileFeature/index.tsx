import { useNotificationsQuery } from '@/api/services/core';
import { I18_NAMESPACES } from '@/common/constants/Locales';
import { NotificationIcon } from '@/common/icons';
import { useText } from '@/hooks';
import { Box, Divider, Heading, HStack, Icon } from '@chakra-ui/react';
import { FunctionComponent } from 'react';
import { NotificationList } from './components';

interface ProfileFeatureProps {}

export const ProfileFeature: FunctionComponent<ProfileFeatureProps> = () => {
  const { data: notifications } = useNotificationsQuery(null);
  const t = useText(I18_NAMESPACES.PROFILE);
  return (
    <Box height="100%">
      <Box>
        <HStack spacing={3} mb={5}>
          <Icon as={NotificationIcon} />
          <Heading fontSize="lg">{t('notification.title')}</Heading>
        </HStack>
        <Divider />
      </Box>
      <NotificationList data={notifications?.allList ?? []} />
    </Box>
  );
};
