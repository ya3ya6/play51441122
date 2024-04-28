import { queryParams } from '@/utils/api/axios';
import {
  GetOrdersAPIArgsType,
  GetProductArgsType,
  GetProductsArgsType,
  GetShopCategoriesArgsType,
} from '../types';

const SHOP_SERVICE_BASE_URL = 'shop';

export const ShopServiceEP = {
  // categories
  GET_SHOP_CATEGORIES: `${SHOP_SERVICE_BASE_URL}/category/`,
  GET_SHOP_CATEGORY: (slug: GetShopCategoriesArgsType) =>
    `${SHOP_SERVICE_BASE_URL}/category/${slug}/`,

  // Product
  GET_PRODUCTS: (params: GetProductsArgsType) =>
    `${SHOP_SERVICE_BASE_URL}/product/?${queryParams(params)}`,
  GET_PRODUCT: (slug: GetProductArgsType) => `${SHOP_SERVICE_BASE_URL}/product/${slug}/`,

  // Banners:
  GET_BANNERS: `${SHOP_SERVICE_BASE_URL}/banner/`,

  // Checkout
  GET_ORDER_CHECKOUT: `${SHOP_SERVICE_BASE_URL}/order/checkout/`,
  POST_ORDER_CHECKOUT: `${SHOP_SERVICE_BASE_URL}/order/checkout/add/`,
  UPDATE_ORDER_CHECKOUT: `${SHOP_SERVICE_BASE_URL}/order/checkout/update/`,

  // Order
  GET_ORDERS: (params: GetOrdersAPIArgsType) =>
    `${SHOP_SERVICE_BASE_URL}/order/?${queryParams(params)}`,
  POST_ORDER: `${SHOP_SERVICE_BASE_URL}/order/create/`,
};
