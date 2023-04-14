import { Routes, Route, Navigate } from "react-router-dom";
import Navbar from '../components/Navbar/Navbar'
import { BooksPage } from '../domain/books/BooksPage';
import { CartPage } from '../domain/cart/CartPage';

const Router = () => {
  return (
    <>
    <Navbar />
      <hr></hr>
      <Routes>
        <Route path='/' element={<Navigate to='/home' />} />
        <Route path='/home' element={<BooksPage />} />
        <Route path='/cart' element={<CartPage />} />
        <Route path='*' element={<Navigate to='/home' />} />
      </Routes>
    </>
  )
}

export default Router