import React from "react";

import {
  actionSearchOfferVariant,
  actionSetFlagDay,
  actionSetHourlyWeather,
  actionSetLatAndLong,
  actionSetPreservedCity,
  actionSetTextSearchInput,
  actionSetWeather,
  actionSetWeekWeather,
} from "../../src/Store/Action";
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

describe(">>>A C T I O N --- Test ", () => {
  it("actionCreator 1", () => {
    const checkAction = actionSetWeather({});
    expect(checkAction).toEqual({
      type: WEATHER_NOW,
      payload: { weatherNow: {} },
    });
  });
  it("actionCreator 2", () => {
    const checkAction = actionSetLatAndLong("56", "56");
    expect(checkAction).toEqual({
      type: LAT_AND_LONG,
      payload: { lat: "56", long: "56" },
    });
  });
  it("actionCreator 3", () => {
    const checkAction = actionSetHourlyWeather([{}], [{}, {}]);
    expect(checkAction).toEqual({
      type: HOURLY_WEATHER,
      payload: { todayHourlyWeather: [{}], tomorrowHourlyWeather: [{}, {}] },
    });
  });
  it("actionCreator 4", () => {
    const checkAction = actionSetFlagDay("checkedFlag");
    expect(checkAction).toEqual({
      type: CHECK_FLAG_DAY,
      payload: { checkFlagDay: "checkedFlag" },
    });
  });
  it("actionCreator 5", () => {
    const checkAction = actionSetPreservedCity([{}]);
    expect(checkAction).toEqual({
      type: SAVED_CITIES,
      payload: { upd: [{}] },
    });
  });
  it("actionCreator 6", () => {
    const checkAction = actionSetWeekWeather([{}]);
    expect(checkAction).toEqual({
      type: WEEK_WEATHER,
      payload: { weekWeather: [{}] },
    });
  });
  it("actionCreator 7", () => {
    const checkAction = actionSetTextSearchInput("storka");
    expect(checkAction).toEqual({
      type: TEXT_SEARCH_INPUT,
      payload: { textSearchInput: "storka" },
    });
  });
  it("actionCreator 8", () => {
    const checkAction = actionSearchOfferVariant([{ gg: "tut" }]);
    expect(checkAction).toEqual({
      type: SEARCH_VARIANT,
      payload: { variant: [{ gg: "tut" }] },
    });
  });
});
