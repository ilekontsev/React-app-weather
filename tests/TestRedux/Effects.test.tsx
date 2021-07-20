import React from "react";
import axios from "axios";
import { render, screen, act } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import store from "../../src/Store/Store";
import {
  effectGetHourlyWeather,
  effectGetWeekWeather,
} from "../../src/Store/Effects";
import { actionSetWeekWeather } from "../../src/Store/Action";

jest.mock("axios");
const hits = [
  { objectID: "1", title: "Angular" },
  { objectID: "2", title: "React" },
];

describe("Effects", () => {
  it("Effect called with proper arguments", async () => {
    // @ts-ignore
    axios.get.mockImplementationOnce(() =>
      Promise.resolve({ data: { list: hits } })
    );
    store.dispatch(effectGetHourlyWeather("54", "21"));
    expect(axios.get).toHaveBeenCalledTimes(1);
    expect(axios.get).toBeTruthy();
  });
  it("Effect called", () => {
    // @ts-ignore
    axios.get.mockImplementationOnce(() =>
      Promise.resolve({ data: { list: hits } })
    );
    store.dispatch(effectGetWeekWeather("54", "21"));
    expect(axios.get).toHaveBeenCalledTimes(2);
  });
});
