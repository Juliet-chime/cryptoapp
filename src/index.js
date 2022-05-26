import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import { BrowserRouter } from "react-router-dom";
import "antd/dist/antd.css";
import store from "./app/store";
import { Provider } from "react-redux";
import {createRoot} from 'react-dom/client';

// ReactDOM.render(
//   <React.StrictMode>
//     <BrowserRouter>
//   <Provider store={store}>
//   <App />
//   </Provider>
//     </BrowserRouter>

//   </React.StrictMode>,
//   document.getElementById('root')
// );

const root = createRoot(document.getElementById("root"));
root.render(
  <BrowserRouter>
    <Provider store={store}>
      <App />
    </Provider>
  </BrowserRouter>
);
