import { createAsyncThunk } from '@reduxjs/toolkit';
import { registerUserApi } from '../firebaseApi';

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
