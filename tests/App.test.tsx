import React from "react";
import App from "../src/Components/App/App";

import { Provider } from "react-redux";
import store from "../src/Store/Store";
import ReactDOM from "react-dom";

describe(">>>APP", () => {
  let container: HTMLDivElement;
  // eslint-disable-next-line prefer-const
  container = document.createElement("div");

  afterEach(() => {
    document.body.removeChild(container);
    container.remove();
  });

  test("Check render class", () => {
    document.body.appendChild(container);
    ReactDOM.render(
      <Provider store={store}>
        <App />
      </Provider>,
      container
    );
    const findClass = document.querySelectorAll(".root-wrap-app");
    expect(findClass).toHaveLength(1);
  });
});
