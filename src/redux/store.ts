import { configureStore } from '@reduxjs/toolkit'
import authReducer from './reducer/loginSlice'

export default configureStore({
  reducer: {
    auth: authReducer
  },
})