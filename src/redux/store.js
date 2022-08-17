import { configureStore } from '@reduxjs/toolkit'
import counterReducer from './counter/counterReducer'

export default configureStore({
  reducer: {
    counter: counterReducer,
  },
})