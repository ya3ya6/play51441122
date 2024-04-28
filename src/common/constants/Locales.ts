export type AppLangType = 'en' | 'fa' | 'zh' | 'ar' | 'tr';

interface SupportedLanguage {
  type: AppLangType;
}

export type Direction = 'ltr' | 'rtl';

export const SUPPORTED_LANGUAGE: SupportedLanguage[] = [
  {
    type: 'en',
  },
  {
    type: 'fa',
  },
  {
    type: 'zh',
  },
  {
    type: 'ar',
  },
  {
    type: 'tr',
  },
];

export const I18_NAMESPACES = {
  HOME: 'home',
  COMMON: 'common',
  MAG: 'mag',
  ABOUT: 'about',
  CONTACT: 'contact',
  ORDER: 'order',
  SHOP: 'shop',
  TEAM: 'team',
  NEWS: 'news',
  CAREERS: 'careers',
  CATEGORY: 'category',
  SINGLE: 'single',
  PROFILE: 'profile',
  SUPPORTY_SYSTEM: 'supportSystem',
};

export const RTL_LOCALES: AppLangType[] = ['ar', 'fa'];
