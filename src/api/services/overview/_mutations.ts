import { useMutation, QueryClient } from 'react-query';
import { useTicketsQuery } from './_queries';
import { OverviewServiceFetcher } from './_restApi';

export const useContactUsMutation = () => useMutation(OverviewServiceFetcher.postContactUsAPI);

export const useJobRequestMutation = () => useMutation(OverviewServiceFetcher.postJobRequestAPI);

export const useNewTicketMutation = (queryClient: QueryClient) =>
  useMutation(OverviewServiceFetcher.postTicketAPI, {
    onSuccess: () => useTicketsQuery.invalidate({ queryClient }, null),
  });

export const useNewTicketMessageMutation = (queryClient: QueryClient) =>
  useMutation(OverviewServiceFetcher.postTicketMessageAPI, {
    onSuccess: () => useTicketsQuery.invalidate({ queryClient }, null),
  });

export const useCloseTicketMutation = (queryClient: QueryClient) =>
  useMutation(OverviewServiceFetcher.putTicketCloseAPI, {
    onSuccess: () => useTicketsQuery.invalidate({ queryClient }, null),
  });

export const useConsultationMutation = () =>
  useMutation(OverviewServiceFetcher.postConsultationAPI);
