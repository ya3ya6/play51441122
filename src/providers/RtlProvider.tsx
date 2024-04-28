import { CacheProvider } from '@emotion/react';
import createCache from '@emotion/cache';
import rtl from 'stylis-plugin-rtl';
import { useRouter } from 'next/router';
import { FC, ReactNode } from 'react';

const options = {
  rtl: { key: 'css-fa', stylisPlugins: [rtl] },
  ltr: { key: 'css-en' },
};

export const RtlProvider: FC<{ children: ReactNode }> = ({ children }) => {
  const { locale } = useRouter();
  const dir = locale === 'fa' || locale === 'ar' ? 'rtl' : 'ltr';
  const cache = createCache(options[dir]);
  return <CacheProvider value={cache}>{children}</CacheProvider>;
};
