import React from "react";
import ReactDOM from "react-dom";

import App from "./App";
import { BrowserRouter } from "react-router-dom";
import { DataContext, DataProvider } from "./context/DataContext";
import { ThemeContext, ThemeProvider } from "./context/ThemeContext";

const rootElement = document.getElementById("root");
export { DataContext, ThemeContext };

ReactDOM.render(
  <React.StrictMode>
    <ThemeProvider>
      <BrowserRouter>
        <DataProvider>
          <App />
        </DataProvider>
      </BrowserRouter>
    </ThemeProvider>
  </React.StrictMode>,
  rootElement
);
