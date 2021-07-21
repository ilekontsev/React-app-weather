import React from "react";
import WeekWeather from "../../src/Components/WeekWeather/WeekWeather";
import { Provider } from "react-redux";
import store from "../../src/Store/Store";
import ReactDOM from "react-dom";
import {
  actionSetLatAndLong,
  actionSetWeekWeather,
} from "../../src/Store/Action";

const data = [
  {
    dt: 21,
    temp: {
      day: 21,
    },
    myDay: "string",
    myNumber: "string",
    myMonth: "string",
    weather: [
      {
        main: "string",
      },
    ],
  },
];

describe("WeekWeather ", () => {
  let container: HTMLDivElement;
  // eslint-disable-next-line prefer-const
  container = document.createElement("div");
  test("Check render component WeekWeather", () => {
    document.body.appendChild(container);
    ReactDOM.render(
      <Provider store={store}>
        <WeekWeather />
      </Provider>,
      container
    );

    const findClass = document.querySelectorAll(".root-week-wrap");
    expect(findClass).toHaveLength(1);
  });
  test("check 1 render", () => {
    store.dispatch(actionSetLatAndLong("54", "21"));
  });
  test("tests on map", () => {
    store.dispatch(actionSetWeekWeather(data));
  });
});
