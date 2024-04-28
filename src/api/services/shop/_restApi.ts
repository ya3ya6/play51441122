import { axiosAgent } from '@/config/axiosConfig';
import { axiosCreator } from '@/utils/api/axios';
import { ShopServiceEP } from './constants';
import {
  GetOrdersAPIArgsType,
  GetOrdersAPIAxiosResponseType,
  PostOrderAPIArgsType,
} from './types/order';
import {
  GetShopCategoriesAxiosResponseType,
  GetShopCategoryAxiosResponseType,
  GetShopCategoriesArgsType,
  GetProductsArgsType,
  GetProductsAPIResponseType,
  GetProductArgsType,
  GetProductAPIResponseType,
  GetBannersAPIAxiosResponseType,
  GetOrderCheckoutAPIAxiosResponseType,
  PostOrderCheckoutAPIArgsType,
} from './types';

const getShopCategoriesApi = axiosCreator<null, GetShopCategoriesAxiosResponseType>({
  axiosInstance: axiosAgent,
  endPoint: ShopServiceEP.GET_SHOP_CATEGORIES,
  method: 'get',
});

const getShopCategoryAPI = axiosCreator<
  GetShopCategoriesArgsType,
  GetShopCategoryAxiosResponseType
>({
  axiosInstance: axiosAgent,
  endPoint: ShopServiceEP.GET_SHOP_CATEGORY,
  method: 'get',
});

const getProductsAPI = axiosCreator<GetProductsArgsType, GetProductsAPIResponseType>({
  axiosInstance: axiosAgent,
  endPoint: ShopServiceEP.GET_PRODUCTS,
  method: 'get',
});

const getProductAPI = axiosCreator<GetProductArgsType, GetProductAPIResponseType>({
  axiosInstance: axiosAgent,
  endPoint: ShopServiceEP.GET_PRODUCT,
  method: 'get',
});

const getBannersAPI = axiosCreator<null, GetBannersAPIAxiosResponseType>({
  axiosInstance: axiosAgent,
  endPoint: ShopServiceEP.GET_BANNERS,
  method: 'get',
});

const getOrderCheckoutAPI = axiosCreator<null, GetOrderCheckoutAPIAxiosResponseType>({
  axiosInstance: axiosAgent,
  endPoint: ShopServiceEP.GET_ORDER_CHECKOUT,
  method: 'get',
});

const postOrderCheckoutAPI = axiosCreator<PostOrderCheckoutAPIArgsType, null>({
  axiosInstance: axiosAgent,
  endPoint: ShopServiceEP.POST_ORDER_CHECKOUT,
  method: 'post',
});

const putOrderCheckoutAPI = axiosCreator<PostOrderCheckoutAPIArgsType, null>({
  axiosInstance: axiosAgent,
  endPoint: ShopServiceEP.UPDATE_ORDER_CHECKOUT,
  method: 'put',
});

const postOrderAPI = axiosCreator<PostOrderAPIArgsType, null>({
  axiosInstance: axiosAgent,
  endPoint: ShopServiceEP.POST_ORDER,
  method: 'post',
});

const getOrdersAPI = axiosCreator<GetOrdersAPIArgsType, GetOrdersAPIAxiosResponseType>({
  axiosInstance: axiosAgent,
  endPoint: ShopServiceEP.GET_ORDERS,
  method: 'get',
});

export const ShopServiceFetcher = {
  getShopCategoriesApi,
  getShopCategoryAPI,
  getProductAPI,
  getProductsAPI,
  getBannersAPI,
  getOrderCheckoutAPI,
  postOrderCheckoutAPI,
  putOrderCheckoutAPI,
  postOrderAPI,
  getOrdersAPI,
};
