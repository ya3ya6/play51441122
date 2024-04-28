import ROUTES from '@/routers';
import { AuthIcon, ExitIcon, NotificationIcon, OrderListIcon, SupportIcon } from '../icons';

export const ProfileMenu = [
  {
    id: 0,
    title: 'profileMenu.notif',
    icon: NotificationIcon,
    slug: ROUTES.PROFILE.NOTIFICATION,
    notification: true,
  },
  {
    id: 1,
    title: 'profileMenu.personalInfo',
    icon: AuthIcon,
    slug: ROUTES.PROFILE.PERSONAL_INFO,
  },
  {
    id: 2,
    title: 'profileMenu.orders',
    icon: OrderListIcon,
    slug: ROUTES.PROFILE.ORDER,
  },
  {
    id: 3,
    title: 'profileMenu.support',
    icon: SupportIcon,
    slug: ROUTES.PROFILE.SUPPORT,
  },
  {
    id: 4,
    title: 'profileMenu.logout',
    icon: ExitIcon,
    isExit: true,
    slug: ROUTES.HOME,
  },
];
