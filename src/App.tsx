import { Routes } from "react-router-dom";
import "./App.css";
import NavBar from "./components/NavBar/NavBar";
import createRoutes from "./routes/routes";

function App() {
  const routes = createRoutes();
  return (
    <>
      <NavBar />
      <Routes>{routes}</Routes>
    </>
  );
}

export default App;
