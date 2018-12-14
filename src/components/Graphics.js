import React, { Component } from "react";
import { TransitionMotion, spring } from "react-motion";
import styled from "styled-components";
import uuidv4 from "uuid/v4";

import Line from "./Line";

const Dot = styled.div`
  width: 2px;
  height: 2px;
  z-index: 2;
  border-radius: 1px;
  position: absolute;
  background-color: #afeeff;
  border: 1px solid #afeeff;
`;

// background-color: #dcdcdc;

const Wrapper = styled.div`
  // background-color: #efefef;
  // background-color: rgba(50, 50, 50, 1);
  position: sticky;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  width: 100vw;
  height: 100vh;
  // z-index: -100;
`;

// const SPRING_CONFIG = { stiffness: 60, damping: 15 };
const SPRING_CONFIG = { stiffness: 215, damping: 20 };
const MAX_POINTS = 150;
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
      const [points, connections] = this.generateConnections(this.state.connections, [
        {
          x: clientX - Math.random() * 10,
          y: clientY - Math.random() * 10,
          connections: 0,
          key: uuidv4()
        },
        ...this.state.points
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

  render() {
    const { styles } = this.state;

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
