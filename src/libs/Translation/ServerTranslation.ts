import { serverSideTranslations } from 'next-i18next/serverSideTranslations';
import { I18_NAMESPACES } from '@/common/constants/Locales';

export interface InitializeTranslationsArgs {
  locale?: string;
  loadCommons?: boolean;
  namespaces?: string[];
}

export const initializeTranslations = ({
  locale = 'fa',
  loadCommons = true,
  namespaces = [],
}: InitializeTranslationsArgs) => {
  const tempNamespaces = [...namespaces];
  if (loadCommons) {
    tempNamespaces.push(I18_NAMESPACES.COMMON);
  }
  return serverSideTranslations(locale, tempNamespaces);
};
