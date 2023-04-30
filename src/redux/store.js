import { configureStore } from '@reduxjs/toolkit';
import { filterSlice } from './Contact/filterSlice';
import { getAllContacts } from 'redux/Contact/contactsSlicer';
import { createUserSlicer } from './Auth/userSlicer';
import { persistReducer, persistStore } from 'redux-persist';
import storage from 'redux-persist/lib/storage'; // defaults to localStorage for web

import {
  FLUSH,
  REHYDRATE,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER,
} from 'redux-persist';

const persistConfig = {
  key: 'root',
  storage,
  whitelist: ['token', 'isLogin'],
};

export const store = configureStore({
  reducer: {
    filter: filterSlice.reducer,
    newContact: getAllContacts.reducer,
    userCreate: persistReducer(persistConfig, createUserSlicer.reducer),
  },
  middleware: getDefaultMiddleware =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    }),
});

export const persistor = persistStore(store);
