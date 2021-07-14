import React, { useEffect } from "react";
import { BrowserRouter, Route, Switch, useHistory } from "react-router-dom";
import "./App.css";
import Header from "../Header/Header";
import BannerWeather from "../BannerWeather/BannerWeather";
import Today from "../Today/Today";
import SaveCity from "../SaveCity/SaveCity";
import Week from "../Week/Week";

function App() {
  return (
    <BrowserRouter>
      <div className={"root-wrap-app"}>
        <Header />
        <BannerWeather />
        <Switch>
          <Route exact path="/" component={SaveCity} />
          <Route path="/today" component={Today} />
          <Route path="/tomorrow" component={Today} />
          <Route path="/week" component={Week} />
        </Switch>
      </div>
    </BrowserRouter>
  );
}

export default App;
