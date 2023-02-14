import { Link } from "react-router-dom";

const HeadMenu = () => {
  return (
    <nav className="head-menu">
      <Link to="/" className="head-menu-anchor">
        Books
      </Link>
      <Link to="/cart" className="head-menu-anchor">
        Cart
      </Link>
    </nav>
  );
};

export default HeadMenu;
