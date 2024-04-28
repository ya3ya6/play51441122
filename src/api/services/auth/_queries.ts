import Utils from '@/utils';
import { AuthServiceFetcher } from './_restApi';

export const useUserQuery = Utils.ApiUtils.queryCreator(
  AuthServiceFetcher.getUserAPI,
  AuthServiceFetcher.getUserAPI.endpoint,
);

export const useVerifyUserTokenQuery = Utils.ApiUtils.queryCreator(
  AuthServiceFetcher.getVerifyCookieAPI,
  AuthServiceFetcher.getVerifyCookieAPI.endpoint,
);
