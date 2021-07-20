import React from "react";
import "./TodayTomorrow.css";
import { useDispatch, useSelector } from "react-redux";
import { effectGetHourlyWeather } from "../../Store/Effects";
import {
  selectorCheckFlagDay,
  selectorLat,
  selectorLong,
  selectorTodayHourlyWeather,
  selectorTomorrowHourlyWeather,
} from "../../Store/Selector";
import Ymap from "../Ymap/Ymap";

export interface DescHourlyWeather {
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

function TodayTomorrow() {
  const dispatch = useDispatch();
  const lat: string = useSelector(selectorLat);
  const long: string = useSelector(selectorLong);
  const checkFlagDay: string = useSelector(selectorCheckFlagDay);

  const todayHourlyWeather: DescHourlyWeather[] = useSelector(
    selectorTodayHourlyWeather
  );

  const tomorrowHourlyWeather: DescHourlyWeather[] = useSelector(
    selectorTomorrowHourlyWeather
  );

  if (todayHourlyWeather?.length === 0) {
    dispatch(effectGetHourlyWeather(lat, long));
  }

  const checkFlag = () => {
    switch (checkFlagDay) {
      case "/today":
        return todayHourlyWeather;
      case "/tomorrow":
        return tomorrowHourlyWeather;
      default:
        return todayHourlyWeather;
    }
  };
  const checkedDay = checkFlag();

  return (
    <div className="root-tt-wrap">
      <div className="tt-wrap">
        {todayHourlyWeather?.length && (
          <div className="tt-contain">
            <div className="tt-header">
              <p className="tt-header-h1">{checkedDay[0]?.myDay}</p>
              <p className="tt-header-h3-data">
                {checkedDay[0]?.myMonth}, {checkedDay[0]?.myNumber}
              </p>
            </div>

            <table className="tt-table-weather">
              <thead>
                <tr>
                  <th>Time</th>
                  <th>Weather</th>
                </tr>
              </thead>
              <tbody>
                {checkFlag().map((item, index) => (
                  <tr key={index}>
                    <td>{item.myTime}</td>
                    <td>{Math.round(item.main.temp)} &deg;C</td>
                    <td>{item.weather[0].main}</td>
                    <td>Wind - {item.wind.speed} meters per second</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        )}
        <div className="map">
          <Ymap />
        </div>
      </div>
    </div>
  );
}
export default TodayTomorrow;
