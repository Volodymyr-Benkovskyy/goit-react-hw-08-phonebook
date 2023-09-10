import { createSlice } from '@reduxjs/toolkit';
import { addContacts, getContacts, removeContacts } from './contactsOperation';
import { logOut } from '../auth/authSlice';

const initialState = {
  items: [],
  isLoading: false,
  error: null,
};

const ContactsSlice = createSlice({
  name: 'contacts',
  initialState,

  extraReducers: builder => {
    builder
      .addCase(addContacts.fulfilled, (state, { payload }) => {
        state.items.push(payload);
      })
      .addCase(getContacts.fulfilled, (state, { payload }) => {
        state.items = payload;
      })
      .addCase(removeContacts.fulfilled, (state, { payload }) => {
        state.items = state.items.filter(el => el.id !== payload);
      })
      .addCase(logOut, () => {
        return { ...initialState };
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
