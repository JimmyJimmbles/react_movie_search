import React, { Component } from "react";
import "./App.scss";
import "./styles/_images.scss";
import "./styles/_grid.scss";
import Header from "./Components/Header";

class App extends Component {
  render() {
    return (
      <div className="App">
        <Header />
      </div>
    );
  }
}

export default App;
