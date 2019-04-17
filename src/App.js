import React, { Component } from "react";
import "./App.css";
import HoldEm from "./holdem/holdem";
import HoldEmRefactored from "./holdEmRefactor/holdEmRefactor";

class App extends Component {
  render() {
    return (
      <div className="App">
        <HoldEmRefactored />
      </div>
    );
  }
}

export default App;
