import React from "react";
import styles from "./index.module.css";
const URLField = ({name}) => {
  return (
    <>
      <div className={styles.urlfiels}>
        <label>{name}</label>
        <input type="text" />
      </div>
    </>
  );
};

export default URLField;
