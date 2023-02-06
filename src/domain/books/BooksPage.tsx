import { useSelector } from "react-redux";
import { BookCard } from "../../components/BookCard";
import { booksSelector } from "./booksSlice";
import type { Book } from "./types";

export const BooksPage = (): JSX.Element => {
  const { books, loading } = useSelector(booksSelector);

  return (
    <div>
      <h1>Browse our book collection</h1>
      {loading == "loading" ? (
        "Loading ..."
      ) : (
        <div className="container my-12 mx-auto px-4 md:px-12">
          <div className="flex flex-wrap -mx-1 lg:-mx-4">
            {books.map((book:Book) => (
              <BookCard key={book.id} {...book}/>
            ))}
          </div>
        </div>
      )}
    </div>
  );
};
