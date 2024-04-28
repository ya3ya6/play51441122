import { BaseResponseType } from '@/api/common/types/baseResponseType';

export interface PostPasswordChangeAPIArgsType {
  new_password1: string;
  new_password2: string;
}

// ========================================================

export type PostPasswordResetAPIResponseType = BaseResponseType;

export interface PostPasswordResetAPIBodyType {
  email: string;
}

export interface PostPasswordResetApiDtoType {}

export type PostPasswordResetAPIType = (
  args: PostPasswordResetAPIBodyType,
) => Promise<PostPasswordResetAPIResponseType>;

// ========================================================
export interface PostPasswordResetConfirmAPIArgsType {
  new_password1: string;
  new_password2: string;
  uid: string;
  token: string;
}
