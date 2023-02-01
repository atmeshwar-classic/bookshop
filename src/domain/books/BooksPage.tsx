import { useSelector } from "react-redux";
import { booksSelector } from "./booksSlice";
import { Book } from "./types";
import { BookCard } from "../../components/BookCard";

const BooksPage: React.FunctionComponent = () => {
  const { books: books, loading } = useSelector(booksSelector);

  return (
    <div className="home-container">
      {loading === "loaded" ? (
        <>
          <h2>New Arrivals</h2>
          <div className="books">
            {books &&
              books?.map((book: Book) => (
                <BookCard {...book} />
              )
              )}
          </div>
        </>
      ) : loading === "loading" ? (
        <p>Loading...</p>
      ) : (
        <p>Unexpected error occured...</p>
      )}
    </div>
  );
}

export default BooksPage