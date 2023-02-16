import { Link } from "react-router-dom";
import "./header.styles.css";

const Header = () => {
  return (<header className="head-menu">
    <nav>
      <Link to="/" className="head-menu-anchor">
        Books
      </Link>
      <Link to="/cart" className="head-menu-anchor">
        Cart
      </Link>
    </nav>
  </header>
  );
};

export default Header;
