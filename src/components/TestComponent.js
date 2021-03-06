import React from "react";
import withLog from "./hoc/withLog";

function MyComponent(props) {
  return <h2>{JSON.stringify(props, null, 2)}</h2>;
}

export default withLog(MyComponent);
