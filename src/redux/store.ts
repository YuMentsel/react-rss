import { configureStore } from '@reduxjs/toolkit';

import searchReducer from './slices/searchSlice';
import formCardsReducer from './slices/formCardsSlice';
import { api } from './api';

export const store = configureStore({
  reducer: {
    search: searchReducer,
    [api.reducerPath]: api.reducer,
    formCards: formCardsReducer,
  },
  middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(api.middleware),
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
