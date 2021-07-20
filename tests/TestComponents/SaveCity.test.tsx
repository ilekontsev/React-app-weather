import React from "react";
import { fireEvent, render, screen } from "@testing-library/react";
import SaveCity from "../../src/Components/SaveCity/SaveCity";
import { Provider } from "react-redux";
import store from "../../src/Store/Store";

import {
  actionSetPreservedCity,
  actionSetWeather,
} from "../../src/Store/Action";

const dataCity = [
  {
    name: "maykop",
    sys: { country: "RU" },
    main: { temp: 38.44 },
    wind: { speed: 2.92 },
    weather: [{ main: "Clear" }],
    coord: { lat: "32", lon: "21" },
  },
];
const dataWeather = {
  name: "london",
  sys: { country: "RU" },
  main: { temp: 38.44 },
  wind: { speed: 2.92 },
  weather: [{ main: "Clear" }],
  coord: { lat: "32", lon: "21" },
};

describe("SaveCity", () => {
  afterEach(() => {});
  test("param pam Save city e", async () => {
    store.dispatch(actionSetPreservedCity(dataCity));
    store.dispatch(actionSetWeather(dataWeather));
    render(
      <Provider store={store}>
        <SaveCity />
      </Provider>
    );
    fireEvent.click(screen.getByTestId("block-test"), {
      target: { innerText: "maykop, ru" },
    });
    fireEvent.click(screen.getByTestId("block-test"), {
      target: { innerText: "london, ru" },
    });
    expect(await screen.findByText(/Saved Cities/i)).toBeInTheDocument();
    expect(await screen.getByText(/maykop/i)).toBeInTheDocument();
  });
});
