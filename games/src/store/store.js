import { configureStore } from '@reduxjs/toolkit'
import chifumiGameReducer from '../features/chifumi/chifumiGameSlice'
import gameSimonReducer from '../features/gameSimon/gameSimonSlice'
import gameTictactoeReducer from '../features/tictactoe/tictactoeSlice'
export const store = configureStore({
  reducer: {
    chifumiGame: chifumiGameReducer,
    gameSimon: gameSimonReducer,
    tictactoe: gameTictactoeReducer
  },
})

