import { useState } from 'react'
import './App.css'
import { CartPage } from './domain/cart/CartPage'
import { BooksPage } from './domain/books/BooksPage'
import Navbar from './components/navbar/navbar'

function App() {
  const [route, setRoute] = useState<number>(0)



  const changeRoute = (x: number): void => {
    setRoute(x)
  }

  return (
    <div className="main">
       <Navbar changeRoute={changeRoute}/>
      <hr></hr>
      {
        route === 1 ? <CartPage  /> : <BooksPage />
      }
    </div>
  )
}

export default App
