import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

axios.defaults.baseURL = 'https://connections-api.herokuapp.com/';

const token = {
  set(token) {
    axios.defaults.headers.common.Authorization = `Bearer ${token}`;
  },
  unset() {
    axios.defaults.headers.common.Authorization = '';
  },
};

export const createUser = createAsyncThunk(
  '/users/signup',
  async (ThunkArg, GetThunkAPI) => {
    try {
      const response = await axios.post('/users/signup', ThunkArg);

      token.set(response.data.token);
      return response.data;
    } catch (e) {
      return GetThunkAPI.rejectWithValue(e.message);
    }
  }
);

export const loginUser = createAsyncThunk(
  '/users/login',
  async (ThunkArg, GetThunkAPI) => {
    try {
      const response = await axios.post('/users/login', ThunkArg);
      token.set(response.data.token);
      return response.data;
    } catch (e) {
      return GetThunkAPI.rejectWithValue(e.message);
    }
  }
);

export const logOut = createAsyncThunk(
  '/users/logout',
  async (ThunkArg, GetThunkAPI) => {
    try {
      await axios.post('/users/logout');
      token.unset();
    } catch (e) {
      return GetThunkAPI.rejectWithValue(e.message);
    }
  }
);

export const getCurrentUser = createAsyncThunk(
  '/users/refresh',
  async (ThunkArg, GetThunkAPI) => {
    const getToken = GetThunkAPI.getState();
    const persistToken = getToken.userCreate.token;

    if (persistToken === null) {
      return;
    }

    try {
      token.set(persistToken);
      const { data } = await axios.get('/users/current');
      return data;
    } catch (e) {
      return GetThunkAPI.rejectWithValue(e.message);
    }
  }
);
