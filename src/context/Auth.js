import React, { Component, createContext } from "react";
import userApi from "../services/userApi";

const Context = createContext();
// console.log(Context);

class AuthContext extends Component {
  static Consumer = Context.Consumer;

  login = () => {
    userApi.fetchUser().then((user) => {
      return this.setState({ user });
    });
  };

  logout = () => {
    this.setState({ user: null });
  };

  state = {
    user: null,
    onLogin: this.login,
    onLogout: this.logout,
  };

  render() {
    return (
      <>
        <Context.Provider value={this.state}>{this.props.children}</Context.Provider>
      </>
    );
  }
}

export default AuthContext;
