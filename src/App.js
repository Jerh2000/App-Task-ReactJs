import React ,{Component} from "react";
import logo from "./logo.svg";
import "./App.css";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p className="display-1"> Bienvenido a React </p>
      </header>
    </div>
  );
}

export default App;
