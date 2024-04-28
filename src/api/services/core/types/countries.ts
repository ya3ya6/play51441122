import { CountryAppType } from '@/common/constants/Country';

// PUT  =================
export interface PutCountriesAPIResponseType {
  country: CountryAppType;
}

export interface PutCountriesAPIArgsType {
  country: CountryAppType;
}

export type PutCountriesAPIType = (
  args: PutCountriesAPIArgsType,
) => Promise<PutCountriesAPIResponseType>;

// GET  =================

export type GetCountriesAPIResponseType = {
  name: string;
  code: string;
}[];

export type GetCountriesAPIType = () => Promise<GetCountriesAPIResponseType>;
