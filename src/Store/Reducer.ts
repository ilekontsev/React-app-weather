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
import { DescHourlyWeather } from "../interface/interface";

export interface DescState {
  weatherNow: {
    name: string;
  };
  todayHourlyWeather: DescHourlyWeather[];
  tomorrowHourlyWeather: DescHourlyWeather[];
  checkFlagDay: string;
  savedCities: [
    {
      name: string;
    }
  ];
  weekWeather: object[];
  textSearchInput: string;
  searchVariants: object[];
  lat: string;
  long: string;
}

export const initialState = {
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

function reducer(state = initialState, action: any) {
  switch (action.type) {
    case LAT_AND_LONG:
      return {
        ...state,
        lat: action.payload.lat,
        long: action.payload.long,
      };
    case WEATHER_NOW:
      return {
        ...state,
        weatherNow: action.payload.weatherNow,
        textSearchInput: "",
        searchVariants: [],
      };
    case HOURLY_WEATHER:
      return {
        ...state,
        todayHourlyWeather: action.payload.todayHourlyWeather,
        tomorrowHourlyWeather: action.payload.tomorrowHourlyWeather,
      };
    case CHECK_FLAG_DAY:
      return {
        ...state,
        checkFlagDay: action.payload.checkFlagDay,
      };
    case SAVED_CITIES:
      return {
        ...state,
        savedCities: state.savedCities.concat(action.payload.upd),
      };
    case WEEK_WEATHER:
      return {
        ...state,
        weekWeather: action.payload.weekWeather,
      };
    case TEXT_SEARCH_INPUT:
      return {
        ...state,
        textSearchInput: action.payload.textSearchInput,
      };
    case SEARCH_VARIANT:
      return {
        ...state,
        searchVariants: action.payload.variant,
      };
  }
}
export default reducer;
