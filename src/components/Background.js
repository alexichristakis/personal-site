import React, { Component } from "react";
import { TransitionMotion, spring } from "react-motion";
import styled from "styled-components";
import uuidv4 from "uuid/v4";

import Line from "./Line";

const Dot = styled.div`
  width: 2px;
  height: 2px;
  border-radius: 1px;
  position: absolute;
  background-color: lightblue;
  border: 1px solid lightblue;
`;

const Wrapper = styled.div`
  background-color: #afafafaf;
  position: absolute;
  width: 100%;
  height: 100%;
`;

const SPRING_CONFIG = { stiffness: 60, damping: 15 };
const SAFETY_ZONE = 55;
const MAX_POINTS = 80;
const RANDOMNESS = 75;
const DIST = 150;

class Background extends Component {
  state = {
    screen: {
      width: window.innerWidth,
      height: window.innerHeight
    },
    points: [],
    connections: [],
    now: "t" + 0
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

  isInSafeZone = (x, y) => {
    const { width, height } = this.state.screen;
    return (
      x < width / 2 + SAFETY_ZONE &&
      x > width / 2 - SAFETY_ZONE &&
      y < height / 2 + SAFETY_ZONE &&
      y > height / 2 - SAFETY_ZONE
    );
  };

  handleMouseMove = ({ pageX, pageY }) => {
    const { width, height } = this.state.screen;
    if (!this.isInSafeZone(pageX, pageY)) {
      let points = [{ x: pageX, y: pageY, key: uuidv4() }, ...this.state.points];
      let connections = this.generateConnections(this.state.connections, points);

      this.setState({
        points: points.slice(0, MAX_POINTS),
        connections,
        now: "t" + Date.now()
      });
    }
  };

  handleTouchMove = e => {
    e.preventDefault();
    this.handleMouseMove(e.touches[0]);
  };

  willLeave = styleCell => {
    return {
      ...styleCell.style,
      opacity: spring(0, SPRING_CONFIG),
      scale: spring(2, SPRING_CONFIG)
    };
  };

  distance = (p1, p2) => {
    return Math.sqrt(Math.pow(p1.x - p2.x, 2) + Math.pow(p1.y - p2.y, 2));
  };

  generateConnections = (connections, points) => {
    let p2 = points[0];
    let removed = points.length > MAX_POINTS ? points[MAX_POINTS] : { key: null };

    let updated = [...connections.filter(con => con.p1 !== removed.key && con.p2 !== removed.key)];
    points.slice(0, MAX_POINTS).forEach(p1 => {
      if (p1.x !== p2.x && p1.y !== p2.y) {
        let d = this.distance(p1, p2);
        if (d < DIST - Math.random() * RANDOMNESS) {
          const key = uuidv4();
          updated.push({
            key,
            p1: p1.key,
            p2: p2.key,
            from: { x: p1.x, y: p1.y },
            to: { x: p2.x, y: p2.y }
          });
        }
      }
    });

    return updated;
  };

  render() {
    const { points, connections } = this.state;

    const styles = points.map(({ x, y, key }) => {
      return {
        key,
        style: {
          opacity: spring(1),
          scale: spring(0),
          x: spring(x - 1),
          y: spring(y - 1)
        }
      };
    });

    return (
      <TransitionMotion willLeave={this.willLeave} styles={styles}>
        {circles => {
          return (
            <Wrapper onMouseMove={this.handleMouseMove} onTouchMove={this.handleTouchMove}>
              {connections.map(({ key, from, to }) => (
                <Line key={key} from={from} to={to} />
              ))}
              {circles.map(({ key, style: { opacity, scale, x, y } }) => (
                <Dot
                  key={key}
                  style={{
                    left: x,
                    top: y,
                    opacity: opacity,
                    scale: scale
                  }}
                />
              ))}
              {this.props.children}
            </Wrapper>
          );
        }}
      </TransitionMotion>
    );
  }
}

export default Background;
