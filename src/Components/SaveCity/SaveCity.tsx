import React from "react";
import "./SaveCity.css";
import { useSelector } from "react-redux";
import { selectorSavedCities } from "../../Store/Selector";

interface DescSavedCities {
  name: string;
  sys: {
    country: string;
  };
}

function SaveCity() {
  // @ts-ignore
  const savedCities: DescSavedCities[] = useSelector(selectorSavedCities);
  const displayingThisCity = (e: any) => {
    console.log(e);
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
                  onClick={displayingThisCity}
                >
                  <p>
                    {item.name}, {item.sys.country}
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
