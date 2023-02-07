import './App.css'
import { BrowserRouter} from "react-router-dom";
import NavBar from './components/NavBar';
import Routes from './routes/Routes';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <NavBar />
        <div className="content-container">
          <Routes/>
        </div>
      </BrowserRouter>
    </div>
  )
}

export default App
