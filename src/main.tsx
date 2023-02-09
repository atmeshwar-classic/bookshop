import React from "react";
import ReactDOM from "react-dom/client";
import { Provider } from "react-redux";
import { BrowserRouter } from "react-router-dom";
import App from "./App";
import "./index.css";
import { store } from "./store/store";
import { ToastContainer} from "react-toastify";

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <BrowserRouter>
    <React.StrictMode>
      <Provider store={store}>
      <ToastContainer closeOnClick theme="dark" pauseOnFocusLoss={false} autoClose={2000}/>
        <App />
      </Provider>
    </React.StrictMode>
  </BrowserRouter>
);
