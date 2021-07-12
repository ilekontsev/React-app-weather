import React from "react";
import "./Week.css";

function Week() {
  return (
    <div className="root-week-wrap">
      <div className="week-wrap">
        <div className="week-header-contain">
          <p className="week-header-text">Weak</p>
          <p className={"week-header-data"}>July, 12 - July, 20</p>
        </div>
        <div className="week-block-contain">
          <div className="week-block">
            <p className={"week-item"}>Tuesday</p>
            <p className={"week-item"}>32 &deg;C</p>
            <p className={"week-item"}>Clear</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Week;
