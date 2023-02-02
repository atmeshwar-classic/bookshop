import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'
import type { RootState } from '../../store/store';
import type {CartState} from  './types'




const initialState: CartState = {
  cart : []
}

const cartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
  }
})

