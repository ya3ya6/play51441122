import { BaseResponseType } from '@/api/common/types/baseResponseType';
import { UserModel } from '@/model/UserModel';

// ===============================================================================

export type PostRegisterResendAPIResponseType = BaseResponseType;

export interface PostRegisterResendAPIBodyType {
  email: string;
}

export type PostRegisterResendAPIType = (
  args: PostRegisterResendAPIBodyType,
) => Promise<PostRegisterResendAPIResponseType>;

// ================================================================================

export interface PostRegisterVerifyAPIArgsType {
  key: string;
}

// ================================================================================

export interface PostRegisterCreateAPIResponseType {
  access_token: string;
  refresh_token: string;
  user: {
    pk: number;
    first_name: string;
    last_name: string;
    email: string;
    country: string;
    is_phone_number_verified: boolean;
  };
}

export interface PostRegisterCreateAPIResultType {
  accessToken: string;
  refreshToken: string;
  user: UserModel;
}

export interface PostRegisterCreateAPIBodyType {
  email: string;
  password1: string;
  password2: string;
}

export type PostRegisterCreateAPIType = (
  args: PostRegisterCreateAPIBodyType,
) => Promise<PostRegisterCreateAPIResponseType>;
