import React, { Component } from "react";
import uuidv4 from "uuid/v4";

import "./Graphics.scss";

const MAX_POINTS = 200;
const MAX_CONNECTIONS = 60;
const RANDOMNESS = 75;
const DIST = 150;
const POINT_DROP = 30;

class Graphics extends Component {
  state = {
    count: 0,
    mouse: { x: 0, y: 0 },
    styles: [],
    points: [],
    connections: []
  };

  handleMouseMove = ({ clientX, clientY }) => {
    if (this.distance({ x: clientX, y: clientY }, this.state.mouse) > POINT_DROP) {
      const { points: old_points, connections: old_connections } = this.state;

      // generate new point
      const new_point = {
        x: clientX - Math.random() * 10,
        y: clientY - Math.random() * 10,
        connections: 0,
        key: uuidv4()
      };

      // update connections
      const { new_connections, new_points } = this.update({
        old_points,
        old_connections,
        new_point
      });

      // update state
      this.setState((prevState, props) => ({
        count: prevState.count + 1,
        mouse: { x: clientX, y: clientY },
        points: new_points,
        connections: new_connections
      }));
    }
  };

  update = ({ old_connections, old_points, new_point }) => {
    let old_point = old_points.length > MAX_POINTS ? old_points[0] : { key: null };

    let new_points =
      old_points.length > MAX_POINTS
        ? [...old_points.slice(1), new_point]
        : [...old_points, new_point];

    let new_connections = old_connections.filter(
      e => e.p1.key !== old_point.key && e.p2.key !== old_point.key
    );

    let p2 = new_points[new_points.length - 1];
    new_points.forEach(p1 => {
      if (p1.connections < MAX_CONNECTIONS && p2.connections < MAX_CONNECTIONS) {
        if (this.distance(p1, p2) < DIST - Math.random() * RANDOMNESS) {
          // update number of connections
          p1.connections++;
          p2.connections++;

          // push that connection
          new_connections.push({
            key: uuidv4(),
            p1: { x: p1.x, y: p1.y, key: p1.key },
            p2: { x: p2.x, y: p2.y, key: p2.key }
          });
        }
      }
    });

    return { new_connections, new_points };
  };

  distance = (p1, p2) => {
    return Math.sqrt(Math.pow(p1.x - p2.x, 2) + Math.pow(p1.y - p2.y, 2));
  };

  handleTouchMove = e => {
    e.preventDefault();
    this.handleMouseMove(e.touches[0]);
  };

  render() {
    const { points, connections } = this.state;
    const { screen } = this.props;

    return (
      <div
        className="graphics-container"
        onMouseMove={this.handleMouseMove}
        onTouchMove={this.handleTouchMove}
      >
        <svg width={screen.width} height={screen.height}>
          {connections.map(({ key, p1, p2 }) => (
            <line className="line" key={key} x1={p1.x} y1={p1.y} x2={p2.x} y2={p2.y} />
          ))}
          {points.map(({ key, x, y }) => (
            <circle className="dot" key={key} cx={x} cy={y} r="2" />
          ))}
        </svg>
      </div>
    );
  }
}

export default Graphics;
