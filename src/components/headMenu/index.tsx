import { Link } from "react-router-dom";
import "./headmenu.styles.css";

const HeadMenu = () => {
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

export default HeadMenu;
