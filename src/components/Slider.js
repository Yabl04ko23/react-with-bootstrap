import React from "react";
import img1 from "../images/1.jpg";
import img2 from "../images/2.jpg";
import img3 from "../images/3.jpg";
import { Carousel } from "react-bootstrap";

function Slider() {
  return (
    <>
      <Carousel>
        <Carousel.Item style={{ height: "800px" }}>
          <img src={img1} alt="dog" className="d-block w-100" />
          <Carousel.Caption style={{ color: "black" }}>
            <h2>Title</h2>
            <p>Desciption</p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item style={{ height: "800px" }}>
          <img src={img2} alt="bober" className="d-block w-100" />
          <Carousel.Caption style={{ color: "black" }}>
            <h2>Title</h2>
            <p>Desciption</p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item style={{ height: "800px" }}>
          <img src={img3} alt="squirrel" className="d-block w-100" />
          <Carousel.Caption style={{ color: "black" }}>
            <h2>Title</h2>
            <p>Desciption</p>
          </Carousel.Caption>
        </Carousel.Item>
      </Carousel>
    </>
  );
}

export default Slider;
