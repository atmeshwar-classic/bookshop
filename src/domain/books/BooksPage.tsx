import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { BookCard } from "../../components/BookCard/BookCard";
import { getBooks, booksSelector } from "./booksSlice";
import { AppDispatch } from "../../store/store";
import classes from "./../../styles/booksPage.module.css";
import { cartSelector} from "../cart/cartSlice";

export const BooksPage = (): JSX.Element => {
  const dispatch: AppDispatch = useDispatch();
  const { books, loading } = useSelector(booksSelector);
  const cart = useSelector(cartSelector);

  useEffect(() => {
    dispatch(getBooks());
  }, []);

  return (
    <div className={classes.bookscontainer}>
      {/* Books Page */}
      {loading == "loading" && (
        <div className={classes.loadingContainer}>
          <div className={classes.loadingText}>
            <p>Loading...</p>
          </div>
        </div>
      )}
      {loading !== "loading" &&
        books.map((book) => (
          <BookCard
            key={book.id}
            id={book.id}
            author={book.author}
            description={book.description}
            name={book.name}
            price={book.price}
          />
        ))}
    </div>
  );
};
