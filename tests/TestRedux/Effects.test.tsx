import React from "react";
import axios from "axios";
import store from "../../src/Store/Store";
import {
  effectGetHourlyWeather,
  effectGetWeather,
  effectGetWeatherCity,
  effectGetWeekWeather,
} from "../../src/Store/Effects";
import {
  actionSetHourlyWeather,
  actionSetWeather,
  actionSetWeekWeather,
} from "../../src/Store/Action";
import { getDate } from "../../src/utils/utils";
import { Error } from "@material-ui/icons";

jest.mock("axios");
const hits = [
  { objectID: "1", title: "Angular" },
  { objectID: "2", title: "React" },
];

describe("Effects", () => {
  it("called effect with arg ", () => {
    // @ts-ignore
    axios.get.mockImplementationOnce(() => Promise.resolve({}));
    store.dispatch(effectGetWeather("54", "21"));
    expect(axios.get).toHaveBeenCalledTimes(1);
  });

  it("Effect called with proper arguments", async () => {
    // @ts-ignore
    axios.get.mockImplementationOnce(() =>
      Promise.resolve({ data: { list: hits } })
    );
    store.dispatch(effectGetHourlyWeather("54", "21"));
    expect(axios.get).toHaveBeenCalledTimes(2);
    expect(axios.get).toBeTruthy();
  });
  it("Effect called", () => {
    // @ts-ignore
    axios.get.mockImplementationOnce(() => Promise.resolve({ data: hits }));
    store.dispatch(effectGetHourlyWeather("54", "21"));
    expect(getDate).toThrow(TypeError);
  });
  it("Effect called", () => {
    // @ts-ignore
    axios.get.mockImplementationOnce(() => Promise.resolve({ data: hits }));
    store.dispatch(effectGetWeekWeather("54", "21"));
  });
  it("Effect called", () => {
    // @ts-ignore
    axios.get.mockImplementationOnce(() => Promise.resolve({ data: hits }));
    store.dispatch(effectGetWeatherCity("54"));
  });
});
