import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
// import { Provider } from "react-redux";
// import store from "./redux/store";
// console.log(store);


// оборачиваем в провайдер чтобы все имели доступ к глобал стору
// в компонент провайдер необоходимо передать сам стор
ReactDOM.render(
  <React.StrictMode>
      <App />
    {/* <Provider store={store}>
    </Provider> */}
  </React.StrictMode>,
  document.getElementById("root")
);
