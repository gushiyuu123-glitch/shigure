import React from "react";
import ReactDOM from "react-dom/client";
import App from "./app/App.jsx";
import AppSp from "./app/AppSp.jsx";
import "./index.css";

const isSP = window.matchMedia("(max-width: 768px)").matches;

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    {isSP ? <AppSp /> : <App />}
  </React.StrictMode>
);
