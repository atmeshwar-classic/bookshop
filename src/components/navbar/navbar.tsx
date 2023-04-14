import React from 'react'
import './style.css'
import { CartState } from '../../domain/cart/types'
import { Link } from 'react-router-dom'
type NavbarProps = CartState 

const Navbar = ({cartItems }: NavbarProps) => {
  return (
    <section className='navbar'>
      <ul>
        <li>
          <Link to={'/home'} >Home</Link>
        </li>
        <li>
          <Link to={'/cart'} >Cart</Link>
          <span className='cart-badge'>{cartItems.length}</span>
        </li>
      </ul>
    </section>
  )
}

export default Navbar;