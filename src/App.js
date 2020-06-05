import React, { Component } from "react";
import Routes from "./components/Utils/routes";
import Aux from "./components/hoc/Auxiliary";

export class App extends Component {
  render() {
    return (
      <Aux>
        <Routes />
      </Aux>
    );
  }
}

export default App;
