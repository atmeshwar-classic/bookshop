import type { Book } from "../../domain/books/types";
import { GrAdd } from "react-icons/gr";
type BookProps = Book;

export const BookCard = (props: BookProps): JSX.Element => {
  const { name, author, description, price,onClickPluse } = props;
  return (
    <div className="book_card_main">
      <div className="book_card_sub">
        <h5>Book Image</h5>
        <button onClick={()=>onClickPluse(props)}><GrAdd /></button>
      </div>
      <div className="book_card_sub_data">
        <p>{name}</p>
        <p>{author}</p>
        <p>{description}</p>
        <p>$ {price}</p>
      </div>
    </div>
  );
};
