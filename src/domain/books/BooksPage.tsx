import { booksSelector } from "./booksSlice";
import { Book } from "./types";
import { BookCard } from "../../components/BookCard";
import { ToastContainer} from 'react-toastify'
import { useAppSelector } from "../../store.hooks";

const BooksPage: React.FunctionComponent = () => {
  const { books: books, loading } = useAppSelector(booksSelector)
  return (
    <div className="home-container">
      <ToastContainer/>
      {loading === "loaded" ? (
        <>
          <h2>New Books Arrivals</h2>
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