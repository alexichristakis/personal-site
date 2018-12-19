import React, { Component } from "react";
import { TransitionMotion, spring } from "react-motion";
import { fadeIn } from "react-animations";
import styled, { keyframes } from "styled-components";
import uuidv4 from "uuid/v4";

import Line from "./Line";

import colors from "../lib/colors";

const Dot = styled.div`
  width: 2px;
  height: 2px;
  z-index: 5;
  border-radius: 1px;
  position: absolute;
  background-color: ${colors.turquoise};
  border: 1px solid ${colors.turquoise};
  // animation: 0.5s ${keyframes`${fadeIn}`};
`;

// background-color: #dcdcdc;

const Wrapper = styled.div`
  position: sticky;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  width: 100vw;
  height: 100vh;
`;

// const SPRING_CONFIG = { stiffness: 60, damping: 15 };
const SPRING_CONFIG = { stiffness: 215, damping: 20 };
const MAX_POINTS = 200;
const MAX_CONNECTIONS = 60;
const RANDOMNESS = 75;
const DIST = 150;
const POINT_DROP = 30;

class Graphics extends Component {
  state = {
    count: 0,
    mouse: { x: 0, y: 0 },
    screen: {
      width: window.innerWidth,
      height: window.innerHeight
    },
    styles: [],
    points: [],
    connections: []
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

  handleMouseMove = ({ clientX, clientY }) => {
    if (this.distance({ x: clientX, y: clientY }, this.state.mouse) > POINT_DROP) {
      // old rendering
      const { points: old_points, connections: old_connections } = this.state;

      // new points and connections
      const [points, connections] = this.generateConnections(old_connections, [
        // new point
        {
          x: clientX - Math.random() * 10,
          y: clientY - Math.random() * 10,
          connections: 0,
          key: uuidv4()
        },
        ...old_points
      ]);

      let styles = [
        ...points.map(({ x, y, key }) => {
          return {
            key,
            data: {
              point: true,
              x: x - 1,
              y: y - 1
            },
            style: {
              opacity: spring(1, SPRING_CONFIG),
              scale: spring(1, SPRING_CONFIG)
            }
          };
        }),
        ...connections.map(({ to, from, key }) => {
          return {
            key,
            data: {
              line: true,
              from,
              to
            },
            style: {
              opacity: spring(1, SPRING_CONFIG),
              scale: spring(1, SPRING_CONFIG)
            }
          };
        })
      ];

      this.setState((prevState, props) => ({
        count: prevState.count + 1,
        styles,
        points,
        connections,
        mouse: { x: clientX, y: clientY }
      }));
    }
  };

  distance = (p1, p2) => {
    return Math.sqrt(Math.pow(p1.x - p2.x, 2) + Math.pow(p1.y - p2.y, 2));
  };

  generateConnections = (connections, points) => {
    let p2 = points[0];
    let removed = points.length > MAX_POINTS ? points[MAX_POINTS] : { key: null };

    let updated_points = points.slice(0, MAX_POINTS);
    let updated_connections = connections.filter(
      con => con.p1 !== removed.key && con.p2 !== removed.key
    );

    updated_points.forEach((p1, i) => {
      if (p1.x !== p2.x && p1.y !== p2.y) {
        if (p1.connections < MAX_CONNECTIONS && p2.connections < MAX_CONNECTIONS) {
          let d = this.distance(p1, p2);
          if (d < DIST - Math.random() * RANDOMNESS) {
            // update number of connections
            updated_points[0].connections++;
            updated_points[i].connections++;

            // push that connection
            const key = uuidv4();
            updated_connections.push({
              key,
              p1: p1.key,
              p2: p2.key,
              from: { x: p1.x, y: p1.y },
              to: { x: p2.x, y: p2.y }
            });
          }
        }
      }
    });

    return [updated_points, updated_connections];
  };

  handleTouchMove = e => {
    e.preventDefault();
    this.handleMouseMove(e.touches[0]);
  };

  willLeave = style => {
    return {
      ...style.style,
      opacity: spring(0, SPRING_CONFIG),
      scale: spring(0, SPRING_CONFIG)
    };
  };

  willEnter = style => {
    return {
      ...style.style,
      // opacity: 0.5,
      opacity: 0.9,
      scale: 0
    };
  };

  render() {
    const { points, connections, styles } = this.state;

    // return (
    //   <Wrapper onMouseMove={this.handleMouseMove} onTouchMove={this.handleTouchMove}>
    //     {connections.map(({ key, from, to }) => (
    //       <Line key={key} from={from} to={to} />
    //     ))}
    //     {points.map(({ key, x, y }) => (
    //       <Dot key={key} style={{ left: x, top: y }} />
    //     ))}
    //   </Wrapper>
    // );

    return (
      <TransitionMotion willLeave={this.willLeave} willEnter={this.willEnter} styles={styles}>
        {items => {
          return (
            <Wrapper onMouseMove={this.handleMouseMove} onTouchMove={this.handleTouchMove}>
              {items.map(({ key, data, style }) => {
                return data.line ? (
                  <Line key={key} from={data.from} to={data.to} color={data.color} style={style} />
                ) : (
                  <Dot
                    key={key}
                    style={{
                      ...style,
                      transform: `scale(${style.scale})`,
                      WebkitTransform: `scale(${style.scale})`,
                      left: data.x,
                      top: data.y
                    }}
                  />
                );
              })}
            </Wrapper>
          );
        }}
      </TransitionMotion>
    );
  }
}

export default Graphics;
