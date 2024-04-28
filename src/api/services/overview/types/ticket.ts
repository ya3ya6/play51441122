export type GetTicketsAPIAxiosResponseType = {
  id: number;
  title: string;
  created_at: string;
  status: 'open' | 'closed' | 'answered';
  messages: {
    id: number;
    message: string;
    full_name: string;
    created_at: string;
    is_support: boolean;
    file: string | null;
  }[];
}[];

export type PostTicketAPIArgs = {
  title: string;
  message: string;
};

export type PutTicketCloseAPIArgs = {
  id: number;
};

export type PostTicketMessageAPIArgs = {
  id: number;
  message: string;
  file: File | null;
};
