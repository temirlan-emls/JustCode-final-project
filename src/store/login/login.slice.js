import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  login: {
    user: null,
    token: null,
  },
};

const loginSlice = createSlice({
  name: 'auth',
  initialState: initialState,
  reducers: {
    setCredentials: (state, action) => {
      state.login.user = action.payload.user;
      state.login.token = action.payload.token;
    },
  },
});

export const loginActions = loginSlice.actions;
export const loginReducer = loginSlice.reducer;
