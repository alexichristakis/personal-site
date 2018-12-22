import React, { Component } from "react";
import { ParallaxProvider } from "react-scroll-parallax";

import Graphics from "./Graphics";
import ColorBackground from "./ColorBackground";
import BouncyIcon from "./BouncyIcon";
import Info from "./Info";
import Gallery from "./Gallery";

import "./app.scss";

class App extends Component {
  render() {
    return (
      <ParallaxProvider>
        <div className={"app-container"}>
          <ColorBackground />
          <Info />
          <BouncyIcon />
          <Gallery />
          <Graphics />
        </div>
      </ParallaxProvider>
    );
  }
}

export default App;
