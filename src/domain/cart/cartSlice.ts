import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { CartItem, CartState } from "./types";
import type { RootState } from "../../store/store";
import { Book } from "../books/types";
const initialState: CartState = {
  cart: [] as CartItem[],
};

const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    // add in cart by id of the Bookitem
    addToCart: (state, action: PayloadAction<Book>) => {
      state.cart = [
        ...state.cart,
        {
          id: action.payload.id,
          name: action.payload.name,
          price: action.payload.price,
          description: action.payload.description,
        },
      ];
      // console.log(state.cart);
    },

    //remove from cart using id of the bookitem
    removeFromCart: (state, action: PayloadAction<string>) => {
      state.cart = state.cart.filter((item) => item.id !== action.payload);
      console.log(state.cart);
    },
    cleanCart: (state) => initialState,
  },
});

export const { addToCart, removeFromCart ,cleanCart} = cartSlice.actions;
export const cartSliceReducer = cartSlice.reducer;
export const cartSelector = (state: RootState) => state.cart.cart;
