import { createSlice } from "@reduxjs/toolkit";



const menuSlice = createSlice({
    name: "menu",
    initialState: false,
    reducers:{
        toggleMenu(state:boolean): boolean {
            return !state             
        }
    }
});

export const {toggleMenu} = menuSlice.actions;
export default menuSlice.reducer;