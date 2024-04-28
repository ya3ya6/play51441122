import { AppLangType } from '@/common/constants/Locales';

// PUT  =================
export interface PutLanguageAPIResponseType {
  language: AppLangType;
}

export interface PutLanguageAPIArgsType {
  language: AppLangType;
}

export type PutLanguageAPIType = (
  args: PutLanguageAPIArgsType,
) => Promise<PutLanguageAPIResponseType>;

// GET  ================

export type GetLanguageAPIResponseType = {
  name: string;
  short_name: AppLangType;
}[];

export type GetLanguageAPIType = () => Promise<GetLanguageAPIResponseType>;
