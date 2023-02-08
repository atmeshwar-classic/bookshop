import { configureStore, combineReducers } from '@reduxjs/toolkit'
import { booksSliceReducer } from '../domain/books/booksSlice'

const combinedReducer = combineReducers({
  books: booksSliceReducer
  // cart:cartSliceReducer
});

export const store = configureStore({
  reducer: combinedReducer
})

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;