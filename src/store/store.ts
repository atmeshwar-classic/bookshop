import { configureStore, combineReducers } from '@reduxjs/toolkit'
import { bookReducer } from '../routes/books/book.reducer';
import { cartReducer } from '../routes/cart/cart.reducer';

const combinedReducer = combineReducers({
  books: bookReducer,
  cart: cartReducer
});

export const store = configureStore({
  reducer: combinedReducer
})

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;