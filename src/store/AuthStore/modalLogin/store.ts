import create from 'zustand';
import { LoginModalType } from './type';

export const useLoginModal = create<LoginModalType>(set => ({
  loginModal: false,
  loginModalSetOpen: () => set(state => ({ ...state, loginModal: true })),
  loginModalSetClose: () => set(state => ({ ...state, loginModal: false })),
  loginModalToggle: () => set(state => ({ ...state, open: !state.loginModal })),
}));
