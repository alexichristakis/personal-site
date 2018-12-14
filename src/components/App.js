import React, { Component } from "react";
import styled from "styled-components";

import Graphics from "./Graphics";
import ColorBackground from "./ColorBackground";
import Info from "./Info";
import Gallery from "./Gallery";

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

class App extends Component {
  render() {
    return (
      <Wrapper>
        <ColorBackground />
        <Info />
        <Gallery />
        <Graphics />
      </Wrapper>
    );
  }
}

export default App;
