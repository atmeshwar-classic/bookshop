import { createSlice } from "@reduxjs/toolkit";
import type { RootState } from "../../store/store";
import { CartItem, CartState } from "./types";

const initialState: CartState = {
  cartItems: [],
  loading: "not loaded",
};

const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    cleanupcart: () => initialState,
    addBookItemsTocart: (state, { payload }) => {
      state.cartItems = [...state.cartItems, payload];
    },
    removeBookItemsFromcart: (state, { payload }) => {
      const newData=state.cartItems.filter((e:CartItem,i:number)=>{
        return payload!==i
      })
      state.cartItems = newData
    },
  },
});

export const cartSliceReducer = cartSlice.reducer;
export const { cleanupcart, addBookItemsTocart ,removeBookItemsFromcart} = cartSlice.actions;
export const cartSelector = (state: RootState) => state.cartItems;
