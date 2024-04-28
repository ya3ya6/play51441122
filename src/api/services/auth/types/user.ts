import { CountryAppType } from '@/common/constants/Country';

// =============================================================
export type GetUserAPIAxiosResponseType = {
  id: number;
  first_name: string;
  last_name: string;
  email: string;
  is_phone_number_verified: true;
  gender: 'male' | 'female';
  code_meli: string;
  company_name: string;
  address: string;
  telephone: string;
  phone_number: string;
  country: CountryAppType;
  full_name: string;
};

export type PatchUserAPIArgsType = {
  first_name?: string;
  last_name?: string;
  gender?: 'male' | 'female';
  code_meli?: string;
  company_name?: string;
  address?: string;
  telephone?: string;
  phone_number?: string;
  country?: CountryAppType;
  email?: string;
};
