import { AppState } from "../../types";
import {  createSlice } from '@reduxjs/toolkit'


const initialState:AppState = {
    isCartPage : false
}

const appSlice = createSlice({
  name: 'app',
  initialState,
  reducers: {
    changeToCartPage(state){
        state.isCartPage = true;
    },
     changeToBookPage(state){
        state.isCartPage = false;
    }
  }
})

export const appSliceReducer = appSlice.reducer;
export const { changeToCartPage,changeToBookPage } = appSlice.actions;