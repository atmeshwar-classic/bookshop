import { useDispatch } from 'react-redux';
import type { Book } from '../../domain/books/types'

/* 
  We would define the structure of the props in the same file as the component.
  Since, this component has the same props as Type Book, we would assign it to it props.
*/
type BookProps = Book;

export const BookCard = (book: BookProps): JSX.Element => {

  return (
    <div>
      <div key={book.id} className="book">
        <img alt={book.name} />
        <h3>{book.name}</h3>
        <h3>{book.author}</h3>
        <div className="details">
          <span>{book.description}</span>
          <span className="price">${book.price}</span>
        </div>
        <button>
          Add To Cart
        </button>
      </div>
    </div>
  )
}