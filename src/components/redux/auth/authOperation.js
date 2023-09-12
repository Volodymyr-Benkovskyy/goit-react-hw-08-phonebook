import { createAsyncThunk } from '@reduxjs/toolkit';
import {
  getCurUserApi,
  loginUserApi,
  refreshTokenApi,
  registerUserApi,
} from '../firebaseUseApi';

import { logOut } from './authSlice';
import { errorHandler } from '../error/errorHandler';

export const registerUser = createAsyncThunk(
  'auth/register',
  async (form, { rejectWithValue }) => {
    try {
      const userData = await registerUserApi(form);
      return userData;
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);

export const loginUser = createAsyncThunk(
  'auth/login',
  async (usersForm, { rejectWithValue }) => {
    try {
      const userData = await loginUserApi(usersForm);
      return userData;
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);

export const getCurUser = createAsyncThunk(
  'auth/get/curUser',
  async (_, { getState, rejectWithValue, dispatch }) => {
    const { idToken } = getState().auth;
    try {
      const data = await getCurUserApi(idToken);
      return data;
    } catch (error) {
      dispatch(errorHandler({ error, cb: getCurUser }));
      return rejectWithValue(error.message);
    }
  },
  {
    condition(_, { getState }) {
      const { idToken } = getState().auth;
      return Boolean(idToken);
    },
  }
);

export const refreshToken = createAsyncThunk(
  'auth/refresh/token',
  async (cb, { rejectWithValue, getState, dispatch }) => {
    const { refreshToken } = getState().auth;
    try {
      const tokens = await refreshTokenApi(refreshToken);
      setTimeout(() => {
        dispatch(cb());
      });
      return tokens; // dispatch({type: fulfilled, payload: tokens}) -> state = newTokens
    } catch (error) {
      setTimeout(() => {
        dispatch(logOut());
      }, 0);
      return rejectWithValue(error.message);
    }
  }
);

// Boolean(idToken) ==>> приводимо рядок токена до буля
