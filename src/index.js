import React from "react";
import ReactDOM from "react-dom";
import { InputForm } from "./components";

import "./styles.css";

function App() {
  return (
    <div className="App">
      <h2>Sign in Form </h2>
      <InputForm />
    </div>
  );
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
