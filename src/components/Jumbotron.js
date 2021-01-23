import React from "react";
import { Jumbotron, Container } from "react-bootstrap";
import styled from "styled-components";
import img1 from "../images/1.jpg";

const Styles = styled.div`
  .jumbo {
    background: url(${img1}) no-repeat fixed bottom;
    background-size: cover;
    color: white;
    height: 600px;
    position: relative;
    z-index: -2;
  }

  .overlay {
    background-color: black;
    opacity: 0.7;
    position: absolute;
    z-index: 1;
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
  }
`;

function Jumbo() {
  return (
    <Styles>
      <Jumbotron className="jumbo" fluid>
        <Container style={{ opacity: "1" }}>
          <h1>Title</h1>
          <p>Lorem ipsum dolor sit amet.</p>
        </Container>
        <div className="overlay"></div>
      </Jumbotron>
    </Styles>
  );
}

export default Jumbo;
