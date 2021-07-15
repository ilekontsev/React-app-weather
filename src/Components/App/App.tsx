import React, { useEffect } from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import "./App.css";
import Header from "../Header/Header";
import BannerWeather from "../BannerWeather/BannerWeather";
import TodayTomorrow from "../TodayTomorrow/TodayTomorrow";
import SaveCity from "../SaveCity/SaveCity";
import WeekWeather from "../WeekWeather/WeekWeather";
import { useDispatch } from "react-redux";
import {
  actionSearchOfferVariant,
  actionSetPreservedCity,
} from "../../Store/Action";

function App() {
  const dispatch = useDispatch();

  useEffect(() => {
    const getCities = localStorage.getItem("cities");
    // @ts-ignore
    const cities = JSON.parse(getCities);
    if (cities?.length !== 0 && cities !== null) {
      // @ts-ignore
      dispatch(actionSetPreservedCity(cities));
    }
  }, []);

  const hiddenSearch = (e: any) => {
    if (e.target.className !== "input-search-wrap") {
      dispatch(actionSearchOfferVariant([]));
    }
  };
  return (
    <BrowserRouter>
      <div className={"root-wrap-app"} onClick={hiddenSearch}>
        <Header />
        <BannerWeather />
        <Switch>
          <Route exact path="/" component={SaveCity} />
          <Route path="/today" component={TodayTomorrow} />
          <Route path="/tomorrow" component={TodayTomorrow} />
          <Route path="/week" component={WeekWeather} />
        </Switch>
      </div>
    </BrowserRouter>
  );
}

export default App;
