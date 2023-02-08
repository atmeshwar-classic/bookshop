import type { Book } from "../../domain/books/types";
import classes from "./../../styles/bookcard.module.css";
import bookpic from "./../../assets/book1.jpg";
/* 
  We would define the structure of the props in the same file as the component.
  Since, this component has the same props as Type Book, we would assign it to it props.
*/
type BookProps = Book;

export const BookCard = ( props: BookProps): JSX.Element => {
  
  return (
    <div className={classes.bookCardContainer}>
      <div className={classes.bookCardHeader}>
        <img src={bookpic}></img>
      </div>
      <div className={classes.bookCardDescription} key={props.id}>
        <h3>{props.name}</h3>
        <h3>{props.author}</h3>
        <h5>{props.description}</h5>
        <h2>{props.price} $</h2>
      </div>
      <div
        className={classes.BookAddicon}
        onClick={() => console.log("clicked")}
      >
        <i className="fa fa-plus" aria-hidden="true"></i>
      </div>
    </div>
  );
};
