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

const TextContainer = styled.div`
  position: absolute;
  width; fill;
  height: fill;
  align-items: center;
  justify-content: center;
`;

const Header = styled.div``;

const Link = styled.div`
  &:hover {
    color: white;
  }
`;

const github_link = "https://github.com/alexichristakis";
const linkedin_link = "https://www.linkedin.com/in/alexi-christakis-b53b9214b/";

class Info extends Component {
  render() {
    return (
      <Container>
        <Header>Alexi Christakis</Header>
        <Link onClick={() => window.open(github_link)}>Github</Link>
        <Link onClick={() => window.open(linkedin_link)}>LinkedIn</Link>
      </Container>
    );
  }
}

export default Info;
