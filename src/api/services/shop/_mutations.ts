import { useMutation, QueryClient } from 'react-query';
import { useOrderCheckoutQuery } from './_queries';
import { ShopServiceFetcher } from './_restApi';

export const useOrderCheckoutAddMutation = (queryClient: QueryClient) =>
  useMutation(ShopServiceFetcher.postOrderCheckoutAPI, {
    onSuccess: () => {
      useOrderCheckoutQuery.invalidate({ queryClient }, null);
    },
  });

export const useOrderCheckoutUpdateMutation = (queryClient: QueryClient) =>
  useMutation(ShopServiceFetcher.putOrderCheckoutAPI, {
    onSuccess: () => {
      useOrderCheckoutQuery.invalidate({ queryClient }, null);
    },
  });

export const useOrderCreateMutation = (queryClient: QueryClient) =>
  useMutation(ShopServiceFetcher.postOrderAPI, {
    onSuccess: () => {
      useOrderCheckoutQuery.invalidate({ queryClient }, null);
    },
  });
