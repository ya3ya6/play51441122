import { GetServerSidePropsContext } from 'next';
import { createServerSideAxios } from '@/config/axiosConfig';
import { AuthServiceFetcher } from '@/api/services/auth';

export const getServerSideProps = async (ctx: GetServerSidePropsContext) => {
  const { token } = ctx.query;
  const axios = createServerSideAxios(ctx);

  try {
    await AuthServiceFetcher.postRegisterConfirmEmailAPI({ key: token as string }, { axios });
  } catch {}

  return {
    redirect: {
      destination: '/?login',
      permanent: false,
    },
  };
};

const Component = () => {
  return null;
};

export default Component;
