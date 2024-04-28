import axios from 'axios';
import { GetServerSidePropsContext } from 'next';

export const getCookie = (cookie: string | undefined, name: string): string | undefined =>
  cookie
    ?.split(';')
    .find(row => row.trim().startsWith(name))
    ?.split('=')[1]
    .trim();

export const createServerSideAxios = (ctx: GetServerSidePropsContext) =>
  axios.create({
    baseURL: process.env.NEXT_PUBLIC_API_BASE_URL,
    headers: {
      cookie: ctx.req.headers.cookie ?? '',
      'x-csrftoken': getCookie(ctx.req.headers.cookie, 'csrf_token') ?? '',
      'user-agent': ctx.req.headers['user-agent'] ?? '',
      'x-real-ip': (ctx.req.headers['x-real-ip'] as string) ?? '',
    },
  });

export const axiosAgent = axios.create({
  baseURL: process.env.NEXT_PUBLIC_API_BASE_URL,
  timeout: 10000 * 50,
  withCredentials: true,
});

export const axiosAgentMultipart = axios.create({
  baseURL: process.env.NEXT_PUBLIC_API_BASE_URL,
  timeout: 10000 * 50,
  withCredentials: true,
  headers: {
    'Content-Type': 'multipart/form-data',
  },
});

interface ISetupInterceptorArgs {
  on401Callback?: () => void;
}

export const setupInterceptors = ({ on401Callback }: ISetupInterceptorArgs) => {
  axiosAgent.interceptors.response.use(
    response => {
      return response;
    },
    error => {
      if (error?.response?.status === 401) {
        on401Callback?.();
      }

      return Promise.reject(error);
    },
  );
};
