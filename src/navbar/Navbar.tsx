import "./Navbar.css"
import { Link } from 'react-router-dom'

const NavBar = ():JSX.Element => {
  return (
    <header className="header">
        <nav>
          <Link to="/books">
            <button  className="btn">Books</button>
          </Link>
          <Link to="/cart">
            <button className="btn">Cart</button>  
          </Link>
        </nav>
      </header>
  )
}

export default NavBar