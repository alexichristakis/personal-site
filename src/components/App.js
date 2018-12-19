import React, { Component } from "react";
import { ParallaxProvider } from "react-scroll-parallax";
import styled from "styled-components";

import Graphics from "./Graphics";
import ColorBackground from "./ColorBackground";
import BouncyIcon from "./BouncyIcon";
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
      <ParallaxProvider>
        <Wrapper>
          <ColorBackground />
          <Info />
          <BouncyIcon />
          <Gallery />
          <Graphics />
        </Wrapper>
      </ParallaxProvider>
    );
  }
}

export default App;
