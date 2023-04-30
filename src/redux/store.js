import { configureStore } from '@reduxjs/toolkit';
import { filterSlice } from './filterSlice';
import { getAllContacts } from 'redux/contactsSlicer';
import { createUserSlicer } from './Auth/userSlicer';



export const store = configureStore({
  reducer: {
    filter: filterSlice.reducer,
    newContact: getAllContacts.reducer,
    userCreate: createUserSlicer.reducer,
  },

});




