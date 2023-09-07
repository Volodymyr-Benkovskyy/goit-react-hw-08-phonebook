import { createAsyncThunk } from '@reduxjs/toolkit';
import { loginUserApi, registerUserApi } from '../firebaseApi';

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
