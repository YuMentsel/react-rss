import { createSlice } from '@reduxjs/toolkit';
import type { PayloadAction } from '@reduxjs/toolkit';

interface ModalState {
  id: number;
  isOpen: boolean;
}

const initialState: ModalState = {
  id: 1,
  isOpen: false,
};

export const modalSlice = createSlice({
  name: 'modal',
  initialState,
  reducers: {
    openModal: (state: ModalState, action: PayloadAction<number>) => {
      state.id = action.payload;
      state.isOpen = true;
    },
    closeModal: (state: ModalState) => {
      state.isOpen = false;
    },
  },
});

export const { openModal, closeModal } = modalSlice.actions;

export default modalSlice.reducer;
