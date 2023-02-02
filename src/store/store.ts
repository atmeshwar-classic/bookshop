import { configureStore, combineReducers } from '@reduxjs/toolkit'
import { booksSliceReducer } from '../domain/books/booksSlice'
import { appSliceReducer } from '../domain/app/appSlice'

const combinedReducer = combineReducers({
  books: booksSliceReducer,
  appPage :appSliceReducer
});

export const store = configureStore({
  reducer: combinedReducer
})

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;