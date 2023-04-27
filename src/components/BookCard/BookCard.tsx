import "./BookCard.css"
import { Book } from "../../domain/books/types";
import { useDispatch } from "react-redux";
import { addBooks } from "../../domain/cart/cartSlice";

/* 
  We would define the structure of the props in the same file as the component.
  Since, this component has the same props as Type Book, we would assign it to it props.
*/
interface BookProps {
  books: Book[];
}



export const BookCard = ({books}: BookProps): JSX.Element => {
const dispatch = useDispatch()

  const handleClick = (book:Book) =>{
     dispatch(addBooks(book))
  }

  return (<>
    {books.map(book => (
      <div className="card" key={book.id}>
        <div>
          <h3 className="img">
            Book Image
            <span onClick={(e) => handleClick( book)}>
              +
            </span>
          </h3>
        </div>
        <div className="container">
          <p>{book.name}</p>
          <p>{book.author}</p>
          <br />
          <p>{book.description}</p>
          <br />
          <p>${book.price}</p>
        </div>
      </div>
    ))}</>
  );
};
