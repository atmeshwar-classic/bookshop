import { createSlice } from '@reduxjs/toolkit'
import type { RootState } from '../../store/store';
import { BooksState } from './types'

const initialState: BooksState = {
  books: [],
  loading: 'not loaded'
}

const booksSlice = createSlice({
  name: 'books',
  initialState,
  reducers: {
    cleanupBooks: () => initialState
  }
})

export const booksSliceReducer = booksSlice.reducer;
export const { cleanupBooks } = booksSlice.actions;
export const booksSelector = (state: RootState) => state.books;