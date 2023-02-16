
import HeadMenu from "../components/headMenu";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { BooksMain } from "../routes/books";
import { CartMain } from "../routes/cart";

function RouteController(): React.ReactElement {

  return <Router>
    <Routes>
      <Route path="/" element={<BooksMain />} />
      <Route path="/cart" element={<CartMain />} />
    </Routes>
  </Router>;
};

export default RouteController;