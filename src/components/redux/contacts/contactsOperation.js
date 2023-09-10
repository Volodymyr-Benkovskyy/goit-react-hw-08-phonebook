import { createAsyncThunk } from '@reduxjs/toolkit';
import {
  addContactsApi,
  getContactApi,
  removeContactApi,
} from '../firebaseUseApi';

export const addContacts = createAsyncThunk(
  'contacts/add',
  async (items, { rejectWithValue, getState }) => {
    const { localId, idToken } = getState().auth;
    try {
      const contacts = await addContactsApi({ items, localId, idToken });
      return contacts;
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);

export const getContacts = createAsyncThunk(
  'contacts/get',
  async (_, { rejectWithValue, getState }) => {
    const { localId, idToken } = getState().auth;
    try {
      const data = await getContactApi({ localId, idToken });
      return data;
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);

export const removeContacts = createAsyncThunk(
  'contacts/remove',
  async (id, { rejectWithValue, getState }) => {
    const { localId, idToken } = getState().auth;
    try {
      await removeContactApi({ id, localId, idToken });
      return id;
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);
