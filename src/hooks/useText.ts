import { useTranslation } from 'next-i18next';
import { I18_NAMESPACES } from '@/common/constants/Locales';

// TODO This should be fixed
interface TArgs extends Record<string, boolean | string | undefined> {
  isCommon?: boolean;
}

export const useText = (namespace?: string) => {
  const { t: tFunction } = useTranslation(
    namespace ? [namespace, I18_NAMESPACES.COMMON] : [I18_NAMESPACES.COMMON],
  );

  const t = (key: string, options: TArgs = {}) => {
    return tFunction(key, { ns: options.isCommon ? I18_NAMESPACES.COMMON : undefined, ...options });
  };

  return t;
};
