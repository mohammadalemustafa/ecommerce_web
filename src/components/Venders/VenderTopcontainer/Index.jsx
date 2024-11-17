import React from "react";
import styles from './index.module.css'
import VendorTop from "../VenderTop/Index";
import ShopTop from "../../ShopGrid/ShopTop/Index";
const VendorTopCont = ({name}) => {
  return (
    <>
      <div className={styles.vendortopcontainer}>
        <VendorTop name={name}/>
        <ShopTop />
      </div>
    </>
  );
};

export default VendorTopCont;
