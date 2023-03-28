import { configureStore } from '@reduxjs/toolkit';
import likedSlice from './cart/liked.slice';
import { fakeStoreApi } from './fakeStoreApi/fakeStore.api';

export const store = configureStore({
  reducer: {
    [fakeStoreApi.reducerPath]: fakeStoreApi.reducer,
    liked: likedSlice,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(fakeStoreApi.middleware),
});
