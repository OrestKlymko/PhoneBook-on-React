import { createSlice } from '@reduxjs/toolkit';
import { createUser, getCurrentUser, loginUser, logOut } from './operations';

export const createUserSlicer = createSlice({
  name: 'SignUp',
  initialState: {
    isLogin: false,
    name: '',
    token: null,
    isLoad: false,
    newUser: false,
  },
  extraReducers: {
    [createUser.fulfilled](state, { payload }) {
      return {
        ...state,
        token: payload.token,
        isLogin: true,
        name: payload.user.name,
        isLoad: false,
        newUser: true,
      };
    },
    [loginUser.fulfilled](state, { payload }) {
      return {
        ...state,
        token: payload.token,
        isLogin: true,
        name: payload.user.name,
        isLoad: false,
      };
    },
    [logOut.fulfilled](state, { payload }) {
      return {
        ...state,
        token: null,
        isLogin: false,
        name: '',
        isLoad: false,
      };
    },
    [getCurrentUser.fulfilled](state, { payload }) {
      return {
        ...state,
        isLogin: true,
        name: payload.name??'',
        isLoad: false,
      };
    },
    [createUser.rejected](state, { payload }) {
      console.log(payload);
      return {
        ...state,
        token: null,
        isLogin: false,
        name: '',
        isLoad: false,
      };
    },
    [loginUser.rejected](state, { payload }) {
      return {
        ...state,
        token: null,
        isLogin: false,
        name: '',
        isLoad: false,
      };
    },
    [logOut.rejected](state, { payload }) {
      return {
        ...state,
        token: null,
        isLogin: false,
        name: '',
        isLoad: false,
      };
    },
    [getCurrentUser.rejected](state, { payload }) {
      return {
        ...state,
        isLogin: false,
        name: '',
        isLoad: false,
      };
    },
    [createUser.pending](state, { payload }) {
      console.log(payload);
      return {
        ...state,
        isLoad: true,
      };
    },
    [loginUser.pending](state, { payload }) {
      return {
        ...state,
        isLoad: true,
      };
    },
    [logOut.pending](state, { payload }) {
      return {
        ...state,
        isLoad: true,
      };
    },
    [getCurrentUser.pending](state, { payload }) {
      return {
        ...state,
        isLoad: true,
      };
    },
  },
});
