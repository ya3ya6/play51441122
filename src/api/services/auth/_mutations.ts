import { useMutation, QueryClient } from 'react-query';
import { useUserQuery } from './_queries';
import { AuthServiceFetcher } from './_restApi';

export const useRegisterUserMutation = () => useMutation(AuthServiceFetcher.postRegisterAPI);

export const useLoginMutation = () => useMutation(AuthServiceFetcher.postLoginAPI);

export const useLogOutMutation = () => useMutation(AuthServiceFetcher.postLogoutAPI);

export const usePasswordForget = () => useMutation(AuthServiceFetcher.postPasswordResetAPI);

export const useUserMutation = (queryClient: QueryClient) =>
  useMutation(AuthServiceFetcher.patchUserAPI, {
    onSuccess: () => {
      useUserQuery.invalidate({ queryClient }, null);
    },
  });

export const useRequestOTPMutation = () => useMutation(AuthServiceFetcher.postRequestOTPAPI);

export const useVerifyOTPMutation = (queryClient: QueryClient) =>
  useMutation(AuthServiceFetcher.postVerifyOTPAPI, {
    onSuccess: () => {
      useUserQuery.invalidate({ queryClient }, null);
    },
  });

export const usePasswordChangeMutation = () =>
  useMutation(AuthServiceFetcher.postPasswordChangeAPI);

export const usePasswordResetConfirmMutation = () =>
  useMutation(AuthServiceFetcher.postPasswordResetConfirmAPI);
