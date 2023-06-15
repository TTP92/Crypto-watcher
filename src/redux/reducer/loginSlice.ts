import { createSlice } from '@reduxjs/toolkit'

interface Login {
    isLoggedIn: boolean
};

interface Payload {
  payload: 'SUCCESS' | 'NOT_SUCCESS';
};

const initialState: Login = {
    isLoggedIn: false,
};

export const loginSlice = createSlice({
  name: 'login',
  initialState,
  reducers: {
    login: (state, action: Payload) => {
      switch (action.payload) {
        case 'SUCCESS':
            state.isLoggedIn = true;
            break;
        case 'NOT_SUCCESS':
          state.isLoggedIn = false;
          break;
        default:
            state.isLoggedIn = false;
            break;
      }
    },
  },
})

export const { login } = loginSlice.actions

export default loginSlice.reducer


