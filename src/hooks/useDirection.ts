import { useRouter } from 'next/router';
import { useMemo } from 'react';

export const useDirection = (): {
  direction: 'ltr' | 'rtl';
  isRtl: boolean;
} => {
  const { locale } = useRouter();

  return useMemo(
    () =>
      locale === 'fa' || locale === 'ar'
        ? { direction: 'rtl', isRtl: true }
        : { direction: 'ltr', isRtl: false },
    [],
  );
};
