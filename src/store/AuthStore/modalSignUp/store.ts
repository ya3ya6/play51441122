import create from 'zustand';
import { SignUpModalType } from './type';

export const useSignUpModal = create<SignUpModalType>(set => ({
  signUpModal: false,
  signUpModalSetOpen: () => set(state => ({ ...state, signUpModal: true })),
  signUpModalSetClose: () => set(state => ({ ...state, signUpModal: false })),
  signUpModalToggle: () => set(state => ({ ...state, open: !state.signUpModal })),
}));
