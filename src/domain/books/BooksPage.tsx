import { useSelector } from "react-redux";
import { BookCard } from "../../components/BookCard";
import { booksSelector } from "./booksSlice";
import type { Book } from "./types";
import "./BooksPage.css";

export const BooksPage = (): JSX.Element => {
  const { books, loading } = useSelector(booksSelector);

  return (
    <div className="book-page">
      {loading == "loading" ? (
        <div className="book-loading">Loading ...</div>
      ) : (
        <div className="book-page-container">
          <div className="book-page-container-flex">
            {books.map((book:Book) => (
              <BookCard key={book.id} {...book}/>
            ))}
          </div>
        </div>
      )}
    </div>
  );
};
