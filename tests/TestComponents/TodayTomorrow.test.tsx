import React from "react";
import TodayTomorrow from "../../src/Components/TodayTomorrow/TodayTomorrow";
import { Provider } from "react-redux";
import store from "../../src/Store/Store";
import ReactDOM from "react-dom";
import {
  actionSetFlagDay,
  actionSetHourlyWeather,
  actionSetLatAndLong,
} from "../../src/Store/Action";
import { render } from "@testing-library/react";
import reducer, { initialState } from "../../src/Store/Reducer";
import { CHECK_FLAG_DAY } from "../../src/Store/ActionType";

const dataWeather = [
  {
    main: {
      temp: 21,
    },
    myDay: "Today",
    myTime: "21:31",
    myMonth: "may",
    myNumber: "12",
    weather: [
      {
        main: "string",
      },
    ],
    wind: {
      speed: 5,
    },
  },
];

describe("Today Tomorrow", () => {
  let container: HTMLDivElement;
  // eslint-disable-next-line prefer-const
  container = document.createElement("div");
  test("Check render component TodayTomorrow", () => {
    document.body.appendChild(container);
    ReactDOM.render(
      <Provider store={store}>
        <TodayTomorrow />
      </Provider>,
      container
    );

    const findClass = document.querySelectorAll(".root-tt-wrap");
    expect(findClass).toHaveLength(1);
  });
  test("check 1 render", () => {
    store.dispatch(actionSetLatAndLong("54", "21"));
  });
  describe("flag", () => {
    test("flag today", () => {
      store.dispatch(actionSetFlagDay("/today"));
      expect(reducer(initialState, actionSetFlagDay("/today"))).toEqual({
        ...initialState,
        checkFlagDay: "/today",
      });
    });
    test("flag today", () => {
      store.dispatch(actionSetFlagDay("/tomorrow"));
    });
  });
  test("test on map", () => {
    store.dispatch(actionSetFlagDay("/today"));
    store.dispatch(actionSetHourlyWeather(dataWeather, dataWeather));
    render(
      <Provider store={store}>
        <TodayTomorrow />
      </Provider>
    );
  });
});
