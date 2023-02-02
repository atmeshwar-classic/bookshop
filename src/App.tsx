import "./App.css";
import Navbar from "./components/Navbar/Navbar";
import BooksPage from "./domain/books/BooksPage";

function App() {
  return (
    <div className="App">
      <Navbar />
      <BooksPage />
    </div>
  );
}

export default App;
