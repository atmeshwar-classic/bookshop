import type { Book } from '../../domain/books/types'

/* 
  We would define the structure of the props in the same file as the component.
  Since, this component has the same props as Type Book, we would assign it to it props.
*/
type BookProps = Book;

export const BookCard = (props: BookProps): JSX.Element => {
  const {id, name, author, description, price} = props;
  return (
    <div className='book-card' key={id}>
      <div>{name}</div>
      <div>{author}</div>
      <div>{description}</div>
      <div>{price}</div>
    </div>
  )
}