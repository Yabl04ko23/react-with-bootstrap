import React, { Component } from "react";
import Jumbo from "../components/Jumbotron";
import { Container } from "react-bootstrap";
import withAuthContext from "../components/hoc/withAuthContext";
import Pexel from "../components/Pexel";
import api from "../services/pexelApi";

class About extends Component() {
  state = {
    query: "cat",
    page: 1,
    gallery: [],
  };

  componentDidMount() {
    const { query, page } = this.state;
    api.getFetch(query, page).then((response) => {
      console.log(response);
      this.setState({ gallery: response });
    });
  }

  componentDidUpdate(prevProps, prevState) {
    const { query, page } = this.state;
    // if (prevState.query !== query) {
    //   api.getFetch(query, page).then((response) => {
    //     console.log(response);
    //     this.setState({ gallery: response });
    //   });
    // }
  }

  render() {
    // const { auth } = this.props;
    const { gallery } = this.state;
    return (
      <>
        {/* {auth.user ? <h2>About {auth.user.name}</h2> : <h2>About</h2>} */}
        <Jumbo />
        <Container>
          <h2>Title</h2>
          <Pexel gallery={gallery} />
        </Container>
      </>
    );
  }
}

// export default withAuthContext(About);
export default About;
