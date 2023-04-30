import { createSlice } from '@reduxjs/toolkit';
import { createUser, loginUser, Logout } from './operations';

export const createUserSlicer = createSlice({
  name: 'SignUp',
  initialState: {
    isLogin: false,
    name:''
  },
  extraReducers: {
      [createUser.fulfilled](state, { payload }) {
        console.log(payload)
        return {
          ...state,
          isLogin: true,
        };
      },
      [loginUser.fulfilled](state, { payload }) {
        return {
          ...state,
          isLogin: true,
          name:payload.user.name
        };
      },
    [Logout.fulfilled](state, { payload }) {
      return {
        ...state,
        isLogin: false,
        name:''
      };
    },
    }
})
