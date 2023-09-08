import { configureStore } from '@reduxjs/toolkit';
import contactsReducer from './contacts/contactsSlice';
import filterReducer from './contacts/filterSlice';
import authReducer from './auth/authSlice';
import storage from 'redux-persist/lib/storage';

import {
  persistStore,
  persistReducer,
  FLUSH,
  REHYDRATE,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER,
} from 'redux-persist';

const AuthpersistConfig = {
  key: 'root',
  version: 1,
  storage,
  whiteList: ['idToken'],
};

const persistAuthedReducer = persistReducer(AuthpersistConfig, authReducer);

export const store = configureStore({
  reducer: {
    auth: persistAuthedReducer,
    contacts: contactsReducer,
    filter: filterReducer,
  },
  middleware: getDefaultMiddleware =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    }),
});

export const persistor = persistStore(store);

// connection redux-persist, create function getCurUserApi, getCurUser
