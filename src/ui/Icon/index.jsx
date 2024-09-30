import React from "react";
import styles from "./index.module.css";

const Icon = ({ children, counter, name }) => {
  return (
    <div className={styles.icon}>
      <div className={styles.left}>
        {children}
        {counter && <p>{counter}</p>}
      </div>
      <p className={styles.right}>{name}</p>
    </div>
  );
};

export default Icon;
