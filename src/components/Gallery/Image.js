import React, { PureComponent } from "react";
import classNames from "classnames";
import posed from "react-pose";
import ReactGA from "react-ga";

const Frame = posed.div({
  init: {
    applyAtEnd: { display: "none" },
    opacity: 0
  },
  zoom: {
    applyAtStart: { display: "block" },
    opacity: 1
  }
});

const transition = {
  duration: 400,
  ease: [0.08, 0.69, 0.2, 0.99]
};

const Image = posed.img({
  hoverable: true,
  hover: {
    scale: 1.025,
    zIndex: 1
  },
  init: {
    scale: 1,
    position: "static",
    width: "auto",
    height: "auto",
    transition,
    flip: true,
    zIndex: 2
  },
  zoom: {
    scale: 1.025,
    position: "fixed",
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    transition,
    flip: true,
    zIndex: 2
  }
});

class ZoomImage extends PureComponent {
  state = { zoomed: false };

  zoomIn = () => {
    window.addEventListener("scroll", this.zoomOut);
    this.setState({ zoomed: true });

    ReactGA.event({
      category: 'Gallery',
      action: 'zoom on photo'
    });
  };

  zoomOut = () => {
    window.removeEventListener("scroll", this.zoomOut);
    this.setState({ zoomed: false });
  };

  toggleZoom = () => (this.state.zoomed ? this.zoomOut() : this.zoomIn());

  render() {
    const { zoomed } = this.state;
    const { src, ratio, num_columns } = this.props;
    const pose = zoomed ? "zoom" : "init";

    return (
      <div
        className={classNames("image-wrapper", { zoomed })}
        style={{ "--aspect-ratio": ratio, "--num-columns": num_columns }}
        onClick={this.toggleZoom}
      >
        <Frame pose={pose} className="frame" />
        <Image pose={pose} src={src} />
      </div>
    );
  }
}

export default ZoomImage;
