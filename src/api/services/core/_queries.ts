import Utils from '@/utils';
import { CoreServiceFetcher } from './_restApi';

export const useLanguageQuery = Utils.ApiUtils.queryCreator(
  CoreServiceFetcher.getLanguageAPI,
  CoreServiceFetcher.getLanguageAPI.endpoint,
);

export const useMenuQuery = Utils.ApiUtils.queryCreator(
  CoreServiceFetcher.getMenuAPI,
  CoreServiceFetcher.getMenuAPI.endpoint,
);

export const useNotificationsQuery = Utils.ApiUtils.queryCreator(
  CoreServiceFetcher.getNotificationsAPI,
  CoreServiceFetcher.getNotificationsAPI.endpoint,
);
