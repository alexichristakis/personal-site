import React, { Component } from "react";
import { disableBodyScroll, clearAllBodyScrollLocks } from "body-scroll-lock";
import styled from "styled-components";

import Background from "./Background";
import Info from "./Info";

const Container = styled.div`
  position: absolute;
  width: 100%;
  height: 100%;
`;

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
      <Container>
        <Background />
        <Info />
      </Container>
    );
  }
}

export default App;
