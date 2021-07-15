import React, { useEffect } from "react";
import "./Header.css";
import InputSearch from "../InputSearch/InputSearch";
import { useHistory } from "react-router-dom";
import { actionSetFlagDay } from "../../Store/Action";
import { useDispatch, useSelector } from "react-redux";
import { selectorCheckFlagDay } from "../../Store/Selector";

function Header() {
  const history = useHistory();
  const dispatch = useDispatch();
  // @ts-ignore
  const checkFlagDay: string = useSelector(selectorCheckFlagDay);

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
        <nav className={"header-nav"}>
          <ul className={"header-list-cont"}>
            <li
              // @ts-ignore
              className={checkFlagDay === "/" ? "borderItem" : "item"}
              onClick={handleClickHome}
            >
              Home
            </li>
            <li
              className={checkFlagDay === "/today" ? "borderItem" : "item"}
              id={"today"}
              onClick={handleClickHome}
            >
              Today
            </li>
            <li
              className={checkFlagDay === "/tomorrow" ? "borderItem" : "item"}
              id={"tomorrow"}
              onClick={handleClickHome}
            >
              Tomorrow
            </li>
            <li
              className={checkFlagDay === "/week" ? "borderItem" : "item"}
              id={"week"}
              onClick={handleClickHome}
            >
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
