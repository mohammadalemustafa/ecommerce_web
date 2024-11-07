import React, { Fragment } from "react";
import { createPortal } from "react-dom";
import styles from "./modal.module.css";
import { useDispatch } from "react-redux";
import { uiActions } from "../Store/ui";
const Overlay = () => {
  const dispatch=useDispatch();
 const closeModal=()=>{
  dispatch(uiActions.OnModalClose());
 }
  return <div onClick={closeModal} className={styles.overlay}></div>;
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