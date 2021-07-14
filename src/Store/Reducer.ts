import {
  CHECK_FLAG_DAY,
  HOURLY_WEATHER,
  SAVED_CITIES,
  WEATHER_NOW,
  WEEK_WEATHER,
} from "./ActionType";

export interface DescState {
  weatherNow: {
    name: string;
  };
  todayHourlyWeather: object[];
  tomorrowHourlyWeather: object[];
  flagCallReq: boolean;
  checkFlagDay: string;
  savedCities: [
    {
      name: string;
    }
  ];
  weekWeather: object[];
}

const initialState = {
  weatherNow: {},
  todayHourlyWeather: [],
  tomorrowHourlyWeather: [],
  flagCallReq: true,
  checkFlagDay: "",
  savedCities: [],
  weekWeather: [],
};

export const apiKey = "bde2be77470117360e4aad4463a99029";
export const url = "https://api.openweathermap.org/data/2.5";

function reducer(state = initialState, action: any) {
  switch (action.type) {
    case WEATHER_NOW:
      return {
        ...state,
        weatherNow: action.payload.weatherNow,
      };
    case HOURLY_WEATHER:
      return {
        ...state,
        todayHourlyWeather: action.payload.todayHourlyWeather,
        tomorrowHourlyWeather: action.payload.tomorrowHourlyWeather,
        flagCallReq: false,
      };
    case CHECK_FLAG_DAY:
      return {
        ...state,
        checkFlagDay: action.payload.checkFlagDay,
      };
    case SAVED_CITIES:
      // eslint-disable-next-line no-case-declarations
      const checkedMatch = state.savedCities.some(
        // @ts-ignore
        (item) => item?.name === state.weatherNow?.name
      );
      if (!checkedMatch) {
        return {
          ...state,
          // @ts-ignore
          savedCities: state.savedCities.concat(state.weatherNow),
        };
      }
      return {
        ...state,
      };
    case WEEK_WEATHER:
      return {
        ...state,
        weekWeather: action.payload.weekWeather,
      };
  }
}
export default reducer;
