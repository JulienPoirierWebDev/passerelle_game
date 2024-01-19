import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    count: 0,
    lock: false,
    data: ["", "", "", "", "", "", "", "", ""],
    
};

export const gameTictactoeSlice = createSlice({
    name: "tictactoe",
    initialState,
    reducers: {
        setCount: (state, action) => {
            state.count = action.payload;
        },
        setLock: (state, action) => {
            state.lock = action.payload;
        },
     
        reset: (state) => {
            state.count = 0;
            state.lock = false;
            state.data = ["", "", "", "", "", "", "", "", ""];
            
        },

        setDataCell: (state, action) => {
            state.data[action.payload] = "x";
        }

            
        
    },
})

export const { setCount, setLock, reset, data } = gameTictactoeSlice.actions;
export default gameTictactoeSlice.reducer;
