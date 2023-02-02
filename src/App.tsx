import "./App.css";
import Navbar from "./components/Navbar/Navbar";
import BooksPage from "./domain/books/BooksPage";
import { CartPage } from "./domain/cart/CartPage";
import { useSelector } from "react-redux";
import { RootState } from "./store/store";

function App() {
  const CartActive = useSelector(
    (state: RootState) => state.appPage.isCartPage
  );

  return (
    <div className="App">
      <Navbar />
      {CartActive ? <CartPage /> : <BooksPage />}
    </div>
  );
}

export default App;
