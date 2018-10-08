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

const Header = styled.div`
  font-size: 16pt;
`;

const Link = styled.div`
  margin-top: 10px;
  transition: all 100ms cubic-bezier(0.21, 0.94, 0.64, 0.99);
  &:hover {
    color: white;
    transform: scale(1.25);
  }
`;

const github_link = "https://github.com/alexichristakis";
const linkedin_link = "https://www.linkedin.com/in/alexi-christakis-b53b9214b/";
const sandbox_link = "https://sandboxatyale.com/";

class Info extends Component {
  render() {
    return (
      <Container>
        <Header>Alexi Christakis</Header>
        <Link onClick={() => window.open(github_link)}>Github</Link>
        <Link onClick={() => window.open(linkedin_link)}>LinkedIn</Link>
        <Link onClick={() => window.open(sandbox_link)}>Sandbox</Link>
      </Container>
    );
  }
}

export default Info;
