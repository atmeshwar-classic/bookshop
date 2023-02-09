import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import type { RootState } from "../../store/store";
import { Book } from "../books/types";
import { CartState } from "./types";

const initialState: CartState = {
  cart: [],
  loading: 'not loaded',
};


const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addToCart: (state, { payload }: PayloadAction<Book>) => {
      state.cart = [...state.cart, payload];
    },
    removeFromCart: (state, { payload }: PayloadAction<string>) => {
      state.cart = state.cart.filter(item => item.id !== payload);
    },
  },
});


export const cartSliceReducer = cartSlice.reducer;
export const { addToCart, removeFromCart } = cartSlice.actions;
export const cartSelector = (state: RootState) => state.cart;
