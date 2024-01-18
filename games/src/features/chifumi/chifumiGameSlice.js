import { createSlice } from "@reduxjs/toolkit"; 

const initialState = {
    playerChoice: null,
    computerChoice: null,
    result: null,
    scores: {
        player: 0,
        computer: 0,
      },
};

export const chifumiGameSlice = createSlice({
    name: "chifumiGame",
    initialState,
    reducers: {
        setPlayerChoice: (state, action) => {
            state.playerChoice = action.payload;
        },
        setComputerChoice: (state, action) => {
            state.computerChoice = action.payload;
        },
        setResult: (state, action) => {
            state.result = action.payload;
        },
        setResetGame: (state) => {
            state.playerChoice = null;
            state.computerChoice = null;
            state.result = null;
        },
        setUpdatedScores: (state, action) => {
            if (action.payload === 'player') {
              state.scores.player += 1;
            } else if (action.payload === 'computer') {
              state.scores.computer += 1;
            }
          },
        
    },
})

export const { setPlayerChoice, setComputerChoice, setResult, setResetGame, setUpdatedScores } = chifumiGameSlice.actions;

export default chifumiGameSlice.reducer;