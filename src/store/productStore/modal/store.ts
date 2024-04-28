import create from 'zustand';
import { ModalShoppingCard } from './type';

export const useShoppingModal = create<ModalShoppingCard>(set => ({
  modal: false,
  shoppingCard: [],
  setOpen: () => set(state => ({ ...state, modal: true })),
  setClose: () => set(state => ({ ...state, modal: false })),
  toggleModal: () => set(state => ({ ...state, open: !state.modal })),
}));
