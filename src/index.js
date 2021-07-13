import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import { ThemeProvider } from "@material-ui/styles";
import Theme from "./config/theme.config"

ReactDOM.render(
  
    <ThemeProvider theme={Theme}>
      <App />
    </ThemeProvider>
  ,
  document.getElementById("root")
);
