import React, { Component } from "react";

class Line extends Component {
  render() {
    let { from, to, style } = this.props;

    if (to.x < from.x) {
      from = this.props.to;
      to = this.props.from;
    }

    const len = Math.sqrt(Math.pow(from.x - to.x, 2) + Math.pow(from.y - to.y, 2));
    const angle = Math.atan((to.y - from.y) / (to.x - from.x));

    const transform = `translate(${from.x - 0.5 * len * (1 - Math.cos(angle))}px, ${from.y +
      0.5 * len * Math.sin(angle)}px) rotate(${angle}rad) scale(${style.scale})`;

    const computed_style = {
      position: "absolute",
      transform: transform,
      WebkitTransform: transform,
      width: `${len}px`,
      height: `${0}px`,
      borderBottom: "0.5px solid gray",
      ...style
    };

    return <div style={computed_style} />;
  }
}

export default Line;
