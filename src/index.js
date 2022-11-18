import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import { Provider as StoreProvider } from "react-redux";
import store from "./store";
import "./assets/scss/style.scss";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <StoreProvider store={store}>
      <App />
    </StoreProvider>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals