import { queryCreator } from '@/utils/api';
import { BlogServiceFetcher } from './_restApi';

export const useBlogCategoriesQuery = queryCreator(
  BlogServiceFetcher.getBlogCategoriesApi,
  BlogServiceFetcher.getBlogCategoriesApi.endpoint,
);

export const useBlogCategoryQuery = queryCreator(
  BlogServiceFetcher.getBlogCategoryAPI,
  BlogServiceFetcher.getBlogCategoryAPI.endpoint,
);

export const usePostsQuery = queryCreator(
  BlogServiceFetcher.getPostsAPI,
  BlogServiceFetcher.getPostsAPI.endpoint,
);

export const usePostQuery = queryCreator(
  BlogServiceFetcher.getPostAPI,
  BlogServiceFetcher.getPostAPI.endpoint,
);

export const useCommentsQuery = queryCreator(
  BlogServiceFetcher.getCommentsAPI,
  BlogServiceFetcher.getCommentsAPI.endpoint,
);
