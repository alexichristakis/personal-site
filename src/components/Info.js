import React, { Component } from "react";
import { Parallax } from "react-scroll-parallax";
import styled from "styled-components";

import colors from "../lib/colors";

const Container = styled.div`
  display: flex;
  // position: absolute;
  // background-color: red;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  margin-top: 40vh;
  margin-bottom: 40vh;
  z-index: 10;
`;

const Link = styled.span`
  margin: 0.2em 0;

  display: flex;
  flex-direction: row;
  font-size: ${props => (props.header ? "30pt" : "20pt")};
  margin-top: ${props => (props.marginTop ? props.marginTop : "20px")};
  color: ${colors.darkgray};
  padding-left: 75px;
  padding-right: 75px;
  cursor: pointer;
  // background-color: red;
  transition: all 170ms cubic-bezier(0.21, 0.94, 0.64, 0.99);
  &:hover {
    color: ${colors.turquoise};
    transform: scale(1.25);
  }
`;

// const resume_link = "https://drive.google.com/open?id=1TkXsFwqSSTloQX7oSnBewpa6WwgZ5qfq";
const resume_link =
  "https://drive.google.com/uc?authuser=0&id=1TkXsFwqSSTloQX7oSnBewpa6WwgZ5qfq&export=download";
const github_link = "https://github.com/alexichristakis";
const linkedin_link = "https://www.linkedin.com/in/alexi-christakis-b53b9214b/";
const sandbox_link = "https://sandboxatyale.com/";

// const Links = [{url: resume_link, title: "Alexi Christakis"}, {url: }]

// const name = "Alexi Christakis".split("");
// const git = "GitHub".split("");
// const linked = "LinkedIn".split("");
// const sandbox = "Sandbox".split("");

class Info extends Component {
  state = {
    file: "",
    loading: true
  };

  render() {
    return (
      <Container>
        <Parallax offsetYMax={"500%"} offsetYMin={"-500%"}>
          <Link header onClick={() => window.open(resume_link)}>
            Alexi Christakis
          </Link>
        </Parallax>
        <Parallax marginTop={"5px"} offsetYMax={"375%"} offsetYMin={"-375%"}>
          <Link onClick={() => window.open(github_link)}>GitHub</Link>
        </Parallax>
        <Link marginTop={"10px"} onClick={() => window.open(linkedin_link)}>
          LinkedIn
        </Link>
        <Parallax offsetYMax={"375%"} offsetYMin={"-375%"} slowerScrollRate>
          <Link onClick={() => window.open(sandbox_link)}>Sandbox</Link>
        </Parallax>
      </Container>
    );
  }
}

export default Info;
