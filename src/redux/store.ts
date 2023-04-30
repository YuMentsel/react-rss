import * as toolkitRaw from '@reduxjs/toolkit';
import { PreloadedState } from '@reduxjs/toolkit';

import searchReducer from './slices/searchSlice';
import formCardsReducer from './slices/formCardsSlice';

import { api } from './api';

type TypeToolkitRaw = typeof toolkitRaw & { default?: unknown };

const { configureStore, combineReducers } = ((toolkitRaw as TypeToolkitRaw).default ??
  toolkitRaw) as typeof toolkitRaw;

const reducer = combineReducers({
  search: searchReducer,
  [api.reducerPath]: api.reducer,
  formCards: formCardsReducer,
});

const setupStore = (preloadedState?: PreloadedState<RootState>) => {
  return configureStore({
    reducer,
    middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(api.middleware),
    preloadedState,
  });
};

export default setupStore;
export type RootState = ReturnType<typeof reducer>;
export type AppStore = ReturnType<typeof setupStore>;
export type AppDispatch = AppStore['dispatch'];
