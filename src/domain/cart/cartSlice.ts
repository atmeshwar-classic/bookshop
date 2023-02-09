import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import type { RootState } from "../../store/store";
import { Book } from "../books/types";
import { CartState } from "./types";

const initialState: CartState = {
  cart: []
};


const cartSlice = createSlice({
  initialState,
  name: "cart",
  reducers: {
    addToCart: (state, { payload }: PayloadAction<Book>) => {
      state.cart = [...state.cart, payload];
    },
    removeFromCart: (state, { payload }: PayloadAction<string>) => {
      state.cart = state.cart.filter(e => e.id !== payload);
    },
  },
});


export const cartSliceReducer = cartSlice.reducer;
export const { addToCart, removeFromCart } = cartSlice.actions;
export const cartSelector = (state: RootState) => state.cart;
