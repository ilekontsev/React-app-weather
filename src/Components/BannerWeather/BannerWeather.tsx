import React, { useEffect } from "react";
import "./BannerWeather.css";
import AddCircleOutlineIcon from "@material-ui/icons/AddCircleOutline";
import { effectGetWeather } from "../../Store/Effects";
import { useDispatch, useSelector } from "react-redux";
import { selectorSavedCities, selectorWeatherNow } from "../../Store/Selector";
import {
  actionSetLatAndLong,
  actionSetPreservedCity,
} from "../../Store/Action";
import { DescPosition, DescWeatherNow } from "../../interface/interface";

function BannerWeather() {
  const dispatch = useDispatch();
  // @ts-ignore
  const weatherNow: DescWeatherNow = useSelector(selectorWeatherNow);
  const savedCities = useSelector(selectorSavedCities);

  useEffect(() => {
    navigator.geolocation.getCurrentPosition(
      (position: DescPosition) => {
        const lat = position.coords.latitude;
        const long = position.coords.longitude;
        dispatch(actionSetLatAndLong(String(lat), String(long)));
        dispatch(effectGetWeather(String(lat), String(long)));
      },
      (err) => {
        console.log(err);
      }
    );
  }, []);

  const saveCityInLocal = (upd: object) => {
    const getCities = JSON.parse(localStorage.getItem("cities") || "[]");

    if (getCities?.length !== 0) {
      const citiesArr = getCities.concat(upd);
      const cities = JSON.stringify(citiesArr);
      localStorage.setItem("cities", cities);
    } else {
      const cities = JSON.stringify([upd]);
      localStorage.setItem("cities", cities);
    }
  };

  const saveCity = () => {
    const checkedMatch = savedCities.some(
      (item) => item?.name === weatherNow?.name
    );
    if (!checkedMatch) {
      const upd = {
        name: weatherNow.name,
        country: weatherNow.sys.country,
        coord: weatherNow.coord,
      };
      dispatch(actionSetPreservedCity([upd]));
      saveCityInLocal(upd);
    }
  };
  return (
    <div className="root-bannerWeather-wrap">
      <div className="bannerWeather-wrap">
        <div className="bannerWeather-block-weather">
          {weatherNow?.weather && (
            <>
              <p className="bannerWeather-info-degrees">
                {Math.round(weatherNow.main.temp)} &deg;C
              </p>
              <p className="bannerWeather-info-city">
                {weatherNow.name}, {weatherNow.sys?.country}
              </p>
              <p className="bannerWeather-info-sky">
                {weatherNow.weather[0].main}
              </p>
              <p className="bannerWeather-info-wind">
                Wind - {weatherNow.wind.speed} meters per second
              </p>
            </>
          )}
        </div>
        <div className="bannerWeather-button-save">
          <AddCircleOutlineIcon
            data-testid={"block-tests"}
            onClick={saveCity}
          />
        </div>
      </div>
    </div>
  );
}

export default BannerWeather;
