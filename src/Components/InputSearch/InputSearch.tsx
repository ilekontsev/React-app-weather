import React, { useCallback } from "react";

import "./InputSearch.css";
import { actionSetTextSearchInput } from "../../Store/Action";
import { useDispatch, useSelector } from "react-redux";
import {
  selectorSearchVariants,
  selectorTextSearchInput,
} from "../../Store/Selector";
import {
  effectGetHourlyWeather,
  effectGetWeather,
  effectGetWeatherCity,
  effectGetWeekWeather,
} from "../../Store/Effects";
const debounce = require("lodash.debounce");

function InputSearch() {
  // @ts-ignore
  const textSearchInput: string = useSelector(selectorTextSearchInput);
  // @ts-ignore
  const searchVariants: object[] = useSelector(selectorSearchVariants);
  const dispatch = useDispatch();

  const reqSearch = (valueText: string) => {
    dispatch(effectGetWeatherCity(valueText));
  };
  const debouncedSave = useCallback(
    debounce((newValue: string) => reqSearch(newValue), 1000),
    [debounce]
  );

  const writeInput = (e: any) => {
    dispatch(actionSetTextSearchInput(e.target.value));
    debouncedSave(e.target.value);
  };
  const searchCity = (e: any) => {
    // if (e.key === "Enter" && e.target.value.trim().length !== 0) {
    // }
  };
  const selectItem = (geometry: string[]) => {
    const [long, lat] = geometry;
    dispatch(effectGetWeather(lat, long));
    dispatch(effectGetHourlyWeather(lat, long));
    dispatch(effectGetWeekWeather(lat, long));
  };
  return (
    <div className={"root-input-wrap"}>
      <input
        className={"input-search-wrap"}
        placeholder={"Find city..."}
        type={"text"}
        onChange={writeInput}
        onKeyDown={searchCity}
        value={textSearchInput || ""}
      />
      <div
        className={
          searchVariants?.length > 1 ? "visible-class" : "hidden-class"
        }
      >
        {searchVariants?.map((item: any, index) => (
          <div
            key={index}
            className={"item-search"}
            onClick={() => selectItem(item.center)}
          >
            {item.place_name}
          </div>
        ))}
      </div>
    </div>
  );
}
export default InputSearch;
