import { createAsyncThunk } from '@reduxjs/toolkit';

import axios from 'axios';

axios.defaults.baseURL = 'https://64efa105219b3e2873c4b865.mockapi.io';

export const addContactApi = createAsyncThunk(
  'contacts/addContactApi',
  async (items, thunkAPI) => {
    try {
      const response = await axios.post('/contacts', items);
      return response.data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

export const getContactsApi = createAsyncThunk(
  'contacts/getContactsApi',
  async (_, thunkAPI) => {
    try {
      const response = await axios.get('/contacts');
      return response.data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

export const deleteContactsApi = createAsyncThunk(
  'contacts/deleteContactsApi',
  async (id, thunkAPI) => {
    try {
      const response = await axios.delete(`/contacts/${id}`);
      return response.data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);
