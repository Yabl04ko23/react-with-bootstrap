import React from "react";
import Slider from "../components/Slider";
import { Container, Row, Col, Card } from "react-bootstrap";
import img1 from "../images/1.jpg";
import img2 from "../images/2.jpg";
import img3 from "../images/3.jpg";

function Home() {
  return (
    <>
      <h2>Home</h2>
      <Slider />
      <Container style={{ paddingTop: "2rem", paddingBottom: "2rem" }}>
        <Row>
          <Col>
            <Card>
              <Card.Img variant="top" src={img1} style={{ height: "200px" }} />
              <Card.Body>
                <Card.Title>Title</Card.Title>
                <Card.Text>Text</Card.Text>
              </Card.Body>
            </Card>
          </Col>
          <Col>
            <Card>
              <Card.Img variant="top" src={img2} style={{ height: "200px" }} />
              <Card.Body>
                <Card.Title>Title</Card.Title>
                <Card.Text>Text</Card.Text>
              </Card.Body>
            </Card>
          </Col>
          <Col>
            <Card>
              <Card.Img variant="top" src={img3} style={{ height: "200px" }} />
              <Card.Body>
                <Card.Title>Title</Card.Title>
                <Card.Text>Text</Card.Text>
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </Container>
      <Container>
        <Row>
          <Col md="5">
            <img src={img1} height="200" alt="1" />
          </Col>
          <Col md="5">
            <h2>Lorem</h2>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin at lectus at neque tincidunt porta.
              Phasellus eget erat ac justo lacinia posuere eget non velit. Nullam turpis sapien, dapibus interdum
              consectetur et, pretium id magna. Praesent ipsum nisl, gravida ut iaculis id, dictum ut ante. Donec vel
              imperdiet purus.
            </p>
          </Col>
        </Row>
        <Row>
          <Col md="5">
            <img src={img2} height="200" alt="1" />
          </Col>
          <Col md="5">
            <h2>Lorem</h2>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin at lectus at neque tincidunt porta.
              Phasellus eget erat ac justo lacinia posuere eget non velit. Nullam turpis sapien, dapibus interdum
              consectetur et, pretium id magna. Praesent ipsum nisl, gravida ut iaculis id, dictum ut ante. Donec vel
              imperdiet purus.
            </p>
          </Col>
        </Row>
        <Row>
          <Col md="5">
            <img src={img3} height="200" alt="1" />
          </Col>
          <Col md="5">
            <h2>Lorem</h2>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin at lectus at neque tincidunt porta.
              Phasellus eget erat ac justo lacinia posuere eget non velit. Nullam turpis sapien, dapibus interdum
              consectetur et, pretium id magna. Praesent ipsum nisl, gravida ut iaculis id, dictum ut ante. Donec vel
              imperdiet purus.
            </p>
          </Col>
        </Row>
      </Container>
    </>
  );
}

export default Home;
