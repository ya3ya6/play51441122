import { CountryAppType } from '@/common/constants/Country';

export interface PostLoginAPIResponseType {
  access_token: string;
  refresh_token: string;
  user: {
    id: number;
    first_name: string;
    last_name: string;
    email: string;
    is_phone_number_verified: boolean;
    phone_number: string;
    country: CountryAppType;
  };
}

export interface PostLoginAPIArgsType {
  email: string;
  password: string;
}
