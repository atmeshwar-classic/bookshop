import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import { Book } from "../books/types";
import { RootState } from "../../store/store";

const initialState: Book[] = [];

const cartSlice = createSlice({
  name: "books",
  initialState,
  reducers: {
    addBooks: (state, action: PayloadAction<Book>) => {
      return [action.payload, ...state];
    },
    removeBook: (state, action: PayloadAction<string>) => {
      return state.filter((book) => book.id !== action.payload);
    },
  },
});

export const { addBooks, removeBook } = cartSlice.actions;
export const getBook = (state: RootState) => state.bookCart;
export const cartSliceReducer = cartSlice.reducer;
