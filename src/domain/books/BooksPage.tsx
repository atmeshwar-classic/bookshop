import { BookCard } from "../../components/BookCard"
import { BooksState } from "./types"




export const BooksPage = ({loading,books}:BooksState): JSX.Element => {
  return (
    <div className="container">
      {loading==="loading" && <h1>Loading</h1>}
      {
        books.map((book):JSX.Element=> 
          <BookCard  book={book} />
        )
      }
    </div>
  )
}