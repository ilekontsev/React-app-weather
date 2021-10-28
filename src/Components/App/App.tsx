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

const App = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    const cities = JSON.parse(localStorage.getItem("cities") || "[]");
    if (cities?.length !== 0) {
      dispatch(actionSetPreservedCity(cities));
    }
  }, []);

  const hiddenSearch = (e: React.MouseEvent) => {
    const target = e.target as Element;
    if (target.className !== "input-search-wrap") {
      dispatch(actionSearchOfferVariant([]));
    }
  };
  return (
    <BrowserRouter>
      <div
        data-testid={"block-tests-app"}
        className={"root-wrap-app"}
        onClick={hiddenSearch}
      >
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
};

export default App;
