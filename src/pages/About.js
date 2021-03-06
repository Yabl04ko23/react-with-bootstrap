import React from "react";
import Jumbo from "../components/Jumbotron";
import { Table, Container } from "react-bootstrap";
import withAuthContext from "../components/hoc/withAuthContext";

function About({ auth }) {
  return (
    <>
      {auth.user ? <h2>About {auth.user.name}</h2> : <h2>About</h2>}
      <Jumbo />
      <Container>
        <h2>Title</h2>
        <Table striped bordered hover>
          <thead>
            <tr>
              <th>1</th>
              <th>2</th>
              <th>3</th>
              <th>4</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>2</td>
              <td>2</td>
              <td>2</td>
              <td>2</td>
            </tr>
            <tr>
              <td>3</td>
              <td>3</td>
              <td>3</td>
              <td>3</td>
            </tr>
            <tr>
              <td>4</td>
              <td>4</td>
              <td>4</td>
              <td>4</td>
            </tr>
          </tbody>
        </Table>
      </Container>
    </>
  );
}

export default withAuthContext(About);
