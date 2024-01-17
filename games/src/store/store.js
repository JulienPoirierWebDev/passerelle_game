import { configureStore } from '@reduxjs/toolkit'
import chifumiGameReducer from '../features/chifumi/chifumiGameSlice'

export const store = configureStore({
  reducer: {
    chifumiGame: chifumiGameReducer,
  },
})