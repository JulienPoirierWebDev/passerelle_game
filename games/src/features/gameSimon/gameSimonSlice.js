import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    sequence: [],
    playing: false,
    playingIdx: 0,
};

export const gameSimonSlice = createSlice({
    name: "gameSimon",
    initialState,
    reducers: {
        setSequence: (state, action) => {
            state.sequence = action.payload;
        },
        setPlaying: (state, action) => {
            state.playing = action.payload;
        },
        setPlayingIdx: (state, action) => {
            state.playingIdx = action.payload;
        },
        reset: (state) => {
            state.sequence = [];
            state.playing = false;
            state.playingIdx = 0;
        }
    },
})

export const { setSequence, setPlaying, setPlayingIdx , reset } = gameSimonSlice.actions;
export default gameSimonSlice.reducer;
