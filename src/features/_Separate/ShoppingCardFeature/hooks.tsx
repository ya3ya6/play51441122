import { useOrderCheckoutAddMutation } from '@/api/services/shop';
import { I18_NAMESPACES } from '@/common/constants/Locales';
import { useText, useToast } from '@/hooks';
import { AxiosError } from 'axios';
import { useQueryClient } from 'react-query';

export const useAddCheckout = () => {
  const queryClient = useQueryClient();
  const mutate = useOrderCheckoutAddMutation(queryClient);
  const { errorToast, successToast } = useToast();
  const t = useText(I18_NAMESPACES.COMMON);
  const addItem = async (items: number[]) =>
    mutate.mutate(
      { items },
      {
        // @ts-ignore
        onError: (error: AxiosError<Record<string, string[]>>) => {
          const data = error.response?.data ?? {};

          if (data.detail) {
            errorToast(t('shoppingCard.message.error', { isCommon: true }));
          } else {
            Object.entries(data ?? {}).forEach(([key, value]) => {
              value.forEach(message => errorToast(message));
            });
          }
        },
        onSuccess: () => {
          successToast(t('shoppingCard.message.success', { isCommon: true }));
        },
      },
    );

  return {
    ...mutate,
    addItem,
  };
};
