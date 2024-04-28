import {
  useAboutusQuery,
  useOverviewQuery,
  useCustomerOpinionsQuery,
} from '@/api/services/overview/_queries';

export const MAIN_PAGE_CUSTOMER_OPINIONS_SLUG = 'main-page';

export const useOverview = () => {
  const { data: overview } = useOverviewQuery(null);
  const { data: aboutus } = useAboutusQuery(null);
  const { data: customerOpinions } = useCustomerOpinionsQuery({
    slug: MAIN_PAGE_CUSTOMER_OPINIONS_SLUG,
  });

  return { overview, aboutus, customerOpinions };
};
