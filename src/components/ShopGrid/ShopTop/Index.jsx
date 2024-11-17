import React from "react";
import styles from "./index.module.css";
import Dropdown from "../../../widgets/Dropdown/Index";
const ShopTop = () => {
  return (
    <>
      <div className={styles.shopgriddropdown}>
        <p>
          We found <span>29</span> items for you!
        </p>
        <Dropdown />
      </div>
    </>
  );
};

export default ShopTop;
