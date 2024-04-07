import { createSlice } from "@reduxjs/toolkit";
import {  addQuantity } from "./cartUtils";


export const INITIAL_STATE = {
    cartItem:0,
    cost:0,
    count:1,
    hidden:false,
}

interface CartState {
  readonly cartItem: number;
  readonly cost: number;
  readonly count: number;
  readonly hidden: boolean;
}

const cartSlice = createSlice({
  name: "cart",
  initialState: INITIAL_STATE,
  reducers: {
    addQuantityCart: (state, action) => {
      return {
        ...state,
        count: addQuantity(state.count, action.payload),
      };
    },
    addToCart: (state): CartState => {
      return {
        ...state,
        cartItem: 1,
      };
    },
    deleteToCart: (): CartState => {
      return INITIAL_STATE;
    },
    toggleHiddenCart: (state): CartState => {
      return {
        ...state,
        hidden: !state.hidden,
      };
    },
  },
});


export const { toggleHiddenCart, addToCart, addQuantityCart, deleteToCart } =
  cartSlice.actions;

export default cartSlice.reducer;