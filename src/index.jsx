import React from "react";
import ReactDOM from "react-dom";
import App from "./app.jsx";

console.log("render");

ReactDOM.render(
  <App />,
  document.getElementById("root")
);

// Hot Module Replacement (HMR) - Remove this snippet to remove HMR.
// Learn more: https://vitejs.dev/guide/api-hmr.html
if (import.meta.hot) {
  import.meta.hot.accept();
}
