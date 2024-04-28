import { GetCustomerOpinionsAPIArgs } from '../types/customer_opinions';

const OVERVIEW_SERVICE_BASE_URL = 'overview/';

export const OverviewServiceEP = {
  GET_OVERVIEW: OVERVIEW_SERVICE_BASE_URL,
  GET_ABOUT_US: `${OVERVIEW_SERVICE_BASE_URL}aboutus/`,
  GET_CUSTOMER_OPINIONS: ({ slug }: GetCustomerOpinionsAPIArgs) =>
    `${OVERVIEW_SERVICE_BASE_URL}customer_opinion/${slug}/`,

  POST_CONTACT_US: `${OVERVIEW_SERVICE_BASE_URL}contact-us/`,
  POST_CONSULTATION: `${OVERVIEW_SERVICE_BASE_URL}contact-us/consultation/`,

  GET_TEAM: `${OVERVIEW_SERVICE_BASE_URL}aboutus/team/`,
  GET_CAREERS: `${OVERVIEW_SERVICE_BASE_URL}careers/`,
  POST_JOB_REQUEST: `${OVERVIEW_SERVICE_BASE_URL}careers/jobrequest/`,

  POST_SEO_TAG: `${OVERVIEW_SERVICE_BASE_URL}seo/`,

  GET_TICKETS: `${OVERVIEW_SERVICE_BASE_URL}ticket/`,
  POST_TICKET: `${OVERVIEW_SERVICE_BASE_URL}ticket/`,
  POST_TICKET_MESSAGE: (data: FormData) =>
    `${OVERVIEW_SERVICE_BASE_URL}ticket/${data.get('id')}/message/`,
  PUT_TICKET_CLOSE: ({ id }: { id: number }) => `${OVERVIEW_SERVICE_BASE_URL}ticket/${id}/close/`,

  GET_MAG_HEADER_POSTS: `${OVERVIEW_SERVICE_BASE_URL}sections/mag_header/`,
};
