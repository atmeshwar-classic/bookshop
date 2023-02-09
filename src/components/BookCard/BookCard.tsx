import { useDispatch } from "react-redux";
import type { AppDispatch } from "../../store/store";
import type { Book } from '../../domain/books/types'
// import "./BookCard.css";

/* 
  We would define the structure of the props in the same file as the component.
  Since, this component has the same props as Type Book, we would assign it to it props.
*/
type BookProps = Book;

export const BookCard = ({name, author, description, price}: BookProps): JSX.Element => {
  const dispatch: AppDispatch = useDispatch();
  return (
    <div className="book-card-wrapper">
      <div className="book-card-image">
        <img alt={name.toLowerCase()} loading="lazy" />
      </div>
      <div className="book-card-about">
        <h3 className="book-card-name">
          {name.toLowerCase()}
        </h3>
        <p className="book-card-author">
          {author.toLowerCase()}
        </p>
        <p className="book-card-desc">
          {description.toLowerCase()}
        </p>
        <p className="book-card-price">
          ₹{price}
        </p>
      </div>
    </div>
  );
}