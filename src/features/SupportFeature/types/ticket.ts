export interface TicketModel {
  id: number;
  title: string;
  createdAt: string;
  status: 'open' | 'closed' | 'answered';
  messages: {
    id: number;
    message: string;
    fullName: string;
    createdAt: string;
    isSupport: boolean;
    file: string | null;
  }[];
}
