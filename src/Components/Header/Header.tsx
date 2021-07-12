import React from "react";
import "./Header.css";
import InputSearch from "../InputSearch/InputSearch";

function Header() {
  return (
    <div className="root-header-wrap">
      <div className="header-wrap">
        <nav>
          <ul className={"header-list-cont"}>
            <li className={"item"}>Home</li>
            <li className={"item"}>Today</li>
            <li className={"item"}>Tomorrow</li>
            <li className={"item"}>Weak</li>
          </ul>
        </nav>
        <InputSearch />
      </div>
    </div>
  );
}
export default Header;
