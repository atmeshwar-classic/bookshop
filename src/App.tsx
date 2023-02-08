import "./App.css";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Navbar from "./components/Navbar/Navbar";
import { routes } from "./routes/routes";

function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        {routes.map(({ path, Component }) => (
          <Route path={path} element={<Component />} />
        ))}
      </Routes>
    </Router>
  );
}

export default App;
