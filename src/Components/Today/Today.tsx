import React from "react";
import "./Today.css";
function Today() {
  return (
    <div className="root-today-wrap">
      <div className="today-wrap">
        <div className="today-contain">
          <div className="today-header">
            <p className="today-header-h1">Today</p>
            <p className="today-header-h3-data">July, 12</p>
          </div>
          <table className="today-table-weather">
            <thead>
              <tr>
                <th>Time</th>
                <th>Weather</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>00:00</td>
                <td>21 &deg;C</td>
                <td>Clear</td>
                <td>Wind-1,34 per second</td>
              </tr>
            </tbody>
          </table>
        </div>
        <div className="map">карта</div>
      </div>
    </div>
  );
}
export default Today;
