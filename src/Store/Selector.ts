import { DescState } from "./Reducer";
import { DescHourlyWeather } from "../Components/TodayTomorrow/TodayTomorrow";

const selectorWeatherNow = (state: DescState) => state?.weatherNow;
const selectorTodayHourlyWeather = (state: DescState): DescHourlyWeather[] =>
  state?.todayHourlyWeather;
const selectorTomorrowHourlyWeather = (state: DescState): DescHourlyWeather[] =>
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
