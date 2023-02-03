import { useState } from 'react'
import reactLogo from './assets/react.svg'
import './App.css'
import { BooksPage } from './domain/books/BooksPage'

function App() {

  return (
    <div className="App">
      <div className="card">
        <BooksPage />
      </div>
    </div>
  )
}

export default App
