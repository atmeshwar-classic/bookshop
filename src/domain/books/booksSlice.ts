import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'
import type { RootState } from '../../store/store';
import { delay } from '../../utils/delay';
import { books } from './books';
import { Book, BooksState } from './types'

//this requires 2 param, ->  
// 1. is the name of the action and here books is the name of slice followed by action name
// 2. is async fucntion
export const getBooks = createAsyncThunk<Book[]>('books/get', async () => {
  // simulating a delay
  await delay(2000);
  return books;
})

const initialState: BooksState = {
  books: [],
  loading: 'not loaded'
}

const booksSlice = createSlice({
  name: 'books',
  initialState,
  reducers: {
    cleanupBooks: () => initialState
  },
  extraReducers: (builder) => {
    builder
      .addCase(getBooks.pending, (state) => {
        state.loading = 'loading';
      })
      .addCase(getBooks.fulfilled, (state, action) => {
        state.loading = 'loaded';
        state.books = action.payload;
      })
      .addCase(getBooks.rejected, (state, action) => {
        state.loading = 'error';
        state.error = action.payload as string ?? action.error.message;
      })
  }
})

export const booksSliceReducer = booksSlice.reducer;
export const { cleanupBooks } = booksSlice.actions;
export const booksSelector = (state: RootState) => state.books;