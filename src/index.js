import React from "react";
import ReactDOM from "react-dom";
import Control from "./Control";

ReactDOM.render(
  <React.StrictMode>
    <Control focusTime={0.1} restTime={5} />
  </React.StrictMode>,
  document.getElementById("root")
);
