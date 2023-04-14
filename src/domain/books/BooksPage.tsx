import './style.css'
import { BookCard } from "../../components/BookCard"
import { useAppDispatch } from "../../store/store";
import { addToCart } from "../cart/cartSlice";
import { Book, BooksState } from "./types"

type BookPageProps = BooksState


export const BooksPage = ({loading,books}:BookPageProps): JSX.Element => {
  const dispatch = useAppDispatch();

  const handleAddToCart = (item: Book): void => {
    dispatch(addToCart(item));
  };

  return (
    <div className="container">
      {loading==="loading" && <h3>Loading</h3>}
      {
       loading==="loaded" && books.map((book):JSX.Element=> 
          <BookCard book={book} handleAddToCart={handleAddToCart} />
        )
      }
    </div>
  )
}