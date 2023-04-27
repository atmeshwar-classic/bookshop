import { Route, Routes } from 'react-router-dom'
import { BooksPage } from '../../domain/books/BooksPage'
import { CartPage } from '../../domain/cart/CartPage'

const Router = ():JSX.Element => {

  return (
    <Routes>
        <Route
          path="/books"
          element={<BooksPage />}
        />
        <Route path="/cart" element={<CartPage />} />  
      </Routes>
  )
}

export default Router