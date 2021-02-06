import React, { Component, Suspense } from "react";
import "./App.css";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import Navigation from "./components/Navigation";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import Footer from "./components/Footer";
import routes from "./routes";

class App extends Component {
  render() {
    return (
      <>
        <BrowserRouter>
          <Navigation />
          <Suspense fallback="loading...">
            <Switch>
              {routes.map((route) => {
                return <Route key={route.path} {...route} />;
              })}
            </Switch>
          </Suspense>
        </BrowserRouter>
        <Footer />
      </>
    );
  }
}

export default App;
