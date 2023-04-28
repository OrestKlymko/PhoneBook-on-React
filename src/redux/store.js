import { configureStore } from '@reduxjs/toolkit';
import { filterSlice } from './filterSlice';
import { getAllContacts } from 'components/API/contactsSlicer';

export const store = configureStore({
  reducer: {
    filter: filterSlice.reducer,
    newContact: getAllContacts.reducer,
  },
});

