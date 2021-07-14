import React, { useEffect } from "react";
import "./Today.css";
import { useDispatch, useSelector } from "react-redux";
import { effectGetHourlyWeather } from "../../Store/Effects";
import {
  selectorCheckFlagDay,
  selectorFlagCallReq,
  selectorTodayHourlyWeather,
  selectorTomorrowHourlyWeather,
} from "../../Store/Selector";

interface DescHourlyWeather {
  main: {
    temp: number;
  };
  myDay: string;
  myTime: string;
  myMonth: string;
  myNumber: string;
  weather: [
    {
      main: string;
    }
  ];
  wind: {
    speed: number;
  };
}

function Today() {
  const dispatch = useDispatch();

  const todayHourlyWeather: DescHourlyWeather[] = useSelector(
    // @ts-ignore
    selectorTodayHourlyWeather
  );
  const tomorrowHourlyWeather: DescHourlyWeather[] = useSelector(
    // @ts-ignore
    selectorTomorrowHourlyWeather
  );
  // @ts-ignore
  const flagCallReq = useSelector(selectorFlagCallReq);
  // @ts-ignore
  const checkFlagDay: string = useSelector(selectorCheckFlagDay);

  if (flagCallReq) {
    dispatch(effectGetHourlyWeather());
  }

  const checkFlag = () => {
    switch (checkFlagDay) {
      case "/today":
        return todayHourlyWeather;
      case "/tomorrow":
        return tomorrowHourlyWeather;
    }
  };
  const checkedDay = checkFlag();
  return (
    <div className="root-today-wrap">
      <div className="today-wrap">
        {todayHourlyWeather?.length && (
          <div className="today-contain">
            <div className="today-header">
              <p className="today-header-h1">
                {
                  // @ts-ignore
                  checkedDay[0]?.myDay
                }
              </p>
              <p className="today-header-h3-data">
                {
                  // @ts-ignore
                  checkedDay[0]?.myMonth
                }
                ,{" "}
                {
                  // @ts-ignore
                  checkedDay[0]?.myNumber
                }
              </p>
            </div>

            <table className="today-table-weather">
              <thead>
                <tr>
                  <th>Time</th>
                  <th>Weather</th>
                </tr>
              </thead>
              <tbody>
                {
                  // @ts-ignore
                  checkFlag().map((item, index) => (
                    <tr key={index}>
                      <td>{item.myTime}</td>
                      <td>{Math.round(item.main.temp)} &deg;C</td>
                      <td>{item.weather[0].main}</td>
                      <td>Wind-{item.wind.speed} per second</td>
                    </tr>
                  ))
                }
              </tbody>
            </table>
          </div>
        )}
        <div className="map">карта</div>
      </div>
    </div>
  );
}
export default Today;
