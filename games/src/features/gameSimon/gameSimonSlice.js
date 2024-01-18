import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  score: 0,
  sequence: [], // J'ajoute l'état de la séquence ici s'il a du sens pour l'état global
  // Autres états globaux si nécessaire
};

export const gameSimonSlice = createSlice({
  name: 'gameSimon',
  initialState,
  reducers: {
    // Action pour mettre à jour le score
    setScore: (state, action) => {
      state.score = action.payload;
    },
    // Action pour réinitialiser le score
    resetScore: (state) => {
      state.score = 0;
    },
    reset : (state) => {
      state.score = 0;
      state.sequence = [];
    }
    // Autres reducers pour gérer la séquence ou autres états si nécessaire
  },
});

// Exporter les actions et le reducer
export const { setScore, resetScore, reset } = gameSimonSlice.actions;
export default gameSimonSlice.reducer;