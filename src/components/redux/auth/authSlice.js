import { createSlice } from '@reduxjs/toolkit';
import { loginUser, registerUser } from './authOperation';

const authSlice = createSlice({
  name: 'auth',
  initialState: {
    isAuth: false,
    idToken: null,
    email: null,
    refreshToken: null,
    localId: null,
    isLoading: false,
    error: null,
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
      });
  },
});

export default authSlice.reducer;

// creating an operation registerUser and  extraReducers
