import React, { useEffect } from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter, HashRouter } from "react-router-dom";
import App from "./App";

import { FetchApiInterface } from "./Data/Data";
import "./Main.scss";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <HashRouter>
    <App FetchApiInterface={FetchApiInterface} />
  </HashRouter>
);
