import { configureStore, combineReducers } from '@reduxjs/toolkit'
import { booksSliceReducer } from '../domain/books/booksSlice'
import { cartSliceReducer } from '../domain/cart/cartSlice';
import { TypedUseSelectorHook, useDispatch } from 'react-redux';
import { useSelector } from 'react-redux';

const combinedReducer = combineReducers({
  books: booksSliceReducer,
  cart:cartSliceReducer
});

export const store = configureStore({
  reducer: combinedReducer
})

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export const useAppDispatch : ()=> AppDispatch   = useDispatch;
export const useAppSelector : TypedUseSelectorHook<RootState>   = useSelector