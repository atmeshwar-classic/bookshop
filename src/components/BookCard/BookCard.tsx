import type { Book } from '../../domain/books/types'

/* 
  We would define the structure of the props in the same file as the component.
  Since, this component has the same props as Type Book, we would assign it to it props.
*/
type BookProps = Book;

export const BookCard = (props: BookProps): JSX.Element => {
  return (
    <div>Book Card</div>
  )
}