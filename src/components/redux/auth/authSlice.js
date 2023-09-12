import { createSlice } from '@reduxjs/toolkit';
import {
  getCurUser,
  loginUser,
  refreshToken,
  registerUser,
} from './authOperation';

const initialState = {
  isAuth: false,
  idToken: null,
  email: null,
  refreshToken: null,
  localId: null,
  isLoading: false,
  error: null,
};

const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    logOut() {
      return { ...initialState };
    },
  },
  extraReducers: builder => {
    builder
      .addCase(registerUser.pending, state => {
        state.isLoading = true;
      })
      .addCase(registerUser.fulfilled, (state, { payload }) => {
        return {
          isAuth: true,
          isLoading: false,
          error: null,
          ...payload,
        };
      })
      .addCase(registerUser.rejected, (state, { payload }) => {
        state.isLoading = false;
        state.error = payload;
      })
      .addCase(loginUser.pending, state => {
        state.isLoading = true;
      })
      .addCase(loginUser.fulfilled, (state, { payload }) => {
        return {
          isAuth: true,
          isLoading: false,
          error: null,
          ...payload,
        };
      })
      .addCase(loginUser.rejected, (state, { payload }) => {
        state.isLoading = false;
        state.error = payload;
      })
      .addCase(getCurUser.pending, state => {
        state.isLoading = true;
      })
      .addCase(getCurUser.fulfilled, (state, { payload }) => {
        return {
          ...state,
          isAuth: true,
          isLoading: false,
          error: null,
          ...payload,
        };
      })
      .addCase(getCurUser.rejected, (state, { payload }) => {
        state.isLoading = false;
        state.error = payload;
      })
      .addCase(refreshToken.pending, state => {
        state.isLoading = true;
      })
      .addCase(refreshToken.fulfilled, (state, { payload }) => {
        return {
          ...state,
          isLoading: false,
          error: null,
          ...payload,
        };
      })
      .addCase(refreshToken.rejected, (state, { payload }) => {
        state.isLoading = false;
        state.error = payload;
      });
  },
});

export const { logOut } = authSlice.actions;
export default authSlice.reducer;
