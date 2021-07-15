import {
  CHECK_FLAG_DAY,
  HOURLY_WEATHER,
  LAT_AND_LONG,
  SAVED_CITIES,
  SEARCH_VARIANT,
  TEXT_SEARCH_INPUT,
  WEATHER_NOW,
  WEEK_WEATHER,
} from "./ActionType";

const actionSetWeather = (weatherNow: object) => {
  return {
    type: WEATHER_NOW,
    payload: {
      weatherNow,
    },
  };
};

const actionSetLatAndLong = (lat: string, long: string) => {
  return {
    type: LAT_AND_LONG,
    payload: {
      lat,
      long,
    },
  };
};

const actionSetHourlyWeather = (
  todayHourlyWeather: object[],
  tomorrowHourlyWeather: object[]
) => {
  return {
    type: HOURLY_WEATHER,
    payload: {
      todayHourlyWeather,
      tomorrowHourlyWeather,
    },
  };
};

const actionSetFlagDay = (checkFlagDay: string) => {
  return {
    type: CHECK_FLAG_DAY,
    payload: {
      checkFlagDay,
    },
  };
};

const actionSetPreservedCity = (upd: object[]) => {
  return {
    type: SAVED_CITIES,
    payload: {
      upd,
    },
  };
};

const actionSetWeekWeather = (weekWeather: object[]) => {
  return {
    type: WEEK_WEATHER,
    payload: {
      weekWeather,
    },
  };
};

const actionSetTextSearchInput = (textSearchInput: string) => {
  return {
    type: TEXT_SEARCH_INPUT,
    payload: {
      textSearchInput,
    },
  };
};

const actionSearchOfferVariant = (variant: object[]) => {
  return {
    type: SEARCH_VARIANT,
    payload: {
      variant,
    },
  };
};
export {
  actionSetWeather,
  actionSetFlagDay,
  actionSetPreservedCity,
  actionSetHourlyWeather,
  actionSetWeekWeather,
  actionSetTextSearchInput,
  actionSearchOfferVariant,
  actionSetLatAndLong,
};
