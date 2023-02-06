import { useState } from 'react'
import reactLogo from './assets/react.svg'
import './App.css'
import { BooksPage } from './domain/books/BooksPage'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import { CartPage } from './domain/cart/CartPage'
import Navbar from './components/Navbar/Navbar'

function App() {

  return (
    <div className="App">
      <div className="card">
        <BrowserRouter>
          <Navbar />
          <Routes>
            <Route path='/' element={<BooksPage />} />
            <Route path='/cart' element={<CartPage />} />
            <Route />
          </Routes>
        </BrowserRouter>
      </div>
    </div>
  )
}

export default App
