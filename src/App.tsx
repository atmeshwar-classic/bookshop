import { useEffect } from "react";
import { Routes, Route, Navigate } from "react-router-dom";
import "./App.css";
import Navbar from "./components/navbar/navbar";
import { BooksPage } from "./domain/books/BooksPage";
import { CartPage } from "./domain/cart/CartPage";
import {
  getBooks
} from "./domain/books/booksSlice";
import { useAppDispatch, useAppSelector } from "./store/store";

function App() {
  const dispatch = useAppDispatch();
  const { cartItems } = useAppSelector((state) => state.cart);
  const { books, loading } = useAppSelector((state) => state.books);

  useEffect(() => {
    dispatch(getBooks());
  }, []);


  return (
    <div className='main'>
      <Navbar cartItems={cartItems} />
      <hr></hr>
      <Routes>
        <Route path='/' element={<Navigate to='/home' />} />
        <Route
          path='/home'
          element={
            <BooksPage
              books={books}
              loading={loading}
            />
          }
        />
        <Route
          path='/cart'
          element={
            <CartPage
              cartItems={cartItems}
            />
          }
        />
        <Route path='*' element={<Navigate to='/home' />} />
      </Routes>
    </div>
  );
}

export default App;
