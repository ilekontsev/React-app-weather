import React from "react";
import BannerWeather from "../../src/Components/BannerWeather/BannerWeather";
import { Provider } from "react-redux";
import { fireEvent, render, screen } from "@testing-library/react";
import store from "../../src/Store/Store";
import {
  actionSetPreservedCity,
  actionSetWeather,
} from "../../src/Store/Action";

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
const DataArr = {
  coord: { lon: 40.0958, lat: 44.6161 },
  name: "Maykop",
  main: { temp: 38.21 },
  sys: { country: "RU" },
  wind: { speed: 2.5 },
  weather: [{ main: "Clear" }],
};

describe("testing banner", () => {
  beforeEach(() => {
    render(
      <Provider store={store}>
        <BannerWeather />
      </Provider>
    );
  });
  test("test 1 render", () => {
    const checkElement = document.querySelectorAll(
      ".bannerWeather-block-weather"
    );
    expect(checkElement).toHaveLength(1);
  });
  test("click element", () => {
    store.dispatch(actionSetWeather(DataArr));
    fireEvent.click(screen.getByTestId("block-test"));
  });
  test("check if", () => {
    store.dispatch(actionSetWeather(DataArr));
    store.dispatch(actionSetPreservedCity([{ name: "Maykop" }]));
    fireEvent.click(screen.getByTestId("block-test"));
  });
});
