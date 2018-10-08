import React, { Component } from "react";
import styled from "styled-components";

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  // width: 100%;
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

class Info extends Component {
  render() {
    return (
      <Container>
        <Header>Alexi Christakis</Header>
      </Container>
    );
  }
}

export default Info;
