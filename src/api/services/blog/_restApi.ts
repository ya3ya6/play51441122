import { axiosAgent } from '@/config/axiosConfig';
import { axiosCreator } from '@/utils/api/axios';
import {
  GetBlogCategoriesArgsType,
  GetBlogCategoriesAxiosResponseType,
  GetBlogCategoryArgsType,
  GetBlogCategoryAxiosResponseType,
} from './types/category';
import {
  GetCommentAPIAxiosResponseType,
  GetCommentsAPIArgsType,
  PostCommentAPIArgsType,
} from './types/comments';
import {
  GetPostAPIResponseType,
  GetPostArgsType,
  GetPostsAPIResponseType,
  GetPostsArgsType,
} from './types/posts';
import { BlogServiceEP } from './_endpoints';

const getBlogCategoriesApi = axiosCreator<
  GetBlogCategoriesArgsType,
  GetBlogCategoriesAxiosResponseType
>({
  axiosInstance: axiosAgent,
  endPoint: BlogServiceEP.GET_BLOG_CATEGORIES,
  method: 'get',
});

const getBlogCategoryAPI = axiosCreator<GetBlogCategoryArgsType, GetBlogCategoryAxiosResponseType>({
  axiosInstance: axiosAgent,
  endPoint: BlogServiceEP.GET_BLOG_CATEGORY,
  method: 'get',
});

const getPostsAPI = axiosCreator<GetPostsArgsType, GetPostsAPIResponseType>({
  axiosInstance: axiosAgent,
  endPoint: BlogServiceEP.GET_POSTS,
  method: 'get',
});

const getPostAPI = axiosCreator<GetPostArgsType, GetPostAPIResponseType>({
  axiosInstance: axiosAgent,
  endPoint: BlogServiceEP.GET_POST,
  method: 'get',
});

const getCommentsAPI = axiosCreator<GetCommentsAPIArgsType, GetCommentAPIAxiosResponseType>({
  axiosInstance: axiosAgent,
  endPoint: BlogServiceEP.GET_POST_COMMENTS,
  method: 'get',
});

const postCommentAPI = axiosCreator<PostCommentAPIArgsType, null>({
  axiosInstance: axiosAgent,
  endPoint: BlogServiceEP.POST_POST_COMMENTS,
  method: 'post',
});

export const BlogServiceFetcher = {
  getBlogCategoriesApi,
  getBlogCategoryAPI,
  getPostsAPI,
  getPostAPI,
  getCommentsAPI,
  postCommentAPI,
};
