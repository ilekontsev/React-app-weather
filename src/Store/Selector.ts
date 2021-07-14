import { DescState } from "./Reducer";

const selectorWeatherNow: object = (state: DescState) => state?.weatherNow;
const selectorTodayHourlyWeather: object = (state: DescState) =>
  state?.todayHourlyWeather;
const selectorTomorrowHourlyWeather: object = (state: DescState) =>
  state?.tomorrowHourlyWeather;
// @ts-ignore
const selectorFlagCallReq: boolean = (state: DescState) => state?.flagCallReq;
// @ts-ignore
const selectorCheckFlagDay: string = (state: DescState) => state?.checkFlagDay;
// @ts-ignore
const selectorSavedCities: object[] = (state: DescState) => state?.savedCities;
// @ts-ignore
const selectorWeekWeather: object[] = (state: DescState) => state?.weekWeather;
export {
  selectorWeatherNow,
  selectorTodayHourlyWeather,
  selectorTomorrowHourlyWeather,
  selectorFlagCallReq,
  selectorCheckFlagDay,
  selectorSavedCities,
  selectorWeekWeather,
};
