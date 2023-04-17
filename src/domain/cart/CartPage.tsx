import { useState } from 'react'
import { CartItem } from "./types"

var cartInfo: CartItem[] = [];

export const CartPage = (): JSX.Element => {
  let totalPrice = cartInfo.reduce((sum, book) => sum + book.price, 0);

  // const [totalPriceValue, setTotalPriceValue] = useState(0)
  // setTotalPriceValue(totalPrice);
  return (
    <div>
      {cartInfo.map((cart, i) => (
        <div id={cart.id} className="book-box">

          <div className="book-inner-data-container">
            <div className='book-inner-box-one'>
              <div className='inner-div'>

                <div className="book-inner-data-heading">
                  <div className="book-heading">

                    <div className='iti-list-menu-container'>
                      <span className='iti-time'><b>Name</b> : {cart.name}</span>
                      <span className='iti-time cart-heading'>$ {cart.price} </span>
                      <span className='iti-time cart-heading'> | </span>
                      <a className="add-item" data-toggle="collapse" href="#" role="button" onClick={() => {
                        removeCart(cart);

                      }}>X</a>
                    </div>
                  </div>
                  <span>
                    <span className='iti-time'><b>Description</b> :  {cart.description}</span>
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>)

      )}
      {
        <div className="book-box">

          <div className="book-inner-data-container">
            <div className='book-inner-box-one'>
              <div className='inner-div'>

                <div className="book-inner-data-heading">
                  <div className="book-heading">

                    <div className='iti-list-menu-container'>
                      <span className='iti-time cart-heading total-cart'>Total</span>
                      <span className='iti-time cart-heading total-price' id="total-price">$ {totalPrice} </span>
                      <span className='iti-time cart-heading'> | </span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      }
    </div>
  )
}
export const cartUpdate = (cart: CartItem) => {
  if (cart && cartInfo.find(x => x.id == cart.id)) {
    let cartDetail = cartInfo.find(x => x.id == cart.id)
    if (cartDetail != undefined) {
      alert('already added')
    }
  } else {
    cartInfo.push(cart)
  }
}

const removeCart = (cart: CartItem) => {
  cartInfo = cartInfo.filter(x => x.id != cart.id);
  document.getElementById(cart.id)?.remove()
  let totalPrice = document.getElementById('total-price')
  if (totalPrice != null) {
    totalPrice.innerText = '$ ' + cartInfo.reduce((sum, book) => sum + book.price, 0).toString();
  }
  // if (totalPrice != null)
  // totalPrice. = cartInfo.reduce((sum, book) => sum + book.price, 0);
}