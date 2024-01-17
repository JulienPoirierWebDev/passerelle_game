import { createSlice } from "@reduxjs/toolkit"; 

const initialState = {
    playerChoice: null,
    computerChoice: null,
    result: null,
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
        reset: (state) => {
            state.playerChoice = null;
            state.computerChoice = null;
            state.result = null;
        }
    },
})

export const { setPlayerChoice, setComputerChoice, setResult } = chifumiGameSlice.actions;

export default chifumiGameSlice.reducer;