import { useEffect, useState } from 'react'
import './App.css'
import { CartPage } from './domain/cart/CartPage'
import { BooksPage } from './domain/books/BooksPage'
import Navbar from './components/navbar/navbar'
import { getBooks, useAppDispatch, useAppSelector } from './domain/books/booksSlice'
import { Book } from './domain/books/types'
import { addToCart } from './domain/cart/cartSlice'

function App() {
  const [route, setRoute] = useState<number>(0)
  const dispatch = useAppDispatch()
  const { books,loading } = useAppSelector(state => state.books)

useEffect(() => {
  dispatch(getBooks())
}, [])

  const changeRoute = (x: number): void => {
    setRoute(x)
  }
  const handleAddToCart = (item:Book): void=>{
    console.log(item)
    dispatch(addToCart(item))
  }

  return (
    <div className="main">
       <Navbar changeRoute={changeRoute}/>
      <hr></hr>
      {
        route === 1 ? <CartPage  /> : <BooksPage books={books} loading={loading} handleAddToCart={handleAddToCart} />
      }
    </div>
  )
}

export default App
