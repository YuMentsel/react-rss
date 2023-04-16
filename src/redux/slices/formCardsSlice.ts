import { createSlice } from '@reduxjs/toolkit';
import type { PayloadAction } from '@reduxjs/toolkit';

import { FormData } from '../../types/interfaces';

export const formCardsSlice = createSlice({
  name: 'formCards',
  initialState: [],
  reducers: {
    addFormCard: (state: FormData<string>[], action: PayloadAction<FormData<string>>) => {
      state.push(action.payload);
    },
  },
});

export const { addFormCard } = formCardsSlice.actions;

export default formCardsSlice.reducer;
