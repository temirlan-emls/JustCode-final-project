import { configureStore } from '@reduxjs/toolkit';
import { likedReducer } from './liked/liked.slice';
import { loginReducer } from './login/login.slice';
import { cartReducer } from './cart/cart.slice';
import { fakeStoreApi } from './fakeStoreApi/fakeStore.api';

export const store = configureStore({
  reducer: {
    [fakeStoreApi.reducerPath]: fakeStoreApi.reducer,
    liked: likedReducer,
    login: loginReducer,
    cart: cartReducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(fakeStoreApi.middleware),
});
