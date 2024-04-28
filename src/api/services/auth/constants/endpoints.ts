const AUTH_SERVICE_BASE_URL = 'auth';

export const AuthServiceEP = {
  REGISTER_USER: `${AUTH_SERVICE_BASE_URL}/registration/`,
  REGISTER_RESEND_EMAIL: `${AUTH_SERVICE_BASE_URL}/registration/resend-email/`,
  REGISTER_VERIFY_EMAIL: `${AUTH_SERVICE_BASE_URL}/registration/verify-email/`,
  LOGOUT_USER: `${AUTH_SERVICE_BASE_URL}/logout/`,
  LOGIN_USER: `${AUTH_SERVICE_BASE_URL}/login/`,
  PASSWORD_CHANGE: `${AUTH_SERVICE_BASE_URL}/password/change/`,
  PASSWORD_RESET: `${AUTH_SERVICE_BASE_URL}/password/reset/`,
  PASSWORD_RESET_CONFERM: `${AUTH_SERVICE_BASE_URL}/password/reset/confirm/`,
  TOKEN_VERIFY: `core/verify-cookie/`,
  DETIALS_USER: `${AUTH_SERVICE_BASE_URL}/user/`,
  UPDATE_USER: `${AUTH_SERVICE_BASE_URL}/user/`,
  PARTIAL_UPDATE_USER: `${AUTH_SERVICE_BASE_URL}/user/`,

  POST_REQUEST_OTP: `${AUTH_SERVICE_BASE_URL}/otp/request/`,
  POST_VERIFY_OTP: `${AUTH_SERVICE_BASE_URL}/otp/verify/`,
};
