import { configureStore } from '@reduxjs/toolkit';
import chifumiGameReducer from '../features/chifumi/chifumiGameSlice';
import gameSimonReducer from '../features/gameSimon/gameSimonSlice';

export const store = configureStore({
  reducer: {
    chifumiGame: chifumiGameReducer,
    gameSimon: gameSimonReducer // Utiliser uniquement gameSimonReducer maintenant
  },
});
