import { configureStore } from '@reduxjs/toolkit';
import contactsReducer from './contacts/contactsSlice';
import filterReducer from './filterSlice';

const customLogger = store => {
  return next => {
    return action => {
      console.group('action ', action.type);
      const { getState, dispatch } = store;
      const prevState = getState();
      console.log('prevState', prevState);
      console.log(action);
      next(action);
      const nextState = getState();
      console.log('nextState :>> ', nextState);
      console.groupEnd();
    };
  };
};

// міделвар
const thunk = store => next => action => {
  if (typeof action === 'function') {
    action(store.dispatch, store.getState);
    return;
  }
  next(action);
};

export const store = configureStore({
  reducer: {
    contacts: contactsReducer,
    filter: filterReducer,
  },
  middleware: getDefaultMiddleware => [...getDefaultMiddleware(), customLogger],
});

// createAsyncThunk - @reduxjs/toolkit, rejectWithValue, extraReducers:
