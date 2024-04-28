import { queryParams } from '@/utils/api/axios';
import { GetBlogCategoriesArgsType, GetBlogCategoryArgsType } from './types/category';
import { GetPostArgsType, GetPostsArgsType } from './types/posts';
import { GetCommentsAPIArgsType, PostCommentAPIArgsType } from './types/comments';

const BLOG_SERVICE_BASE_URL = 'blog';

export const BlogServiceEP = {
  GET_BLOG_CATEGORIES: (params: GetBlogCategoriesArgsType) =>
    `${BLOG_SERVICE_BASE_URL}/category/?${queryParams(params)}`,
  GET_BLOG_CATEGORY: (slug: GetBlogCategoryArgsType) =>
    `${BLOG_SERVICE_BASE_URL}/category/${slug}/`,

  GET_POSTS: (params: GetPostsArgsType) => `${BLOG_SERVICE_BASE_URL}/posts/?${queryParams(params)}`,
  GET_POST: ({ slug, type }: GetPostArgsType) =>
    `${BLOG_SERVICE_BASE_URL}/posts/${slug}/?type=${type}`,

  GET_POST_COMMENTS: ({ slug }: GetCommentsAPIArgsType) =>
    `${BLOG_SERVICE_BASE_URL}/posts/${slug}/comments/`,
  POST_POST_COMMENTS: ({ postSlug }: PostCommentAPIArgsType) =>
    `${BLOG_SERVICE_BASE_URL}/posts/${postSlug}/comments/`,
};
