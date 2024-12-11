import React from "react";
import "./index.css";
import { useDispatch } from "react-redux";
import { uiActions } from "../../Store/ui";
const Menu = () => {
  const dispatch = useDispatch();
  const handleClick = () => {
    dispatch(uiActions.onOpenSideBar())
  }
  return (
    <label class="burger" for="burger">
      <input type="checkbox" id="burger" onChange={handleClick} />
      <span></span>
      <span></span>
      <span></span>
    </label>
  );
};

export default Menu;
