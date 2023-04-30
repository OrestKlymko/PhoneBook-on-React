import { createSlice } from '@reduxjs/toolkit';
import { deleteContact, fetchContacts } from './operations';
import { postContact } from './operations';

export const getAllContacts = createSlice({
  name: 'Contacts',
  initialState: {
    items: [],
    isLoading: false,
    error: null,
  },
  extraReducers: {
    [fetchContacts.pending](state) {
      return {
        ...state,
        isLoading: true,
      };
    },
    [fetchContacts.fulfilled](state, action) {
      return {
        ...state,
        isLoading: false,
        items: action.payload,
      };
    },
    [fetchContacts.rejected](state, action) {
      return {
        ...state,
        isLoading: false,
        error: action.payload,
      };
    },
    [postContact.pending](state) {
      return {
        ...state,
        isLoading: true,
      };
    },
    [postContact.fulfilled](state, action) {
      return {
        ...state,
        isLoading: false,
        items: [...state.items, action.payload],
      };
    },
    [postContact.rejected](state, action) {
      return {
        ...state,
        isLoading: false,
        error: action.payload,
      };
    },
    [deleteContact.pending](state) {
      return {
        ...state,
        isLoading: true,
      };
    },
    [deleteContact.fulfilled](state, action) {
      state.isLoading = false;
      const index = state.items.findIndex(
        task => task.id === action.payload.id
      );
      state.items.splice(index, 1);
    },
    [deleteContact.rejected](state, action) {
      return {
        ...state,
        isLoading: false,
        error: action.payload,
      };
    },
  },
});
