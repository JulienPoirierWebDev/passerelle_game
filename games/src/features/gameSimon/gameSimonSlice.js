import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  sequence: [],
  playing: false,
  playingIdx: 0,
  loose: false,
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
      state.loose = false;
    },
    setLoose: (state, action) => {
      state.loose = action.payload;
    },
  },
});

export const { setSequence, setPlaying, setPlayingIdx, reset, setLoose } =
  gameSimonSlice.actions;
export default gameSimonSlice.reducer;
