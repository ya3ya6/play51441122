import { axiosAgent, axiosAgentMultipart } from '@/config/axiosConfig';
import { axiosCreator } from '@/utils/api/axios';
import { OverviewServiceEP } from './constants/endpoints';
import { GetAboutusAPIAxiosResponse, GetAboutusTeamAPIAxiosResponse } from './types/aboutus';
import { GetCareersAPIResponseType } from './types/careers';
import { PostConsultationAPIArgsType, PostContactUsAPIArgsType } from './types/contact_us';
import {
  GetCustomerOpinionsAPIArgs,
  GetCustomerOpinionsAPIAxiosResponse,
} from './types/customer_opinions';
import { GetOverviewAPIAxiosResponse } from './types/overview';
import { PostGetSeoTagsListAPIArgsType, PostGetSeoTagsListAPIResponseType } from './types/seo';
import { PutTicketCloseAPIArgs, GetTicketsAPIAxiosResponseType } from './types/ticket';
import { GetMagHeaderPostsAPIAxiosResponse } from './types/sections';

const getOverviewAPI = axiosCreator<null, GetOverviewAPIAxiosResponse>({
  axiosInstance: axiosAgent,
  endPoint: OverviewServiceEP.GET_OVERVIEW,
  method: 'get',
});

const getAboutUsAPI = axiosCreator<null, GetAboutusAPIAxiosResponse>({
  axiosInstance: axiosAgent,
  endPoint: OverviewServiceEP.GET_ABOUT_US,
  method: 'get',
});

const getCustomerOpinionsAPI = axiosCreator<
  GetCustomerOpinionsAPIArgs,
  GetCustomerOpinionsAPIAxiosResponse
>({
  axiosInstance: axiosAgent,
  endPoint: OverviewServiceEP.GET_CUSTOMER_OPINIONS,
  method: 'get',
});

const postContactUsAPI = axiosCreator<PostContactUsAPIArgsType, null>({
  axiosInstance: axiosAgent,
  endPoint: OverviewServiceEP.POST_CONTACT_US,
  method: 'post',
});

const postConsultationAPI = axiosCreator<PostConsultationAPIArgsType, null>({
  axiosInstance: axiosAgent,
  endPoint: OverviewServiceEP.POST_CONSULTATION,
  method: 'post',
});

const getTeamAPI = axiosCreator<null, GetAboutusTeamAPIAxiosResponse>({
  axiosInstance: axiosAgent,
  endPoint: OverviewServiceEP.GET_TEAM,
  method: 'get',
});

const getCareersAPI = axiosCreator<null, GetCareersAPIResponseType>({
  axiosInstance: axiosAgent,
  endPoint: OverviewServiceEP.GET_CAREERS,
  method: 'get',
});

const postJobRequestAPI = axiosCreator<FormData, null>({
  axiosInstance: axiosAgentMultipart,
  endPoint: OverviewServiceEP.POST_JOB_REQUEST,
  method: 'post',
});

const getTicketsAPI = axiosCreator<null, GetTicketsAPIAxiosResponseType>({
  axiosInstance: axiosAgent,
  endPoint: OverviewServiceEP.GET_TICKETS,
  method: 'get',
});

const postTicketAPI = axiosCreator<FormData, null>({
  axiosInstance: axiosAgentMultipart,
  endPoint: OverviewServiceEP.POST_TICKET,
  method: 'post',
});

const postTicketMessageAPI = axiosCreator<FormData, null>({
  axiosInstance: axiosAgentMultipart,
  endPoint: OverviewServiceEP.POST_TICKET_MESSAGE,
  method: 'post',
});

const putTicketCloseAPI = axiosCreator<PutTicketCloseAPIArgs, null>({
  axiosInstance: axiosAgent,
  endPoint: OverviewServiceEP.PUT_TICKET_CLOSE,
  method: 'put',
});

const postSEOTagAPI = axiosCreator<
  PostGetSeoTagsListAPIArgsType,
  PostGetSeoTagsListAPIResponseType
>({
  axiosInstance: axiosAgent,
  endPoint: OverviewServiceEP.POST_SEO_TAG,
  method: 'post',
});

const getMagHeaderPostsAPI = axiosCreator<null, GetMagHeaderPostsAPIAxiosResponse>({
  axiosInstance: axiosAgent,
  endPoint: OverviewServiceEP.GET_MAG_HEADER_POSTS,
  method: 'get',
});

export const OverviewServiceFetcher = {
  getOverviewAPI,
  getAboutUsAPI,
  getCustomerOpinionsAPI,
  postContactUsAPI,
  getTeamAPI,
  getCareersAPI,
  postJobRequestAPI,
  getTicketsAPI,
  postTicketAPI,
  postTicketMessageAPI,
  putTicketCloseAPI,
  postConsultationAPI,
  postSEOTagAPI,
  getMagHeaderPostsAPI,
};
