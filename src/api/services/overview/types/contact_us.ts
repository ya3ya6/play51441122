export type PostContactUsAPIArgsType = {
  full_name: string;
  email: string;
  message: string;
};

export type PostConsultationAPIArgsType = {
  full_name: string;
  phone_number: string;
  url: string;
  email?: string;
};
