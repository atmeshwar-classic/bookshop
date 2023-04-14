import './NavbarStyles.css'
import { Link } from 'react-router-dom'
import { useAppSelector } from '../../store/store'


const Navbar = () => {
  const { cartItems } = useAppSelector((state) => state.cart);

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