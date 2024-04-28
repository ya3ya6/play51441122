import EmptyBox from '@/common/components/Box/EmptyBox/EmptyBox';
import { I18_NAMESPACES } from '@/common/constants/Locales';
import { useText } from '@/hooks';
import { VStack } from '@chakra-ui/react';
import { FunctionComponent } from 'react';
import { NotificationModel } from '../../types';
import NotificationBox from './NotificationBox/NotificationBox';

interface NotificationListProps {
  data: NotificationModel[];
}

export const NotificationList: FunctionComponent<NotificationListProps> = ({ data }) => {
  const t = useText(I18_NAMESPACES.PROFILE);
  return (
    <VStack h="calc(100% - 60px)" mt="20px" spacing={3}>
      {data.length ? (
        data.map(notification => (
          <NotificationBox key={notification.id} notification={notification} />
        ))
      ) : (
        <EmptyBox text={t('notification.alert.text')} title={t('notification.alert.title')} />
      )}
    </VStack>
  );
};
