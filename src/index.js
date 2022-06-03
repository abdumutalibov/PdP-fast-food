import React from "react";
import ReactDom from "react-dom";
import { MainContext } from "./context";
import "./index.css";
import Root from "./root";

ReactDom.render(
  <React.StrictMode>
    <MainContext>
      
      <Root />
    </MainContext>
  </React.StrictMode>,
  document.getElementById("root")
);

//ewdwefwefewfe
// hey hey duz ryashki