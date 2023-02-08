import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import { CartItem, CartState } from "./types";
import { Book } from "../books/types";
import { RootState } from "../../store/store";

const initialState: CartState = {
  cart: [],
};

const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addBookToCart: (state, action: PayloadAction<Book>) => {
      state.cart.push(action.payload);
    },
    removeBookFromCart: (state, action: PayloadAction<string>) => {
      state.cart = state.cart.filter((e) => e.id !== action.payload);
    },
  },
});

export const cartSliceReducer = cartSlice.reducer;
export const { addBookToCart, removeBookFromCart } = cartSlice.actions;
export const cartSelector = (state: RootState) => state.cart.cart;
