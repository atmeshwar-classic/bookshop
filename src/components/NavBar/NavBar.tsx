import { Link } from "react-router-dom";
import "./styles.css";

function Navbar() {
  return (
    <div className="navbar-container">
      <Link to="/" className="navbar-element">
        Books
      </Link>
      <Link to="/cart" className="navbar-element">
        Cart
      </Link>
    </div>
  );
}

export default Navbar;
