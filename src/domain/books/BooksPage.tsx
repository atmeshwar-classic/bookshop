import { books } from "./books"
import { Book } from "./types"
import { cartUpdate } from "../cart/CartPage"

const addBook = (book: Book) => {
  cartUpdate({ id: book.id, name: book.name, description: book.description, price: book.price})
}
export const BooksPage = (): JSX.Element => {
  return (
    <div>
      {books.map((book, i) => (<div id={book.id} className="book-box">

        <div className="book-inner-data-container">
          <div className='book-inner-box-one'>
            <div className='inner-div'>

              <div className="book-inner-data-heading">
                <div className="book-heading">
                  <p>{book.name}</p>

                  <div className='iti-list-menu-container'>
                    <a className="add-item" data-toggle="collapse" href="#" role="button" onClick={() => {
                      addBook(book)
                    }}>+</a>
                  </div>
                </div>
                <span>
                  <span className='iti-time'><b>Title</b> : {book.name}</span><br />
                  <span className='iti-time'><b>Author</b> : {book.author}</span><br />
                  <span className='iti-time'><b>Description</b> :  {book.description}</span><br />
                  <span className='iti-time'><b>Price</b>: $ {book.price}</span>

                </span>
              </div>
            </div>
          </div>
        </div>
      </div>)

      )}
    </div>
  )
}