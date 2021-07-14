import {
  CHECK_FLAG_DAY,
  HOURLY_WEATHER,
  SAVED_CITIES,
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

const actionSetPreservedCity = () => {
  return {
    type: SAVED_CITIES,
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

export {
  actionSetWeather,
  actionSetFlagDay,
  actionSetPreservedCity,
  actionSetHourlyWeather,
  actionSetWeekWeather,
};
