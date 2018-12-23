import React, { Component } from "react";
import { ParallaxProvider } from "react-scroll-parallax";

import Graphics from "./Graphics";
import ColorBackground from "./ColorBackground";
import BouncyIcon from "./BouncyIcon";
import Info from "./Info";
import Gallery from "./Gallery";
import Resume from "./Resume";

import "./app.scss";

class App extends Component {
  state = {
    resume_visible: false
  };

  handleOnClickName = () => {
    this.setState({ resume_visible: true });
  };

  handleOnClickBackground = () => {
    this.setState({ resume_visible: false });
  };

  render() {
    return (
      <ParallaxProvider>
        <div className={"app-container"}>
          <ColorBackground />
          <Resume
            visible={this.state.resume_visible}
            onClickBackground={this.handleOnClickBackground}
          />
          <Info onClickName={this.handleOnClickName} />
          <BouncyIcon />
          <Gallery />
          <Graphics />
        </div>
      </ParallaxProvider>
    );
  }
}

export default App;
