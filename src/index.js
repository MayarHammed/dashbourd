import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import { BrowserRouter  as Browser } from "react-router-dom";
import UserProvider from "./Context/Context";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <Browser>
    <UserProvider>
      <App />
    </UserProvider>
  </Browser>
);
