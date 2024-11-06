import React, { Fragment } from "react";
import { createPortal } from "react-dom";
import styles from "./modal.module.css";

const Overlay = () => {
  return <div className={styles.overlay}></div>;
};

const Modal = (props) => {
  return (
    <div className={styles.modalCont}>
      <div className={styles.content}>{props.children}</div>
    </div>
  );
};

const Mainportal = ({ children }) => {
  return (
    <Fragment>
      {createPortal(<Overlay />, document.getElementById("modal"))}
      {createPortal(<Modal>{children}</Modal>, document.getElementById("modal"))}
    </Fragment>
  );
};

export default Mainportal;
