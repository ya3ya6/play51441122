import { UserModel } from '@/model/UserModel';

export type AuthType = {
  isLoggedIn: boolean;
  user: UserModel | Record<string, unknown>;
  loginAction: () => void;
  logoutAction: () => void;
  setUser: (user: UserModel) => void;
  setAccessToken: (accessToken: string) => void;
  setRefreshToken: (refreshToken: string) => void;
  refreshToken: string;
  accessToken: string;
};
