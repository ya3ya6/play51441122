export type NotificationModel = {
  id: string;
  title: string;
  text: string;
  status: 'success' | 'warning' | 'error';
};
