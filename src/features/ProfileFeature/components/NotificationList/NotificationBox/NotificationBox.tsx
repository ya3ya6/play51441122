import { NotificationModel } from '@/features/ProfileFeature/types';
import { Alert, AlertDescription, AlertIcon, VStack } from '@chakra-ui/react';
import Link from 'next/link';
import { FunctionComponent } from 'react';

interface NotificationBoxProps {
  notification: NotificationModel;
}

const NotificationBox: FunctionComponent<NotificationBoxProps> = ({ notification }) => {
  return (
    <Link passHref href={notification.data?.href ?? ''}>
      <Alert as="a" rounded="lg" position="relative" status="info">
        <AlertIcon />
        <VStack spacing={1} align="flex-start">
          <AlertDescription maxWidth="sm">{notification.verb}</AlertDescription>
        </VStack>
      </Alert>
    </Link>
  );
};

export default NotificationBox;
