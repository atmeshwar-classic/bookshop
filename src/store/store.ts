import { configureStore, combineReducers } from '@reduxjs/toolkit'
import { booksSliceReducer } from '../domain/books/booksSlice'
import { cartSliceReducer } from '../domain/cart/cartSlice';

const combinedReducer = combineReducers({
  books: booksSliceReducer,
  bookCart: cartSliceReducer
});

export const store = configureStore({
  reducer: combinedReducer
})

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;