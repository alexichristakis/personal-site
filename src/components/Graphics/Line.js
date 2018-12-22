import React from "react";

const Line = props => {
  let { from, to, style } = props;
  if (to.x < from.x) {
    from = props.to;
    to = props.from;
  }

  const len = Math.sqrt(Math.pow(from.x - to.x, 2) + Math.pow(from.y - to.y, 2));
  const angle = Math.atan((to.y - from.y) / (to.x - from.x));

  const transform = `translate(${from.x - 0.5 * len * (1 - Math.cos(angle))}px, ${from.y +
    0.5 * len * Math.sin(angle)}px) rotate(${angle}rad) scale(${style.scale})`;

  const computed_style = {
    transform: transform,
    WebkitTransform: transform,
    width: `${len}px`,
    ...style
  };

  return <div className={"line"} style={computed_style} />;
};

export default Line;
