import { Link } from "react-router-dom";

const NavBar = (): JSX.Element => {
    return (
        <nav className="nav-bar">
            <Link to="/">
                <h2>Books</h2>
            </Link>
            <Link to="/cart">
                <h2>Cart</h2>
            </Link>
        </nav>
    );
};

export default NavBar;