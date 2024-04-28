export type GetCareersAPIResponseType = {
  id: number;
  name: string;
  jobposts: {
    id: number;
    name: string;
    location: string;
    descriptions: {
      id: number;
      description: string;
    }[];
  }[];
}[];

export type PostJobRequestAPIArgsType = {
  name: string;
  gender: string;
  birth: string;
  jobpost_id: number;
  mobile_number: string;
  phone_number: string;
  email: string;
  address: string;
  education_field: string;
  education_grade: string;
  education_average: string;
  referral_type: string;
  resume_file: File;
};
