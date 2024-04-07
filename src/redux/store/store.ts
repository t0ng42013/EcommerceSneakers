import {  configureStore } from "@reduxjs/toolkit";
import menuReducer from "../menu/menuSlice";
import cartReducer from "../cart/cartSlice";
import imgReducer from "../sliceImg/imgSlice";
// const reducer = combineReducers({
//     // cart:cartReducer
//     menu: menuSlice,
// });


export const store = configureStore({
    reducer:{
        menu: menuReducer,
        cart: cartReducer,
        img: imgReducer,
    }
});