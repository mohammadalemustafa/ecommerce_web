import React from "react";
import "./index.css";

const Menu = () => {
  return (
    <label class="burger" for="burger">
      <input type="checkbox" id="burger" />
      <span></span>
      <span></span>
      <span></span>
    </label>
  );
};

export default Menu;
