import type { Book } from '../../domain/books/types'

/* 
  We would define the structure of the props in the same file as the component.
  Since, this component has the same props as Type Book, we would assign it to it props.
*/
type BookProps = {book: Book};

export const BookCard = ({book}: BookProps): JSX.Element => {
  const { id, name, author, description, price } = book
  return (
    <div className='book-container' key={id}>
      <article className='image'></article>
      <div className='details'>
        <div className='title'>{name}</div>
        <div className='author'>{author}</div>
        <div className='desc'>{description}</div>
        <div className='price'>{`${price}$`}</div>
        <div className='action-btns'>
          <button >Add to cart</button>
          <button disabled={true}>Wishlist</button>
        </div>
      </div>
    </div>
  )
}