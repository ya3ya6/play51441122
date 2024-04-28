import { BaseResponseType } from '@/api/common/types/baseResponseType';

export type PostTokenRefreshAPIResponseType = BaseResponseType;

export interface PostTokenRefreshAPIBodyType {
  refresh: string;
}

export type PostTokenRefreshAPIType = (
  args: PostTokenRefreshAPIBodyType,
) => Promise<PostTokenRefreshAPIResponseType>;

// ==================================================================

export type PostTokenVerifyAPIResponseType = BaseResponseType;

export interface PostTokenVerifyAPIBodyType {
  token: string;
}

export type PostTokenVerifyAPIType = (
  args: PostTokenVerifyAPIBodyType,
) => Promise<PostTokenVerifyAPIResponseType>;
