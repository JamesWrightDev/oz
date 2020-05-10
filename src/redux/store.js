import { configureStore } from '@reduxjs/toolkit'
import { createSlice } from '@reduxjs/toolkit'

const authSlice = createSlice({
  name: 'auth',
  initialState: {
    userAuthenticated: null,
    authLoading: true,
    username: null,
  },
  reducers: {
    userAuthSuccess(state) {
      state.userAuthenticated = true;
      state.authLoading = false;
    },
    setUsername(state, action) {
      state.username = action.payload.username;
    },
    userAuthSignout(state){
      state.username = null;
      state.userAuthenticated = false;
    }
  }
})

const reducer = {
  auth: authSlice.reducer,
}

const store = configureStore({
  reducer,
  devTools: process.env.NODE_ENV !== 'production',
})

export default store;
