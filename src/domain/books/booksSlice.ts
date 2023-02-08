import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'
import type { RootState } from '../../store/store';
import { delay } from '../../utils/delay';
import { books } from './books';
import { Book, BooksState } from './types'

export const getBooks = createAsyncThunk<Book[]>('books/get', async () => {
  // simulating a delay
  await delay(3000);
  return books;
})

// The code below is how a real world async thunk would look like

// export const getBooks = createAsyncThunk<Book[]>('books/get', async (_, thunkApi) => {
//   const {rejectWithValue, signal} = thunkApi;

//   const response = await fetch('/books', { signal });

//   const data = await response.json();

//   if (response.status !== 200) {
//     return rejectWithValue(data as string)
//   }

//   return data as Book[];
// })

const initialState: BooksState = {
  books: [],
  loading: 'not loaded'
}

const booksSlice = createSlice({
  name: 'books',
  initialState,
  reducers: {
    cleanupBooks: () => initialState,
    // addBook:(bookobj:Book)=>void,
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