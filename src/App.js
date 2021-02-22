import React, { Component } from "react";
import "./App.css";
import Top from "./Top";
import Bottom from "./Bottom";

class App extends Component {
  render() {
    return (
      <div className="App">
        <Top />
        <Bottom />
      </div>
    );
  }
}

export default App;
