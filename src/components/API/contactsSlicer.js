import { createSlice } from '@reduxjs/toolkit';
import { deleteContact, fetchContacts } from './operations';
import { postContact } from './operations';

export const getAllContacts = createSlice({
  name: 'getContacts',
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
    [postContact.fulfilled](state, action) {
      return {
        ...state,
        isLoading: false,
        items: [...state.items, action.payload],
      };
    },
    [deleteContact.fulfilled](state, action) {
      state.isLoading = false;
      const index = state.items.findIndex(
        task => task.id === action.payload.id
      );
      state.items.splice(index, 1);
    },
    [fetchContacts.rejected](state, action) {
      return {
        ...state,
        isLoading: false,
        error: action.payload,
      };
    },
  },
});

export const { addContact, removeContact } = getAllContacts.actions;
