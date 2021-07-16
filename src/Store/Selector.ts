import { DescState } from "./Reducer";

const selectorWeatherNow = (state: DescState) => state?.weatherNow;
const selectorTodayHourlyWeather = (state: DescState) =>
  state?.todayHourlyWeather;
const selectorTomorrowHourlyWeather = (state: DescState) =>
  state?.tomorrowHourlyWeather;

const selectorCheckFlagDay = (state: DescState) => state?.checkFlagDay;

const selectorSavedCities = (state: DescState) => state?.savedCities;

const selectorWeekWeather = (state: DescState) => state?.weekWeather;

const selectorTextSearchInput = (state: DescState) => state?.textSearchInput;

const selectorSearchVariants = (state: DescState) => state?.searchVariants;

const selectorLat = (state: DescState) => state?.lat;

const selectorLong = (state: DescState) => state?.long;

export {
  selectorWeatherNow,
  selectorTodayHourlyWeather,
  selectorTomorrowHourlyWeather,
  selectorCheckFlagDay,
  selectorSavedCities,
  selectorWeekWeather,
  selectorTextSearchInput,
  selectorSearchVariants,
  selectorLat,
  selectorLong,
};
