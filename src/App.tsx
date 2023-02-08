import './App.css'
import { BrowserRouter, Route, Routes } from "react-router-dom";
import NavBar from './components/NavBar';
import { routes } from './routes/routes';

function App() {

  return (
    <div className="App">
      <BrowserRouter>
        <NavBar />
        <div className="content-container">
          <Routes>
            {routes.map(({ path, Component }) => <Route path={path} element={<Component />} />)}
          </Routes>
        </div>
      </BrowserRouter>
    </div>
  )
}

export default App
