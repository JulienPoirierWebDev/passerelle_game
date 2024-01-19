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
            const cellIndex = action.payload;
            // Vérifier si la cellule est déjà occupée
            if (state.data[cellIndex] === "") {
                // Si la cellule est vide, alterner entre "x" et "o"
                state.data[cellIndex] = state.count % 2 === 0 ? "x" : "o";
                // Incrémenter le count uniquement si la cellule était vide
                state.count += 1;
            }
        },
        
    },
});
export const { setCount, setLock, reset, setDataCell } = gameTictactoeSlice.actions;
export default gameTictactoeSlice.reducer;