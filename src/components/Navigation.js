import React, { useState } from "react";
import { Navbar, Nav, Button, Container, Modal } from "react-bootstrap";
import styled from "styled-components";
import { Link } from "react-router-dom";
import withAuthContext from "./hoc/withAuthContext"

const Styles = styled.div`
  a,
  .navbar-brend,
  .navbar-nav .nav-link {
    color: red;
    &:hover {
      color: black;
    }
  }
`;

function Navigation({ auth }) {
  const [show, setShow] = useState(false);
  const handleShow = () => setShow(true);
  const handleClose = () => setShow(false);
  return (
    <>
      <Styles>
        <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
          <Container>
            <Navbar.Brand>Logo</Navbar.Brand>
            <Navbar.Toggle aria-controls="responsive-navbar-nav" />
            <Navbar.Collapse>
              <Nav>
                <Nav.Link>
                  <Link to="/">Home</Link>
                </Nav.Link>
                <Nav.Link>
                  <Link to="/about">About</Link>
                </Nav.Link>
                <Nav.Link>
                  <Link to="/contacts">Contacts</Link>
                </Nav.Link>
              </Nav>
              <Nav>
                {auth.user ? (
                  <div style={Styles.container}>
                    <img src={auth.user.avatar} alt={auth.user.name} width="32" style={Styles.avatar} />
                    <span style={Styles.name}>Hello, {auth.user.name}</span>
                    <button type="button" onClick={auth.onLogout}>
                      Log Out
                    </button>
                  </div>
                ) : (
                  <>
                    <Button variant="primary" className="mr-2" onClick={auth.onLogin}>
                      Log In
                    </Button>
                    <Button variant="primary" onClick={auth.onLogin}>
                      Sign Out
                    </Button>
                  </>
                )}
              </Nav>
            </Navbar.Collapse>
          </Container>
        </Navbar>
      </Styles>
    </>
  );
}
// <Modal show={show} onHide={handleClose}>
//   <Modal.Header>

//   </Modal.Header>
//   <show></show>
// </Modal>

export default withAuthContext(Navigation);
