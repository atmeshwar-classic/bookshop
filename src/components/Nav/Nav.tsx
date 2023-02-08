import { Link } from "react-router-dom";
import "./Nav.css"; 

const Nav = () => {
  return (
    <div className="nav">
      <Link to="/" className="nav-link">
        Books
      </Link>
      <Link to="/cart" className="nav-link">
        Cart
      </Link>
    </div>
  );
};

export default Nav;
