import { createAsyncThunk } from '@reduxjs/toolkit';
import { addContactsApi, getContactApi, removeContactApi } from './firebaseApi';

export const addContacts = createAsyncThunk(
  'contacts/add',
  async (items, thunkApi) => {
    try {
      const contacts = await addContactsApi(items);
      return contacts;
    } catch (error) {
      return thunkApi.rejectWithValue(error.message);
    }
  }
);

export const getContacts = createAsyncThunk(
  'contacts/get',
  async (_, { rejectWithValue }) => {
    try {
      const data = await getContactApi();
      return data;
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);

export const removeContacts = createAsyncThunk(
  'contacts/remove',
  async (id, { rejectWithValue }) => {
    try {
      await removeContactApi(id);
      return id;
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);

/* import { createAsyncThunk } from '@reduxjs/toolkit';

import axios from 'axios';

export const addContactApi = createAsyncThunk(
  'contacts/addContactApi',
  async (items, thunkAPI) => {
    try {
      const response = await axios.post('/contacts.json', items);
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
      const response = await axios.get('/contacts.json');
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
      const response = await axios.delete(`/contacts${id}.json`);
      return response.data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);
 */

// server replacement for firebase components Contects, fix Api
