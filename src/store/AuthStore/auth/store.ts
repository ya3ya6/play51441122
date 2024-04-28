import { UserModel } from '@/model/UserModel';
import create from 'zustand';
import { AuthType } from './type';

export const useAuth = create<AuthType>(set => ({
  isLoggedIn: false,
  accessToken: '',
  refreshToken: '',
  user: {},
  loginAction: () => set(state => ({ ...state, isLoggedIn: true })),
  logoutAction: () => set(state => ({ ...state, isLoggedIn: false })),
  setAccessToken: (accessToken: string) => set(state => ({ ...state, accessToken })),
  setRefreshToken: (refreshToken: string) => set(state => ({ ...state, refreshToken })),
  setUser: (user: UserModel) => set(state => ({ ...state, user })),
}));
