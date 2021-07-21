import axios from "axios";
import { API_KEY, TOKEN_FOR_MAP_BOX, URL, URL_MAP_BOX } from "../Config/Config";
import {
  actionSearchOfferVariant,
  actionSetHourlyWeather,
  actionSetWeather,
  actionSetWeekWeather,
} from "./Action";
import {
  DescResHourly,
  DescResWeather,
  DescResWeek,
  DescWeatherCity,
} from "../interface/interface";
import { getDate, getMonthYear, getWeekDay } from "../utils/utils";

const effectGetWeather =
  (lat: string, long: string) => async (dispatch: any) => {
    try {
      const res: DescResWeather = await axios.get(
        `${URL}/weather?lat=${lat}&lon=${long}&units=metric&appid=${API_KEY}`
      );
      const data = res.data;
      dispatch(actionSetWeather(data));
    } catch (err) {
      console.log(err);
    }
  };

const effectGetHourlyWeather =
  (lat: string, long: string) => async (dispatch: any) => {
    try {
      const res: DescResHourly = await axios.get(
        `${URL}/forecast?lat=${lat}&lon=${long}&cnt=16&units=metric&appid=${API_KEY}`
      );
      const data = res.data.list;
      const today = new Date();
      const tomorrow = new Date(today.getTime() + 24 * 60 * 60 * 1000);
      const todayWeather = getDate(data, today, "Today");
      const tomorrowWeather = getDate(data, tomorrow, "Tomorrow");
      if (!todayWeather.length) {
        throw new Error("data undefined");
      }
      dispatch(actionSetHourlyWeather(todayWeather, tomorrowWeather));
    } catch (err) {
      console.log(err);
    }
  };

const effectGetWeekWeather =
  (lat: string, long: string) => async (dispatch: any) => {
    try {
      const exclude: string = "exclude=minutely,hourly,current,alerts";
      const res: DescResWeek = await axios.get(
        `${URL}/onecall?lat=${lat}&lon=${long}&${exclude}&units=metric&appid=${API_KEY}`
      );
      const data = res.data.daily;
      const daily = data.map((item: any) => {
        const dataItem = new Date(item.dt * 1000);
        item.myDay = getWeekDay(dataItem);
        item.myMonth = getMonthYear(dataItem);
        item.myNumber = dataItem.getDate();
        return item;
      });
      if (!daily.length) {
        throw new Error("data undefined");
      }
      dispatch(actionSetWeekWeather(daily));
    } catch (err) {
      console.log(err);
    }
  };

const effectGetWeatherCity = (value: string) => async (dispatch: any) => {
  try {
    const res: DescWeatherCity = await axios.get(
      `${URL_MAP_BOX}/${value}.json?types=place&limit=6&access_token=${TOKEN_FOR_MAP_BOX}`
    );
    dispatch(actionSearchOfferVariant(res.data.features));
  } catch (err) {
    console.log(err);
  }
};

export {
  effectGetWeather,
  effectGetHourlyWeather,
  effectGetWeekWeather,
  effectGetWeatherCity,
};
