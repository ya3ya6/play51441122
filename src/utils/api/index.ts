import { isFunction } from 'lodash';
import { QueryKey, useQuery, UseQueryOptions, QueryClient } from 'react-query';
import { AxiosInstance } from 'axios';
import { axiosAgent } from '@/config/axiosConfig';

// TODO:: Return invalidator
// TODO:: SetQuery Data

type TPrefetch<T> = (
  { queryClient, axios }: { queryClient: QueryClient; axios?: AxiosInstance },
  args: T,
) => Promise<any>;

const queryCreator = <APICall extends (...args: any) => any>(
  apiCall: APICall,
  queryKey: ((args: Parameters<APICall>[0]) => QueryKey) | QueryKey,
) => {
  const useCustomQuery = (
    args: Parameters<APICall>[0],
    options: UseQueryOptions<Awaited<ReturnType<APICall>>> = {},
  ) =>
    useQuery(isFunction(queryKey) ? queryKey(args) : queryKey, () => apiCall(args), {
      ...options,
    });

  useCustomQuery.prefetch = ((
    {
      queryClient,
      axios = axiosAgent,
    }: {
      queryClient: QueryClient;
      axios?: AxiosInstance;
    },
    args: Parameters<APICall>[0],
  ) =>
    queryClient.fetchQuery(isFunction(queryKey) ? queryKey(args) : queryKey, () =>
      apiCall(args, { axios }),
    )) as TPrefetch<Parameters<APICall>[0]>;

  useCustomQuery.invalidate = (
    { queryClient }: { queryClient: QueryClient },
    args: Parameters<APICall>[0],
  ) => {
    queryClient.invalidateQueries(isFunction(queryKey) ? queryKey(args) : queryKey);
  };

  return useCustomQuery;
};

export type { TPrefetch };
export { queryCreator };
export { dto } from './dto';
