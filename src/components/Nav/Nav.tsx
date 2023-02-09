import { Link } from "react-router-dom";
import "./Nav.css"; 

const Nav = () => {
  return (
    <nav className="navbar">
      <Link to="/" className="navbar-link">
        books
      </Link>
      <Link to="/cart" className="navbar-link">
        cart
      </Link>
    </nav>
  );
};

export default Nav;
