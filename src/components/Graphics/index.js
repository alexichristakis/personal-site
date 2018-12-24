import React, { Component } from "react";
import { TransitionMotion, spring } from "react-motion";
import uuidv4 from "uuid/v4";

import Line from "./Line";
import Dot from "./Dot";

const SPRING_CONFIG = { stiffness: 215, damping: 20 };
const MAX_POINTS = 100;
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
    points: []
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
      const { styles: old_styles } = this.state;

      // generate new point
      const new_point = {
        x: clientX - Math.random() * 10,
        y: clientY - Math.random() * 10,
        connections: 0,
        key: uuidv4()
      };

      // update connections
      const styles = this.update({ old_styles, new_point });

      // update points
      const new_points =
        this.state.points.length > MAX_POINTS
          ? [...this.state.points.slice(1), new_point]
          : [...this.state.points, new_point];

      // update state
      this.setState((prevState, props) => ({
        count: prevState.count + 1,
        mouse: { x: clientX, y: clientY },
        points: new_points,
        styles
      }));
    }
  };

  update = ({ old_styles, new_point }) => {
    let p2 = { ...new_point, connections: 0 };

    // filter out old connections
    const removed = this.state.points.length > MAX_POINTS ? this.state.points[0] : { key: null };
    let styles = old_styles.filter(style => {
      if (style.data.point) return style.key !== removed.key;
      else return style.data.p1 !== removed.key && style.data.p2 !== removed.key;
    });

    // let styles = old_styles.filter(
    //   style =>
    //     (style.data.point && style.key != removed.key) ||
    //     (style.data.p1 != removed.key && style.data.p2 != removed.key)
    // );

    let new_styles = [];
    styles.forEach(style => {
      new_styles.push(style);
      if (style.data.point) {
        let { data: p1 } = style;
        if (p1.connections < MAX_CONNECTIONS && p2.connections < MAX_CONNECTIONS) {
          if (this.distance(p1, p2) < DIST - Math.random() * RANDOMNESS) {
            p1.connections++;
            p2.connections++;

            new_styles.push({
              key: uuidv4(),
              data: {
                point: false,
                p1: style.key,
                p2: p2.key,
                from: p1,
                to: p2
              },
              style: {
                opacity: spring(1, SPRING_CONFIG),
                scale: spring(1, SPRING_CONFIG)
              }
            });
          }
        }
      }
    });

    const { key, connections, x, y } = p2;

    new_styles.push({
      key: key,
      data: { point: true, connections: connections, x: x, y: y },
      style: {
        opacity: spring(1, SPRING_CONFIG),
        scale: spring(1, SPRING_CONFIG)
      }
    });

    return new_styles;
  };

  distance = (p1, p2) => {
    return Math.sqrt(Math.pow(p1.x - p2.x, 2) + Math.pow(p1.y - p2.y, 2));
  };

  handleTouchMove = e => {
    e.preventDefault();
    this.handleMouseMove(e.touches[0]);
  };

  willLeave = ({ style }) => {
    return {
      ...style,
      opacity: spring(0, SPRING_CONFIG),
      scale: spring(0, SPRING_CONFIG)
    };
  };

  willEnter = ({ style }) => {
    return {
      ...style,
      opacity: 0.9,
      scale: 0
    };
  };

  render() {
    const { styles } = this.state;

    return (
      <TransitionMotion willLeave={this.willLeave} willEnter={this.willEnter} styles={styles}>
        {items => {
          return (
            <div
              className={"graphics-container"}
              onMouseMove={this.handleMouseMove}
              onTouchMove={this.handleTouchMove}
            >
              {items.map(({ key, data, style }) => {
                return data.point ? (
                  <Dot key={key} point={{ x: data.x, y: data.y }} style={style} />
                ) : (
                  <Line key={key} from={data.from} to={data.to} style={style} />
                );
              })}
            </div>
          );
        }}
      </TransitionMotion>
    );
  }
}

export default Graphics;
