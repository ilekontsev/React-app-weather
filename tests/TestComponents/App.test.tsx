import React from "react";
import App from "../../src/Components/App/App";
import { Provider } from "react-redux";
import store from "../../src/Store/Store";
import { fireEvent, render, screen } from "@testing-library/react";

const mockGeolocation = {
  getCurrentPosition: jest.fn().mockImplementationOnce((success) =>
    Promise.resolve(
      success({
        coords: {
          latitude: 51.1,
          longitude: 45.3,
        },
      })
    )
  ),
};
// @ts-ignore
global.navigator.geolocation = mockGeolocation;

describe(">>>APP", () => {
  test("handle click app tests", () => {
    render(
      <Provider store={store}>
        <App />
      </Provider>
    );
    fireEvent.click(screen.getByTestId("block-tests-app"), {
      target: { className: "input-search-wrap" },
    });
    fireEvent.click(screen.getByTestId("block-tests-app"), {
      target: { className: "class" },
    });
  });
});
