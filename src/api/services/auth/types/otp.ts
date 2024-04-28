export interface PostRequestOTPAPIArgsType {
  phone_number: string;
}

export interface PostVerifyOTPAPIArgsType {
  phone_number: string;
  otp: string;
}
