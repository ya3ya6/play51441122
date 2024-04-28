import { useVerifyUserTokenQuery } from '@/api/services/auth';
import {
  initializeTranslations,
  InitializeTranslationsArgs,
} from '@/libs/Translation/ServerTranslation';
import { TPrefetch } from '@/utils/api';
import {
  GetServerSideProps,
  GetServerSidePropsContext,
  GetServerSidePropsResult,
  GetStaticPaths,
  GetStaticProps,
  PreviewData,
} from 'next';
import { dehydrate, QueryClient } from 'react-query';
import { AxiosInstance } from 'axios';
import { ParsedUrlQuery } from 'querystring';
import { merge } from 'lodash';
import { OverviewServiceFetcher } from '@/api/services/overview/_restApi';
import { setCookies } from 'cookies-next';
import { createServerSideAxios } from './axiosConfig';

type Context = GetServerSidePropsContext<ParsedUrlQuery, PreviewData>;

export type Initializer = (arg: {
  axios: AxiosInstance;
  queryClient: QueryClient;
  context: Context;
}) => Promise<
  | GetServerSidePropsResult<any>
  | ((arg: GetServerSidePropsResult<any>) => GetServerSidePropsResult<any>)
>;

type InitializePagePropsArgs = Pick<InitializeTranslationsArgs, 'namespaces' | 'loadCommons'>;

export const languageInitializer =
  (langSetting: InitializePagePropsArgs): Initializer =>
  async ({ context }) => {
    const { locale, req, resolvedUrl } = context;

    const defaultLocal = req.cookies.language;

    const url = req.headers.host?.split('.');

    const subdomain = url?.length === 3 ? url[0] : '';

    if ((subdomain === '' || subdomain === 'www') && defaultLocal !== locale) {
      setCookies('language', locale, { req: context.req, res: context.res });

      let destination = '/';

      if (locale !== 'fa') {
        destination += locale;
      }

      if (resolvedUrl) {
        destination += resolvedUrl;
      }

      return () => ({
        redirect: {
          destination,
          permanent: false,
        },
      });
    }

    const language = await initializeTranslations({
      locale,
      ...langSetting,
    });

    return {
      props: {
        ...language,
      },
    };
  };

const authenticationInitializer =
  (isPrivate: boolean): Initializer =>
  async ({ axios, queryClient }) => {
    let verfied = false;
    try {
      await useVerifyUserTokenQuery.prefetch({ axios, queryClient }, null);
      verfied = true;
    } catch {}

    if (isPrivate && !verfied) {
      return () => ({
        redirect: {
          destination: `/?login=true`,
          permanent: false,
        },
      });
    }

    return {
      props: {
        verifyUserToken: verfied,
      },
    };
  };

export const ssrPrefetchInitializer =
  <T extends TPrefetch<any> = any>(
    prefetcher: T,
    {
      raiseOn404,
      mapper,
    }: {
      mapper?: { ({ context }: { context: Context }): Parameters<T>[1] };
      raiseOn404?: boolean;
    } = {},
  ): Initializer =>
  async ({ context, axios, queryClient }) => {
    try {
      await prefetcher({ axios, queryClient }, mapper?.({ context }));
      return {
        props: {},
      };
    } catch {
      if (raiseOn404) {
        return () => ({
          notFound: true,
        });
      }

      return {
        props: {},
      };
    }
  };

const seoPrefetchInitializer: Initializer = async ({ axios, context }) => {
  const seoTags = await OverviewServiceFetcher.postSEOTagAPI(
    {
      url:
        context.locale !== 'fa' ? `/${context.locale}${context.resolvedUrl}` : context.resolvedUrl,
    },
    { axios },
  );

  return {
    props: {
      seoTags: seoTags.map(seoTag => seoTag.htmlCode),
    },
  };
};

export const getStaticPaths: GetStaticPaths = async () => {
  return {
    paths: [],
    fallback: 'blocking',
  };
};

type InitializerArgs = {
  initializers: Initializer[];
  isPrivate?: boolean;
};

export const ssrInitializer = ({
  initializers,
  isPrivate = false,
}: InitializerArgs): GetServerSideProps => {
  return async context => {
    const queryClient = new QueryClient();
    const serverSideAxios = createServerSideAxios(context);

    const promises = await Promise.allSettled(
      [authenticationInitializer(isPrivate), ...initializers, seoPrefetchInitializer].map(
        initializer => initializer({ queryClient, axios: serverSideAxios, context }),
      ),
    );

    return promises
      .map(promise => (promise.status === 'fulfilled' ? promise.value : undefined))
      .filter(Boolean)
      .reduce(
        (acc, value) => {
          if ('redirect' in (value ?? {})) return value;

          if (typeof value === 'function') {
            return value(acc as any);
          }

          return merge(acc, value);
        },
        {
          props: {
            dehydratedState: dehydrate(queryClient),
          },
        },
      ) as any;
  };
};

type InitializePagePropsArgs2 = Pick<InitializeTranslationsArgs, 'namespaces' | 'loadCommons'>;

export const initializePageProps2 = (args: InitializePagePropsArgs2 = {}): GetStaticProps => {
  return async ({ locale }) => {
    return {
      props: {
        ...(await initializeTranslations({ locale, ...args })),
      },
    };
  };
};
