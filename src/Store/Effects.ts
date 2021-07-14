import axios from "axios";
import {
  actionSetHourlyWeather,
  actionSetWeather,
  actionSetWeekWeather,
} from "./Action";
import { apiKey, url } from "./Reducer";

interface DescResWeather {
  data: {
    list: object[];
  };
}

const lat = localStorage.getItem("latitude");
const long = localStorage.getItem("longitude");

const effectGetWeather = () => async (dispatch: any) => {
  try {
    const res: DescResWeather = await axios.get(
      `${url}/weather?lat=${lat}&lon=${long}&units=metric&appid=${apiKey}`
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
      // eslint-disable-next-line @typescript-eslint/no-use-before-define
      item.myMonth = getMonthYear(dateItem);
      item.myNumber = dateItem.getDate();
      item.myDay = day;
      return item;
    }
  });
};

const effectGetHourlyWeather = () => async (dispatch: any) => {
  try {
    const res: any = await axios.get(
      `${url}/forecast?lat=${lat}&lon=${long}&cnt=16&units=metric&appid=${apiKey}`
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

const effectGetWeekWeather = () => async (dispatch: any) => {
  try {
    const exclude: string = "exclude=minutely,hourly,current,alerts";
    const res: any = await axios.get(
      `${url}/onecall?lat=${lat}&lon=${long}&${exclude}&units=metric&appid=${apiKey}`
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

export { effectGetWeather, effectGetHourlyWeather, effectGetWeekWeather };
