import { createSlice } from '@reduxjs/toolkit';
import {
  addContactApi,
  deleteContactsApi,
  getContactsApi,
} from './contactsOperation';

const ContactsSlice = createSlice({
  name: 'contacts',
  initialState: {
    items: [],
    isLoading: false,
    error: null,
  },

  extraReducers: builder => {
    builder
      .addCase(addContactApi.fulfilled, (state, { payload }) => {
        state.items.push(payload);
      })
      .addCase(getContactsApi.fulfilled, (state, { payload }) => {
        state.items = payload;
      })
      .addCase(deleteContactsApi.fulfilled, (state, { payload }) => {
        state.items = state.items.filter(el => el.id !== payload);
      })

      .addMatcher(
        action => {
          if (
            action.type.startsWith('contacts') &&
            action.type.endsWith('/pending')
          )
            return true;
        },
        state => {
          state.isLoading = true;
        }
      )
      .addMatcher(
        action => {
          if (
            action.type.startsWith('contacts') &&
            action.type.endsWith('/rejected')
          )
            return true;
        },
        (state, { payload }) => {
          state.isLoading = false;
          state.error = payload;
        }
      )
      .addMatcher(
        action => {
          if (
            action.type.startsWith('contacts') &&
            action.type.endsWith('/fulfilled')
          )
            return true;
        },
        state => {
          state.isLoading = false;
          state.error = null;
        }
      );
  },
});

export default ContactsSlice.reducer;
