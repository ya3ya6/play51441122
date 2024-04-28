import { queryCreator } from '@/utils/api';
import { ShopServiceFetcher } from './_restApi';

export const useShopCategoriesQuery = queryCreator(
  ShopServiceFetcher.getShopCategoriesApi,
  ShopServiceFetcher.getShopCategoriesApi.endpoint,
);

export const useShopCategoryQuery = queryCreator(
  ShopServiceFetcher.getShopCategoryAPI,
  ShopServiceFetcher.getShopCategoryAPI.endpoint,
);

export const useProductsQuery = queryCreator(
  ShopServiceFetcher.getProductsAPI,
  ShopServiceFetcher.getProductsAPI.endpoint,
);

export const useBannersQuery = queryCreator(
  ShopServiceFetcher.getBannersAPI,
  ShopServiceFetcher.getBannersAPI.endpoint,
);

export const useProductQuery = queryCreator(
  ShopServiceFetcher.getProductAPI,
  ShopServiceFetcher.getProductAPI.endpoint,
);

export const useOrderCheckoutQuery = queryCreator(
  ShopServiceFetcher.getOrderCheckoutAPI,
  ShopServiceFetcher.getOrderCheckoutAPI.endpoint,
);

export const useOrdersQuery = queryCreator(
  ShopServiceFetcher.getOrdersAPI,
  ShopServiceFetcher.getOrdersAPI.endpoint,
);
