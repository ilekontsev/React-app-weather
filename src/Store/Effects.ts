import axios from "axios";
import {
  actionSearchOfferVariant,
  actionSetHourlyWeather,
  actionSetWeather,
  actionSetWeekWeather,
} from "./Action";
import { API_KEY, TOKEN_FOR_MAP_BOX, URL, URL_MAP_BOX } from "../Config/Config";

interface DescResWeather {
  data: {
    list: object[];
  };
}

const effectGetWeather =
  (lat1: string, long1: string) => async (dispatch: any) => {
    try {
      const res: DescResWeather = await axios.get(
        `${URL}/weather?lat=${lat1}&lon=${long1}&units=metric&appid=${API_KEY}`
      );
      dispatch(actionSetWeather(res.data));
    } catch (err) {
      console.log(err);
    }
  };

function getWeekDay(date: any) {
  const days = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
  ];
  return days[date.getDay()];
}
function getMonthYear(date: any) {
  const Month = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December",
  ];
  return Month[date.getMonth()];
}
// функция для получения времени, месяца, числа, дня && расширяет обьект
const getDate = (data: object[], dayDate: any, day: string = "") => {
  // eslint-disable-next-line array-callback-return
  return data.filter((item: any) => {
    const dateItem = new Date(item.dt * 1000);
    if (dayDate.getDate() === dateItem.getDate()) {
      item.myTime = String(dateItem).substr(16, 5);
      item.myMonth = getMonthYear(dateItem);
      item.myNumber = dateItem.getDate();
      item.myDay = day;
      return item;
    }
  });
};

const effectGetHourlyWeather =
  (lat1: string, long1: string) => async (dispatch: any) => {
    try {
      const res: any = await axios.get(
        `${URL}/forecast?lat=${lat1}&lon=${long1}&cnt=16&units=metric&appid=${API_KEY}`
      );
      const data = res.data.list;
      const today = new Date();
      const tomorrow = new Date(today.getTime() + 24 * 60 * 60 * 1000);
      const todayWeather = getDate(data, today, "Today");
      const tomorrowWeather = getDate(data, tomorrow, "Tomorrow");
      dispatch(actionSetHourlyWeather(todayWeather, tomorrowWeather));
    } catch (err) {
      console.log(err);
    }
  };

const effectGetWeekWeather =
  (lat1: string, long1: string) => async (dispatch: any) => {
    try {
      const exclude: string = "exclude=minutely,hourly,current,alerts";
      const res: any = await axios.get(
        `${URL}/onecall?lat=${lat1}&lon=${long1}&${exclude}&units=metric&appid=${API_KEY}`
      );
      const data = res.data.daily;
      const daily = data.map((item: any) => {
        const dataItem = new Date(item.dt * 1000);
        item.myDay = getWeekDay(dataItem);
        item.myMonth = getMonthYear(dataItem);
        item.myNumber = dataItem.getDate();
        return item;
      });
      dispatch(actionSetWeekWeather(daily));
    } catch (err) {
      console.log(err);
    }
  };

const effectGetWeatherCity = (value: string) => async (dispatch: any) => {
  try {
    const res: any = await axios.get(
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
