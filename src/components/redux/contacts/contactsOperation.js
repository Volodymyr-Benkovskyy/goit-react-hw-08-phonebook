import { createAsyncThunk } from '@reduxjs/toolkit';
import {
  addContactsApi,
  getContactApi,
  removeContactApi,
} from '../firebaseUseApi';
import { errorHandler } from '../error/errorHandler';

export const addContacts = createAsyncThunk(
  'contacts/add',
  async (items, { rejectWithValue, getState, dispatch }) => {
    const { localId, idToken } = getState().auth;
    try {
      const contacts = await addContactsApi({ items, localId, idToken });
      return contacts;
    } catch (error) {
      dispatch(errorHandler({ error, cb: () => addContacts(items) }));
      return rejectWithValue(error.message);
    }
  }
);

export const getContacts = createAsyncThunk(
  'contacts/get',
  async (_, { rejectWithValue, getState, dispatch }) => {
    const { localId, idToken } = getState().auth;
    try {
      const data = await getContactApi({ localId, idToken });
      return data;
    } catch (error) {
      dispatch(errorHandler({ error, cb: getContacts }));
      return rejectWithValue(error.message);
    }
  }
);

export const removeContacts = createAsyncThunk(
  'contacts/remove',
  async (id, { rejectWithValue, getState, dispatch }) => {
    const { localId, idToken } = getState().auth;
    try {
      await removeContactApi({ id, localId, idToken });
      return id;
    } catch (error) {
      dispatch(errorHandler({ error, cb: () => removeContacts(id) }));
      return rejectWithValue(error.message);
    }
  }
);
