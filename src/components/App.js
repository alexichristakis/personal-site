import React, { Component } from "react";
import { ParallaxProvider } from "react-scroll-parallax";

import Graphics from "./Graphics";
import SideBar from "./SideBar";
import ColorBackground from "./ColorBackground";
import BouncyIcon from "./BouncyIcon";
import Info from "./Info";
import Gallery from "./Gallery";
import Resume from "./Resume";

import "./App.scss";

class App extends Component {
  state = {
    resume_visible: false,
    screen: {
      width: window.innerWidth,
      height: window.innerHeight
    }
  };

  componentDidMount() {
    window.addEventListener("resize", this.onResize);
    this.onResize();
  }

  onResize = () => {
    this.setState({
      screen: {
        width: window.innerWidth,
        height: window.innerHeight
      }
    });
  };

  handleOnClickName = () => {
    this.setState({ resume_visible: true });
  };

  handleOnClickBackground = () => {
    this.setState({ resume_visible: false });
  };

  render() {
    const { resume_visible, screen } = this.state;
    return (
      <ParallaxProvider>
        <div className="app-container">
          {/* background */}
          <ColorBackground />
          <Graphics screen={screen} />

          <SideBar />
          <Resume visible={resume_visible} onClickBackground={this.handleOnClickBackground} />

          {/* content */}
          <div className="content-container">
            <Info onClickName={this.handleOnClickName} />
            <BouncyIcon />
            {/*<About />
                        <Photos />
                        <Design />
                        <Code />*/}
            <Gallery />
          </div>
        </div>
      </ParallaxProvider>
    );
  }
}

export default App;
