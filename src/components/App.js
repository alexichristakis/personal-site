import React, { Component } from "react";
import { disableBodyScroll, clearAllBodyScrollLocks } from "body-scroll-lock";

import Background from "./Background";
import Info from "./Info";

class App extends Component {
  componentDidMount() {
    this.root = document.querySelector("root");
    this.body = document.querySelector("body");

    disableBodyScroll(this.root);
    disableBodyScroll(this.body);
  }

  componentWillUnmount() {
    clearAllBodyScrollLocks();
  }

  render() {
    return (
      <Background>
        <Info />
      </Background>
    );
  }
}

export default App;
