import React from "react";
import "./App.css";
import Header from "../Header/Header";
import BannerWeather from "../BannerWeather/BannerWeather";
import Today from "../Today/Today";
import SaveCity from "../SaveCity/SaveCity";
import Week from "../Week/Week";

function App() {
  return (
    <div className={"root-wrap-app"}>
      <Header />
      <BannerWeather />
      <SaveCity />
      <Today />
      <Week />
    </div>
  );
}

export default App;
