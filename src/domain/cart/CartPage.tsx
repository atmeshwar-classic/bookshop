
import { CartItem, CartState } from "./types"

type CartProps = CartState & {
  handleRemoveCartItem: (item: CartItem) => void
}



export const CartPage = ({cartItems}:CartProps): JSX.Element => {
  return (
    <div className="cart-main">
      <div className="cart-wrapper">
        <h3 style={{textAlign:"center"}}>Checkout</h3>
      {
        cartItems && cartItems.map((item,index) => {
          return (<div key={index} className="cart-container">
            <div className="cart-img"></div>
            <div>
            <div className="cart-name">{item.name}</div>
            <div className="cart-desc">{item.description}</div>
            </div>
            <div className="cart-price">{`${item.price}$`}</div>
            <div className="remove">X</div>
          </div>
          )
        })
      }
      {
        cartItems.length ? <div className="cart-container total">
        <h3>Total</h3>
      </div> :
      <div className="empty-cart">Oops,cart it empty!</div>
      }

    </div>
    </div>
  )
}