import React from "react";
import { Container } from "react-bootstrap";
import classes from "./Footer.module.css";

function Footer() {
  return (
    <>
      <Container className={classes.footer} fluid style={{ backgroundColor: "#343a40", color: "white" }}>
        <p style={{ margin: "0px" }}>&copy; 2021 | Olexiy Nizitskiy. All rights reserved.</p>
      </Container>
    </>
  );
}

export default Footer;
