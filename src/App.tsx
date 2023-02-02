import { useState } from 'react'
import reactLogo from './assets/react.svg'
import './App.css'
import { BrowserRouter, Route, Routes } from "react-router-dom";
import NavBar from './components/NavBar';
import CartPage from './domain/cart/CartPage';
import BooksPage from './domain/books/BooksPage';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <NavBar />
        <div className="content-container">
          <Routes>
            <Route path="/cart" element={<CartPage />} />
            <Route path="/" element={<BooksPage />} />
          </Routes>
        </div>
      </BrowserRouter>
    </div>
  )
}

export default App
