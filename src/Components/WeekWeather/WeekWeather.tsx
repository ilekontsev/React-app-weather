import React from "react";
import "./WeekWeather.css";
import { useDispatch, useSelector } from "react-redux";
import { effectGetWeekWeather } from "../../Store/Effects";
import {
  selectorLat,
  selectorLong,
  selectorWeekWeather,
} from "../../Store/Selector";

interface DescWeek {
  dt: number;
  temp: {
    day: number;
  };
  myDay: string;
  myNumber: string;
  myMonth: string;
  weather: [
    {
      main: string;
    }
  ];
}

function WeekWeather() {
  const dispatch = useDispatch();
  const lat: string = useSelector(selectorLat);
  const long: string = useSelector(selectorLong);
  //  @ts-ignore
  const weekWeather: DescWeek[] = useSelector(selectorWeekWeather);

  if (weekWeather?.length === 0) {
    dispatch(effectGetWeekWeather(lat, long));
  }
  return (
    <div className="root-week-wrap">
      {weekWeather?.length && (
        <div className="week-wrap">
          <div className="week-header-contain">
            <p className="week-header-text">Week</p>
            <p className={"week-header-data"}>
              {weekWeather[0].myMonth}, {weekWeather[0].myNumber} -{" "}
              {weekWeather[weekWeather.length - 1].myMonth},{" "}
              {weekWeather[weekWeather.length - 1].myNumber}
            </p>
          </div>
          <div className="week-block-contain">
            {weekWeather.map((item, index) => (
              <div key={index} className="week-block">
                <p className={"week-item"}>{item.myDay}</p>
                <p className={"week-item"}>
                  {Math.round(item.temp.day)} &deg;C
                </p>
                <p className={"week-item"}>{item.weather[0].main}</p>
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  );
}

export default WeekWeather;
