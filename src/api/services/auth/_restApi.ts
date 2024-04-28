// {method}{Functionality}API
import { axiosAgent } from '@/config/axiosConfig';
import { axiosCreator } from '@/utils/api/axios';
import { AuthServiceEP } from './constants';
import {
  GetUserAPIAxiosResponseType,
  PatchUserAPIArgsType,
  PostRegisterCreateAPIBodyType,
  PostRegisterCreateAPIType,
  PostRegisterVerifyAPIArgsType,
} from './types';
import { PostLoginAPIArgsType } from './types/login';
import { PostRequestOTPAPIArgsType, PostVerifyOTPAPIArgsType } from './types/otp';
import {
  PostPasswordChangeAPIArgsType,
  PostPasswordResetAPIBodyType,
  PostPasswordResetConfirmAPIArgsType,
} from './types/password';

const postLoginAPI = axiosCreator<PostLoginAPIArgsType, null>({
  axiosInstance: axiosAgent,
  endPoint: AuthServiceEP.LOGIN_USER,
  method: 'post',
});

const postLogoutAPI = axiosCreator({
  axiosInstance: axiosAgent,
  endPoint: AuthServiceEP.LOGOUT_USER,
  method: 'post',
});

const getUserAPI = axiosCreator<null, GetUserAPIAxiosResponseType>({
  axiosInstance: axiosAgent,
  endPoint: AuthServiceEP.DETIALS_USER,
  method: 'get',
});

const patchUserAPI = axiosCreator<PatchUserAPIArgsType, null>({
  axiosInstance: axiosAgent,
  endPoint: AuthServiceEP.UPDATE_USER,
  method: 'patch',
});

const postRequestOTPAPI = axiosCreator<PostRequestOTPAPIArgsType, null>({
  axiosInstance: axiosAgent,
  endPoint: AuthServiceEP.POST_REQUEST_OTP,
  method: 'post',
});

const postVerifyOTPAPI = axiosCreator<PostVerifyOTPAPIArgsType, null>({
  axiosInstance: axiosAgent,
  endPoint: AuthServiceEP.POST_VERIFY_OTP,
  method: 'post',
});

const postPasswordChangeAPI = axiosCreator<PostPasswordChangeAPIArgsType, null>({
  axiosInstance: axiosAgent,
  endPoint: AuthServiceEP.PASSWORD_CHANGE,
  method: 'post',
});

const postPasswordResetAPI = axiosCreator<PostPasswordResetAPIBodyType, null>({
  axiosInstance: axiosAgent,
  endPoint: AuthServiceEP.PASSWORD_RESET,
  method: 'post',
});

const postPasswordResetConfirmAPI = axiosCreator<PostPasswordResetConfirmAPIArgsType, null>({
  axiosInstance: axiosAgent,
  endPoint: AuthServiceEP.PASSWORD_RESET_CONFERM,
  method: 'post',
});

const postRegisterConfirmEmailAPI = axiosCreator<PostRegisterVerifyAPIArgsType, null>({
  axiosInstance: axiosAgent,
  endPoint: AuthServiceEP.REGISTER_VERIFY_EMAIL,
  method: 'post',
});

// ====================== REGISTER ======================

const postRegisterAPI = (args: PostRegisterCreateAPIBodyType) =>
  axiosAgent
    .post<Awaited<ReturnType<PostRegisterCreateAPIType>>>(AuthServiceEP.REGISTER_USER, args)
    .then(res => res.data);

// ====================== REGISTER_RESEND ======================

// const postRegisterResendAPI: PostRegisterUserAPIType = args =>
//   axiosAgent
//     .post<Awaited<ReturnType<PostRegisterUserAPIType>>>(AuthServiceEP.REGISTER_RESEND_EMAIL, args)
//     .then(res => res.data);

// // ====================== REGISTRATION_VERIFY_EMAIL ======================

// const postRegisterVerifyEmailAPI: PostRegisterUserAPIType = args =>
//   axiosAgent
//     .post<Awaited<ReturnType<PostRegisterUserAPIType>>>(AuthServiceEP.REGISTER_VERIFY_EMAIL, args)
//     .then(res => res.data);

// // ====================== TOKEN_REFRESH ======================

// const postTokenRefreshAPI: PostRegisterUserAPIType = args =>
//   axiosAgent
//     .post<Awaited<ReturnType<PostRegisterUserAPIType>>>(AuthServiceEP.TOKEN_REFRESH, args)
//     .then(res => res.data);

// // ====================== TOKEN_VERIFY ======================

const getVerifyCookieAPI = axiosCreator({
  axiosInstance: axiosAgent,
  endPoint: AuthServiceEP.TOKEN_VERIFY,
  method: 'get',
});

// // ====================== USER_UPDATE ======================

// const putUserUpdateAPI: PostRegisterUserAPIType = args =>
//   axiosAgent
//     .put<Awaited<ReturnType<PostRegisterUserAPIType>>>(AuthServiceEP.UPDATE_USER, args)
//     .then(res => res.data);

// // ====================== USER_PARTIAL_UPDATE ======================

// const patchUserPartialUpdateAPI: PostRegisterUserAPIType = args =>
//   axiosAgent
//     .patch<Awaited<ReturnType<PostRegisterUserAPIType>>>(AuthServiceEP.PARTIAL_UPDATE_USER, args)
//     .then(res => res.data);

// // ====================== USER DETAILS ======================

// const getUserDetailAPI: GetUserDetailAPIType = () =>
//   axiosAgent
//     .get<Awaited<ReturnType<GetUserDetailAPIType>>>(AuthServiceEP.DETIALS_USER)
//     .then(res => res.data);

// ====================== EXPORTS ======================

export const AuthServiceFetcher = {
  // getUserDetailAPI,
  postRegisterAPI,
  postLoginAPI,
  postLogoutAPI,
  postPasswordChangeAPI,
  postPasswordResetAPI,
  postPasswordResetConfirmAPI,
  postRegisterConfirmEmailAPI,
  // postRegisterVerifyEmailAPI,
  // postTokenRefreshAPI,
  getVerifyCookieAPI,
  getUserAPI,
  patchUserAPI,
  postRequestOTPAPI,
  postVerifyOTPAPI,
  // postRegisterResendAPI,
  // patchUserPartialUpdateAPI,
  // putUserUpdateAPI,
};
