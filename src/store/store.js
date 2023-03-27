import { configureStore } from '@reduxjs/toolkit';
import counterReducer from './cart/cart.slice';
import { fakeStoreApi } from './fakeStoreApi/fakeStore.api';

export const store = configureStore({
  reducer: {
    [fakeStoreApi.reducerPath]: fakeStoreApi.reducer,
    counter: counterReducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(fakeStoreApi.middleware),
});
