import { configureStore } from '@reduxjs/toolkit';
import { likedReducer } from './liked/liked.slice';
import { fakeStoreApi } from './fakeStoreApi/fakeStore.api';

export const store = configureStore({
  reducer: {
    [fakeStoreApi.reducerPath]: fakeStoreApi.reducer,
    liked: likedReducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(fakeStoreApi.middleware),
});
