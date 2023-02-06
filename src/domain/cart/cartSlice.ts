import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import type { RootState } from "../../store/store";
import { CartItem, CartProducts } from "./types";

export const cartSlice = createSlice({
    name:"cart",
    initialState: [] as CartProducts[],
    reducers:{
        addToCart: (state,action: PayloadAction<CartItem>) => {
            const index = state.findIndex(book => book.id == action.payload.id)
            if(index !== -1){
                state[index].quantity += 1
            }
            else{
                state.push({...action.payload,quantity:1})
            }
        },
        removeFromCart: (state,action: PayloadAction<string>) => {
            const index = state.findIndex(book => book.id == action.payload)
            if(state[index].quantity > 1){
                state[index].quantity -=1
            }
            else{
                return state.filter((book) => book.id != action.payload)
            }
        }
    }
})

export const cartSliceReducer = cartSlice.reducer;
export const {addToCart,removeFromCart} = cartSlice.actions;
export const cartSelector = (state:RootState) => state.cart;
