import { createSlice, PayloadAction } from '@reduxjs/toolkit';

type User = {
  id: number;
  username: string;
  firstname: string;
  token: string;
};

type AuthState = {
  isLoggedIn: boolean;
  error: string | undefined;
  user: User | undefined;
};

const initialState: AuthState = {
  isLoggedIn: false,
  error: undefined,
  user: undefined,
};

const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    loginSuccess(state, action: PayloadAction<User>) {
      state.isLoggedIn = true;
      state.user = action.payload;
      state.error = undefined;
    },
    loginFailure(state, action: PayloadAction<string | undefined>) {
      state.isLoggedIn = false;
      state.error = action.payload;
    },
    logout(state) {
      state.isLoggedIn = false;
      state.user = undefined;
      state.error = undefined;
    },
  },
});

export const { loginSuccess, loginFailure, logout } = authSlice.actions;

export default authSlice.reducer;
