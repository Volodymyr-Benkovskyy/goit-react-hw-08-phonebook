import { createAsyncThunk } from '@reduxjs/toolkit';
import { getCurUserApi, loginUserApi, registerUserApi } from './firebaseUseApi';
import { logOut } from './authSlice';

export const registerUser = createAsyncThunk(
  'auth/register',
  async (form, { rejectWithValue }) => {
    try {
      const userData = await registerUserApi(form);
      return userData;
    } catch (error) {
      return rejectWithValue(error.massege);
    }
  }
);

export const loginUser = createAsyncThunk(
  'auth/login',
  async (userForm, { rejectWithValue }) => {
    try {
      const userData = await loginUserApi(userForm);
      return userData;
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);

export const getCurUser = createAsyncThunk(
  'auth/get/Cur/users',
  async (_, { getState, rejectWithValue, dispatch }) => {
    const { idToken } = getState().auth;
    try {
      const data = await getCurUserApi(idToken);
      return data;
    } catch (error) {
      setTimeout(() => {
        dispatch(logOut());
      }, 0);
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

// Boolean(idToken) ==>> приводимо рядок токена до буля
