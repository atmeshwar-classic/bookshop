import { BookCard } from "../../components/BookCard";
import { books } from "./books";

export const BooksPage = (): JSX.Element => {
  return (
    <div className="book-page">
      {books.map((book) => {
        const { id, name, author, description, price } = book;
        console.log(name)
        return (
            <BookCard
              id={id}
              name={name}
              author={author}
              description={description}
              price={price}
            />
        );
      })}
    </div>
  );
};
