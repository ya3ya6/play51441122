import { useNotificationsQuery, useReadNotificationsMutation } from '@/api/services/core';
import { useToast } from '@/hooks';
import { useEffect } from 'react';
import { useQueryClient } from 'react-query';

export const useNotification = () => {
  const { successToast } = useToast();
  const { data: notifications } = useNotificationsQuery(null);
  const queryClient = useQueryClient();
  const mutate = useReadNotificationsMutation();

  useEffect(() => {
    if (mutate.isLoading) {
      return;
    }

    const unReadNotifs = notifications?.allList.filter(notif => notif.unread) ?? [];

    unReadNotifs.forEach(notif => {
      successToast(notif.verb);
    });

    if (unReadNotifs.length) {
      mutate.mutate(
        {
          slugs: unReadNotifs.map(notif => notif.slug),
        },
        {
          onSuccess: () => {
            useNotificationsQuery.invalidate({ queryClient }, null);
          },
        },
      );
    }
  }, [notifications]);
};
