import { combineReducers, configureStore } from '@reduxjs/toolkit';
import { booksSliceReducer, getBooks } from '../domain/books/booksSlice';
import { cartSliceReducer } from '../domain/cart/cartSlice';

const combinedReducer = combineReducers({
  books: booksSliceReducer,
  cart: cartSliceReducer
});

export const store = configureStore({
  reducer: combinedReducer
});

store.dispatch(getBooks());

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;