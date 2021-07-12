import React from "react";
import "./BannerWeather.css";
import AddCircleOutlineIcon from "@material-ui/icons/AddCircleOutline";

function BannerWeather() {
  return (
    <div className="root-bannerWeather-wrap">
      <div className="bannerWeather-wrap">
        <div className="bannerWeather-block-weather">
          <p className="bannerWeather-info-degrees">32 &deg;C</p>
          <p className="bannerWeather-info-city">Maykop, RU</p>
          <p className="bannerWeather-info-sky">Clear</p>
          <p className="bannerWeather-info-wind">Wind - 312 per second</p>
        </div>
        <div className="content-button-save">
          <AddCircleOutlineIcon />
        </div>
      </div>
    </div>
  );
}

export default BannerWeather;
