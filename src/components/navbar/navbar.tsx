import React from 'react'
import { CartState } from '../../domain/cart/types'

type NavbarProps = CartState & {
  changeRoute: (c:number)=> void
}

const Navbar = ({changeRoute, cartItems}:NavbarProps) => {
  return (
    <section className='navbar'>
        <ul>
          <li onClick={() => changeRoute(0)}>
            Home
          </li>
          <li onClick={() => changeRoute(1)}>
            Cart
            <span className='cart-badge'>{cartItems.length}</span>
            </li>
        </ul>
      </section>
  )
}

export default Navbar;