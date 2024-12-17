import React from "react";
import styles from "./index.module.css";
import Fiels from "../Fields/Index";
import OutlineBtn from "../../../../../widgets/Outlinebutton/Index";
const Generals = () => {
  return (
    <>
      <Fiels
        name="Name"
        require="Name is Required"
        inputbox={true}
        placeholder="Enter Product Name"
      />
      <Fiels
        name="Short Description"
        require="Short description is required"
        para="*Maximum length should be 300 characters."
        areabox={true}
        placeholder="Enter Short Description"
      />
      <Fiels name="Description" areabox2={true} placeholder="Type here..." />
      <Fiels
        name="Store"
        options={[
          { id: 1, value: "Trendy Fashions" },
          { id: 2, value: "Docks Sports" },
          { id: 3, value: "Mega Appliances" },
          { id: 4, value: "Hailey Beauty" },
        ]}
        selectbox={true}
        require="Store is Requied"
        placeholder="Select Store"
      />
      <div className={styles.buttonout}>
      <OutlineBtn name="Save Product"/>
      </div>
    </>
  );
};

export default Generals;
