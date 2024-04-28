import '@/styles/globals.css';
import { ChakraProvider, CSSReset, Flex } from '@chakra-ui/react';
import { appWithTranslation } from 'next-i18next';
import { useRouter } from 'next/router';
import { useEffect, useMemo } from 'react';
import { AppLangType, RTL_LOCALES } from '@/common/constants/Locales';
import { RtlProvider } from '@/providers/RtlProvider';
import { initializeTheme } from '@/theme';
import { AppProps } from '@/common/types';
import PageLayout from '@/common/components/Layout/PageLayout';
import { Hydrate, QueryClient, QueryClientProvider } from 'react-query';
import AuthProvider from '@/providers/AuthProvider';
import Fonts from '@/theme/fonts';
import Head from 'next/head';
import parse from 'html-react-parser';
import { initTagManager } from '@/libs/tagManager';

function MyApp({ Component, pageProps }: AppProps) {
  const { locale } = useRouter();

  const theme = useMemo(() => initializeTheme(locale === 'fa' || locale === 'ar'), []);

  const queryClient = useMemo(
    () =>
      new QueryClient({
        defaultOptions: {
          queries: {
            staleTime: Number.POSITIVE_INFINITY,
            refetchOnWindowFocus: false,
            refetchOnMount: false,
            retry: false,
          },
        },
      }),
    [],
  );

  useEffect(() => {
    if (process.env.NODE_ENV === 'production') {
      initTagManager();
    }
  }, []);

  return (
    <Flex
      dir={RTL_LOCALES.includes(locale as AppLangType) ? 'rtl' : 'ltr'}
      minH="100vh"
      bgColor="#f7f7f7"
      direction="column"
    >
      <div>hey</div>
    </Flex>
  );
}

export default appWithTranslation(MyApp);
