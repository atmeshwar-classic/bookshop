import "./App.css";
import Navbar from "./components/navBar/Navbar";
import AppRoutes from "./routes/AppRoutes";

function App() {
  return (
    <div className="App container">
      <Navbar />
      <AppRoutes />
    </div>
  );
}

export default App;
