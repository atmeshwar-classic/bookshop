import { Link } from "react-router-dom";
import "./Nav.css"; 

const Nav = () => {
  return (
    <div className="nav">
      <Link to="/" className="nav-link">
        books
      </Link>
      <Link to="/cart" className="nav-link">
        cart
      </Link>
    </div>
  );
};

export default Nav;
