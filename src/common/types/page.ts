import { NextPage } from 'next';
import { AppProps as NextAppProps } from 'next/app';

export type AppNextPage<Props = Record<string, unknown>> = NextPage<Props> & {
  pageLayoutProps?: {
    hasTopNav?: boolean;
    hasDesktopMenu?: boolean;
    hasScrollToTop?: boolean;
    hasFixPhone?: {
      exist: boolean;
      color: 'brand' | string;
    };
    hasFooter?: boolean;
    hasBottomNavigation?: boolean;
  };
  isPrivate?: boolean;
};

export type AppProps = NextAppProps & {
  Component: AppNextPage;
};
