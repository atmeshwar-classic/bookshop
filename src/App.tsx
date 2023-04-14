import { useEffect } from "react";
import "./App.css";
import { getBooks } from "./domain/books/booksSlice";
import { useAppDispatch } from "./store/store";
import Router from "./router/Router";
import Navbar from "./components/Navbar/Navbar";

function App() {
  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(getBooks());
  }, []);

  return (
    <div className='main'>
       <Navbar />
      <Router/>
    </div>
  );
}

export default App;
