import React from "react";
import reducer from "../../src/Store/Reducer";
import {
  CHECK_FLAG_DAY,
  HOURLY_WEATHER,
  LAT_AND_LONG,
  SAVED_CITIES,
  SEARCH_VARIANT,
  TEXT_SEARCH_INPUT,
  WEATHER_NOW,
  WEEK_WEATHER,
} from "../../src/Store/ActionType";

const initialState = {
  weatherNow: {},
  todayHourlyWeather: [],
  tomorrowHourlyWeather: [],
  checkFlagDay: "/",
  savedCities: [],
  weekWeather: [],
  textSearchInput: "",
  searchVariants: [],
  lat: "",
  long: "",
};

describe("test reducer", () => {
  test("test reducer 1", () => {
    // @ts-ignore
    const check = reducer(initialState, {
      type: WEATHER_NOW,
      payload: { weatherNow: [{}, {}] },
    });
    expect(check).toEqual({
      ...initialState,
      weatherNow: [{}, {}],
    });
  });
  test("test reducer 2", () => {
    // @ts-ignore
    const check = reducer(initialState, {
      type: HOURLY_WEATHER,
      payload: { todayHourlyWeather: [{}, {}], tomorrowHourlyWeather: [{}] },
    });
    expect(check).toEqual({
      ...initialState,
      todayHourlyWeather: [{}, {}],
      tomorrowHourlyWeather: [{}],
    });
  });
  test("test reducer 3", () => {
    // @ts-ignore
    const check = reducer(initialState, {
      type: CHECK_FLAG_DAY,
      payload: { checkFlagDay: "dwa" },
    });
    expect(check).toEqual({
      ...initialState,
      checkFlagDay: "dwa",
    });
  });
  test("test reducer 4", () => {
    // @ts-ignore
    const check = reducer(initialState, {
      type: SAVED_CITIES,
      payload: { upd: [{}] },
    });
    expect(check).toEqual({
      ...initialState,
      savedCities: [{}],
    });
  });

  test("test reducer 5", () => {
    // @ts-ignore
    const check = reducer(initialState, {
      type: WEEK_WEATHER,
      payload: { weekWeather: [{}] },
    });
    expect(check).toEqual({
      ...initialState,
      weekWeather: [{}],
    });
  });
  test("test reducer 6", () => {
    // @ts-ignore
    const check = reducer(initialState, {
      type: TEXT_SEARCH_INPUT,
      payload: { textSearchInput: "hello world" },
    });
    expect(check).toEqual({
      ...initialState,
      textSearchInput: "hello world",
    });
  });
  test("test reducer 7", () => {
    // @ts-ignore
    const check = reducer(initialState, {
      type: SEARCH_VARIANT,
      payload: { variant: ["hello world"] },
    });
    expect(check).toEqual({
      ...initialState,
      searchVariants: ["hello world"],
    });
  });
  test("test reducer 8", () => {
    // @ts-ignore
    const check = reducer(initialState, {
      type: LAT_AND_LONG,
      payload: { lat: "56", long: "43" },
    });
    expect(check).toEqual({
      ...initialState,
      lat: "56",
      long: "43",
    });
  });
});
