import { createSlice } from '@reduxjs/toolkit';

export const filterSlice = createSlice({
  name: 'filter',
  initialState: '',
  reducers: {
    filterContacts: (state, actions) => {
      return (state = actions.payload);
    },
  },
});

export const { filterContacts } = filterSlice.actions;
