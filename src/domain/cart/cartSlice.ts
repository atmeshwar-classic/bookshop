import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'
import type { RootState } from '../../store/store';
import { CartState } from './types';

const initialState: CartState = {
  cartItems: [],
}

const cartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    addToCart(state,action){
      state.cartItems.push(action.payload)
    },
    removeFromCart(state,action){
     state.cartItems = state.cartItems.filter(cartItem=>cartItem.id !== action.payload.id)
    }
  },
})

export const cartSliceReducer = cartSlice.reducer;
export const { addToCart,removeFromCart } = cartSlice.actions;
export const cartSelector = (state: RootState) => state.cart;