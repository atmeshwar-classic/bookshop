import { AppState } from "../../types";
import {  createSlice } from '@reduxjs/toolkit'


const initialState:AppState = {
    isCartPage : false
}

const appSlice = createSlice({
  name: 'app',
  initialState,
  reducers: {
    changeToCartPage(state,action){
        state.isCartPage = true;
    }
  }
})

export const appSliceReducer = appSlice.reducer;
export const { changeToCartPage } = appSlice.actions;