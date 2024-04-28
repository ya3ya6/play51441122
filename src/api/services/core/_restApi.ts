import { axiosAgent } from '@/config/axiosConfig';
import { axiosCreator } from '@/utils/api/axios';
import { CoreServiceEP } from './constants';

import { GetLanguageAPIResponseType, PutLanguageAPIArgsType } from './types';
import { GetMenuAPIArgsType, GetMenuAPIResponseType } from './types/menu';
import { PostNewsLetterAPIArgsType } from './types/news_letter';
import { GetNotificationResponse, PostReadNotificationsAPIArgsType } from './types/notification';

export const getLanguageAPI = axiosCreator<null, GetLanguageAPIResponseType>({
  axiosInstance: axiosAgent,
  endPoint: CoreServiceEP.GET_ALL_LANGUAGE,
  method: 'get',
});

export const putLanguageAPI = axiosCreator<PutLanguageAPIArgsType, null>({
  axiosInstance: axiosAgent,
  endPoint: CoreServiceEP.UPDATE_LANGUAGE,
  method: 'put',
});

const postNewsLetterAPI = axiosCreator<PostNewsLetterAPIArgsType, null>({
  axiosInstance: axiosAgent,
  endPoint: CoreServiceEP.POST_NEWS_LETTER,
  method: 'post',
});

const getMenuAPI = axiosCreator<GetMenuAPIArgsType, GetMenuAPIResponseType>({
  axiosInstance: axiosAgent,
  endPoint: CoreServiceEP.GET_MENU,
  method: 'get',
});

const getNotificationsAPI = axiosCreator<null, GetNotificationResponse>({
  axiosInstance: axiosAgent,
  endPoint: CoreServiceEP.GET_NOTIFICATIONS,
  method: 'get',
});

const postReadNotificationsAPI = axiosCreator<PostReadNotificationsAPIArgsType, null>({
  axiosInstance: axiosAgent,
  endPoint: CoreServiceEP.POST_READ,
  method: 'post',
});

export const CoreServiceFetcher = {
  getLanguageAPI,
  putLanguageAPI,
  postNewsLetterAPI,
  getMenuAPI,
  getNotificationsAPI,
  postReadNotificationsAPI,
};
