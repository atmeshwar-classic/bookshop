import { useEffect, useState } from 'react'
import './App.css'
import { CartPage } from './domain/cart/CartPage'
import { BooksPage } from './domain/books/BooksPage'
import Navbar from './components/navbar/navbar'
import { getBooks, useAppDispatch, useAppSelector } from './domain/books/booksSlice'
import { Book } from './domain/books/types'
import { addToCart,removeFromCart} from './domain/cart/cartSlice'
import { CartItem, CartState } from './domain/cart/types'

function App() {
  const [route, setRoute] = useState<number>(0)
  const dispatch = useAppDispatch()
  const { books,loading } = useAppSelector(state => state.books)
  const { cartItems } = useAppSelector(state => state.cart)

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
  const handleRemoveCartItem = (item:CartItem):void=>{
    dispatch(removeFromCart(item))
  }
  const getCartTotalCurrency = ({cartItems}: CartState):number=>{
    let total :number= 0
    cartItems.forEach((item:CartItem)=> total +=item?.price)
    return total;
  }

  return (
    <div className="main">
       <Navbar changeRoute={changeRoute} cartItems={cartItems}/>
      <hr></hr>
      {
        route === 1 ? <CartPage cartItems={cartItems} getCartTotalCurrency={getCartTotalCurrency}handleRemoveCartItem={handleRemoveCartItem} /> : <BooksPage books={books} loading={loading} handleAddToCart={handleAddToCart} />
      }
    </div>
  )
}

export default App
