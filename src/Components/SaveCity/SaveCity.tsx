import React from "react";
import "./SaveCity.css";
import { useDispatch, useSelector } from "react-redux";
import { selectorSavedCities, selectorWeatherNow } from "../../Store/Selector";
import {
  effectGetHourlyWeather,
  effectGetWeather,
  effectGetWeekWeather,
} from "../../Store/Effects";
import { DescWeatherNow } from "../BannerWeather/BannerWeather";
import { actionSetLatAndLong } from "../../Store/Action";

interface DescSavedCities {
  name: string;
  country: string;
  coord: {
    lon: string;
    lat: string;
  };
}

function SaveCity() {
  const dispatch = useDispatch();
  // @ts-ignore
  const savedCities: DescSavedCities[] = useSelector(selectorSavedCities);
  // @ts-ignore
  const weatherNow: DescWeatherNow = useSelector(selectorWeatherNow);

  const selectThisCity = (e: React.MouseEvent) => {
    const target = e.target as HTMLElement;
    const nameCity = target.innerText.split(",")[0];

    if (weatherNow.name !== nameCity) {
      // eslint-disable-next-line array-callback-return
      const findCity = savedCities.filter((item) => {
        if (item.name === nameCity) {
          return item;
        }
      });
      const { lon, lat } = findCity[0].coord;

      localStorage.setItem("latitude", lat);
      localStorage.setItem("longitude", lon);
      dispatch(actionSetLatAndLong(lat, lon));
      dispatch(effectGetWeather(lat, lon));
      dispatch(effectGetHourlyWeather(lat, lon));
      dispatch(effectGetWeekWeather(lat, lon));
    }
  };
  return (
    <>
      {savedCities && (
        <div className="root-saveCity-wrap">
          <div className="saveCity-wrap">
            <p className="saveCity-header-text">Saved Cities</p>
            <div className="saveCity-block-contain">
              {savedCities.map((item, index) => (
                <div
                  key={index}
                  className="saveCity-block"
                  onClick={selectThisCity}
                >
                  <p>
                    {item?.name}, {item?.country}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      )}
    </>
  );
}
export default SaveCity;
