import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  liked: [],
};

export const likedSlice = createSlice({
  name: 'liked',
  initialState,
  reducers: {
    addToLiked: (state, action) => {
      const itemInCart = state.liked.find(
        (item) => item.id === action.payload.id
      );

      if (itemInCart) {
        itemInCart.quantity++;
      } else {
        state.liked.push({ ...action.payload, quantity: 1 });
      }
    },
    removeFromLiked: (state, action) => {
      const removeItem = state.liked.filter(
        (item) => item.id !== action.payload.id
      );
      state.liked = removeItem;
    },
  },
});

export const likedReducer = likedSlice.reducer;
export const likedActions = likedSlice.actions;
