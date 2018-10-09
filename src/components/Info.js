import React, { Component } from "react";
import styled from "styled-components";

const Container = styled.div`
  display: flex;
  position: absolute;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 100%;
`;

const Link = styled.div`
  font-size: ${props => (props.header ? "30pt" : "20pt")};
  margin-top: 10px;
  transition: all 150ms cubic-bezier(0.21, 0.94, 0.64, 0.99);
  &:hover {
    color: white;
    transform: scale(1.25);
  }
`;

// const resume_link = "https://drive.google.com/open?id=1TkXsFwqSSTloQX7oSnBewpa6WwgZ5qfq";
const resume_link =
  "https://drive.google.com/uc?authuser=0&id=1TkXsFwqSSTloQX7oSnBewpa6WwgZ5qfq&export=download";
const github_link = "https://github.com/alexichristakis";
const linkedin_link = "https://www.linkedin.com/in/alexi-christakis-b53b9214b/";
const sandbox_link = "https://sandboxatyale.com/";

class Info extends Component {
  render() {
    return (
      <Container>
        <Link header onClick={() => window.open(resume_link)}>
          Alexi Christakis
        </Link>
        <Link onClick={() => window.open(github_link)}>GitHub</Link>
        <Link onClick={() => window.open(linkedin_link)}>LinkedIn</Link>
        <Link onClick={() => window.open(sandbox_link)}>Sandbox</Link>
      </Container>
    );
  }
}

export default Info;
