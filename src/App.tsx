import { useState } from 'react'
import reactLogo from './assets/react.svg'
import './App.css'
import { BooksPage } from './domain/books/BooksPage'
import { CartPage } from './domain/cart/CartPage'
function App() {
  const [value, setValue] = useState(1)
  return (
    <div className={`book-inputs`}>
              <div className="book-cart-switch">
                <div className="book-cart-switchbtn">
                  <div className="book-cart-act-box">
                    <button
                      onClick={()=>setValue(1)}
                      className={`book-switch`}
                    >
                      {}
                      Books
                    </button>
                    <button
                      onClick={()=>setValue(2)}
                      className={`cart-switch`}
                    > Cart
                    </button>
                  </div >
                  
                </div>
                {}
              </div>
              {}
              <div className="container-width">
              {(value == 1) && (
                    <BooksPage />
                )}
                {(value == 2) && (
                    <CartPage />
                )}
                
              </div>
            </div>
  )
}

export default App
