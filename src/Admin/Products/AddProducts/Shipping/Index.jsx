import React, { useState } from "react";
import styles from "./index.module.css";
import Fiels from "../General/Fields/Index";
import OutlineBtn from "../../../../widgets/Outlinebutton/Index";
const Shipping = () => {
    const [hideproduct,sethideproduct]=useState(true)
    const handletoggle=()=>{
        sethideproduct(!hideproduct)
    }
  return (
    <>
      <Fiels modebox={true} handletoggle={handletoggle} name="Free Shipping" />
      <Fiels selectbox={true} options={[{id:1,value:"Sales Tax"}]} name="Tax" require="Tax is required" />
      <Fiels inputbox={true} para="*Specify delivery text e.g Your order is likely to reach you within 5 to 10 days" placeholder="Enter Estimated Delivery Text" name="Estimated Delivery Text" />
      <Fiels inputbox={true} para="*Specify return text e.g Hassle free 7, 15 and 30 days return might be available." placeholder="Enter Return Policy Text" name="Return Policy Text" />
      <div className={styles.btncont}>
        <OutlineBtn name="Save Product" />
      </div>
    </>
  );
};

export default Shipping;
