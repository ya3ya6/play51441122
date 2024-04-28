import { queryCreator } from '@/utils/api';
import { OverviewServiceFetcher } from './_restApi';

export const useOverviewQuery = queryCreator(
  OverviewServiceFetcher.getOverviewAPI,
  OverviewServiceFetcher.getOverviewAPI.endpoint,
);

export const useAboutusQuery = queryCreator(
  OverviewServiceFetcher.getAboutUsAPI,
  OverviewServiceFetcher.getAboutUsAPI.endpoint,
);

export const useCustomerOpinionsQuery = queryCreator(
  OverviewServiceFetcher.getCustomerOpinionsAPI,
  OverviewServiceFetcher.getCustomerOpinionsAPI.endpoint,
);

export const useTeamQuery = queryCreator(
  OverviewServiceFetcher.getTeamAPI,
  OverviewServiceFetcher.getTeamAPI.endpoint,
);

export const useCareersQuery = queryCreator(
  OverviewServiceFetcher.getCareersAPI,
  OverviewServiceFetcher.getCareersAPI.endpoint,
);

export const useTicketsQuery = queryCreator(
  OverviewServiceFetcher.getTicketsAPI,
  OverviewServiceFetcher.getTicketsAPI.endpoint,
);

export const useMagHeaderPostsQuery = queryCreator(
  OverviewServiceFetcher.getMagHeaderPostsAPI,
  OverviewServiceFetcher.getMagHeaderPostsAPI.endpoint,
);
