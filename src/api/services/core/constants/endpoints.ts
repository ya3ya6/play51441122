import { GetMenuAPIArgsType } from '../types/menu';

const CORE_SERVICE_BASE_URL = 'core';

export const CoreServiceEP = {
  GET_ALL_LANGUAGE: `${CORE_SERVICE_BASE_URL}/languages/`,
  UPDATE_LANGUAGE: `${CORE_SERVICE_BASE_URL}/languages/`,

  POST_NEWS_LETTER: `${CORE_SERVICE_BASE_URL}/newsletter/`,

  GET_MENU: ({ slug }: GetMenuAPIArgsType) => `${CORE_SERVICE_BASE_URL}/menu/${slug}/`,

  GET_NOTIFICATIONS: `notifications/all_list/`,
  POST_READ: `notifications/read/`,
};
