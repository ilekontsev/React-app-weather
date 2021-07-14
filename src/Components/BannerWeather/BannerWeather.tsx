import React, { useEffect } from "react";
import "./BannerWeather.css";
import AddCircleOutlineIcon from "@material-ui/icons/AddCircleOutline";
import { effectGetWeather } from "../../Store/Effects";
import { useDispatch, useSelector } from "react-redux";
import { selectorSavedCities, selectorWeatherNow } from "../../Store/Selector";
import { useHistory } from "react-router-dom";
import { actionSetPreservedCity } from "../../Store/Action";

interface DescWeatherNow {
  weather: [
    {
      main: string;
    }
  ];
  main: {
    temp: number;
  };
  name: string;
  sys: {
    country: string;
  };
  wind: {
    speed: number;
  };
}
interface DescPosition {
  coords: {
    latitude: number;
    longitude: number;
  };
}

function BannerWeather() {
  const dispatch = useDispatch();
  // @ts-ignore
  const weatherNow: DescWeatherNow = useSelector(selectorWeatherNow);

  useEffect(() => {
    navigator.geolocation.getCurrentPosition(
      (position: DescPosition) => {
        const lat = position.coords.latitude;
        const long = position.coords.longitude;
        localStorage.setItem("latitude", String(lat));
        localStorage.setItem("longitude", String(long));
        dispatch(effectGetWeather());
      },
      (err) => {
        console.log(err);
      }
    );
  }, []);

  const saveCity = () => {
    dispatch(actionSetPreservedCity());
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
                {weatherNow.name}, {weatherNow.sys.country}
              </p>
              <p className="bannerWeather-info-sky">
                {weatherNow.weather[0].main}
              </p>
              <p className="bannerWeather-info-wind">
                Wind - {weatherNow.wind.speed} per second
              </p>
            </>
          )}
        </div>
        <div className="bannerWeather-button-save">
          <AddCircleOutlineIcon onClick={saveCity} />
        </div>
      </div>
    </div>
  );
}

export default BannerWeather;
