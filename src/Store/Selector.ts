import { DescState } from "./Reducer";

const selectorWeatherNow: object = (state: DescState) => state?.weatherNow;
const selectorTodayHourlyWeather: object | undefined = (state: DescState) =>
  state?.todayHourlyWeather;
const selectorTomorrowHourlyWeather: object = (state: DescState) =>
  state?.tomorrowHourlyWeather;
// @ts-ignore
const selectorCheckFlagDay: string = (state: DescState) => state?.checkFlagDay;
// @ts-ignore
const selectorSavedCities: object[] = (state: DescState) => state?.savedCities;
// @ts-ignore
const selectorWeekWeather: object[] = (state: DescState) => state?.weekWeather;

// @ts-ignore
const selectorTextSearchInput: string = (state: DescState) =>
  state?.textSearchInput;

// @ts-ignore
const selectorSearchVariants: object[] = (state: DescState) =>
  state?.searchVariants;

// @ts-ignore
const selectorLat: string = (state: DescState) => state?.lat;

// @ts-ignore
const selectorLong: string = (state: DescState) => state?.long;

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
