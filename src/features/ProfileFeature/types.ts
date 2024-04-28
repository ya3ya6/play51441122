export interface NotificationModel {
  id: number;
  level: string;
  unread: boolean;
  verb: string;
  timestamp: string;
  slug: string;
  data?: {
    href?: string;
  };
}
