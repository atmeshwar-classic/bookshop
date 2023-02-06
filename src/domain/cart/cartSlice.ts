import { PayloadAction, createAsyncThunk, createSlice } from '@reduxjs/toolkit'
import type {CartState,CartItem} from  './types'
import { Book } from '../books/types';


const initialState: CartState = {
  cart : []
}

const cartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    removeItem : (state,action:PayloadAction<string>) =>{
        state.cart = state.cart.filter(e=>e.id !== action.payload)
    },
     addCart: {
      reducer: (state,action:PayloadAction<CartItem>) =>{
        state.cart.push(action.payload)
      },
      prepare :({author,...value}:Book)=>{
        return{
            // payload:{
            //   id:value.id,
            //   name : value.name,
            //   description : value.description,
            //   price:value.price
            // }
            payload:{
                ...value
            }            
        }
      }
    },
  },

})


export const cartSliceReducer = cartSlice.reducer;
export const { addCart,removeItem } = cartSlice.actions;
