export type GetNotificationResponse = {
  all_count: number;
  all_list: {
    id: number;
    level: string;
    unread: boolean;
    verb: string;
    slug: string;
    timestamp: string;
    data?: {
      href?: string;
    };
  }[];
};

export type PostReadNotificationsAPIArgsType = {
  slugs: string[];
};
