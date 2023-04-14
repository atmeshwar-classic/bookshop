import { BookCard } from "../../components/BookCard"
import { Book, BooksState } from "./types"

type BookPageProps = BooksState & {
  handleAddToCart : (book:Book)=>void
}


export const BooksPage = ({loading,books,handleAddToCart}:BookPageProps): JSX.Element => {
  return (
    <div className="container">
      {loading==="loading" && <h3>Loading</h3>}
      {
        books.map((book):JSX.Element=> 
          <BookCard  book={book} handleAddToCart={handleAddToCart} />
        )
      }
    </div>
  )
}