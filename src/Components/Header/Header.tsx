import React, { useEffect } from "react";
import "./Header.css";
import InputSearch from "../InputSearch/InputSearch";
import { useHistory } from "react-router-dom";
import { actionSetFlagDay } from "../../Store/Action";
import { useDispatch } from "react-redux";

function Header() {
  const history = useHistory();
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(actionSetFlagDay(history.location.pathname));
  });
  const handleClickHome = (e: any) => {
    dispatch(actionSetFlagDay("/" + e.target.id));
    history.push("/" + e?.target?.id);
  };
  return (
    <div className="root-header-wrap">
      <div className="header-wrap">
        <nav>
          <ul className={"header-list-cont"}>
            <li className={"item"} onClick={handleClickHome}>
              Home
            </li>
            <li className={"item"} id={"today"} onClick={handleClickHome}>
              Today
            </li>
            <li className={"item"} id={"tomorrow"} onClick={handleClickHome}>
              Tomorrow
            </li>
            <li className={"item"} id={"week"} onClick={handleClickHome}>
              Week
            </li>
          </ul>
        </nav>
        <InputSearch />
      </div>
    </div>
  );
}
export default Header;
