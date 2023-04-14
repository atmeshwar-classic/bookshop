import './BooksPageStyles.css'
import { BookCard } from "../../components/BookCard"
import { useAppDispatch, useAppSelector } from "../../store/store";
import { addToCart } from "../cart/cartSlice";
import { Book } from "./types"


export const BooksPage = (): JSX.Element => {
  const dispatch = useAppDispatch();
  const { books, loading } = useAppSelector((state) => state.books);

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