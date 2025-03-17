import React from "react";
import ReactDOM from "react-dom/client";

import App from "./App";

import "./styles/main.scss";

console.log("index.jsx is running");

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
