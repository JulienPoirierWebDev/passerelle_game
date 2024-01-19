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
            // Alterner entre "x" et "o"
            console.log(action.payload);
            state.data[action.payload] = state.count % 2 == 0 ? "x" : "o";
            // Incrémenter count après avoir défini la cellule
            //state.count += 1;
        },

            
        
    },
})

export const { setCount, setLock, reset, setDataCell } = gameTictactoeSlice.actions;
export default gameTictactoeSlice.reducer;
