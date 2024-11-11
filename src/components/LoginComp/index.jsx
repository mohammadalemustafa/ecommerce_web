import React, { useEffect, useReducer, useState } from "react";
import styles from "./index.module.css";
// import Container from "../../ui/Container";
import img from "../../assets/login-1.png";
import axios from "axios";
import { useDispatch, useSelector } from "react-redux";
import { authAction } from "../../Store/auth";
import { uiActions } from "../../Store/ui";
// import { Link } from "react-router-dom";

const reducerFn = (state, action) => {
  switch (action.type) {
    case "LOGIN":
      return { ...state, ...action.payload, remember: action.payload.remember === "on" ? false : true };

    default:
      return state;
  }
};

const LoginComp = ({ onClick, onGoToForgot, stringCode }) => {
  const dispatchAction = useDispatch();
  const userdata = useSelector((state) => state.auth.userdata);

  const [state, dispatch] = useReducer(reducerFn, {
    username: "",
    password: "",
    sCode: "",
    remember: "",
  });

  const onGetData = (e) => {
    let id = e.target.id;
    let val = e.target.checked ? e.target.checked : e.target.value;

    let newData = { [id]: val };

    dispatch({ type: "LOGIN", payload: newData });
  };

  const onLoginUser = () => {
    const isExistinguser = userdata.find((it) => it.email === state.username && it.password === state.password);

    if (isExistinguser) {
      const { password, cpassword, ...rest } = isExistinguser;
      localStorage.setItem("login", JSON.stringify(rest));
      dispatchAction(uiActions.onOpenLoginModal(false));
      dispatchAction(authAction.onAuthChange());
    }
  };

  return (
    <>
      {/* <Container> */}
      <div className={styles.cont}>
        <div className={styles.left}>
          <img src={img} alt="" />
        </div>
        <div className={styles.right}>
          <h1>Login</h1>
          {/* <Link to="/register"> */}
          <p>
            Don't have an account? <span onClick={onClick}>Create here</span>
          </p>
          {/* </Link> */}
          <input onChange={onGetData} type="email" name="email" id="username" placeholder="Enter Email or Username" />
          <input onChange={onGetData} type="password" name="" id="password" placeholder="password" />
          <div className={styles.securityCode}>
            <input onChange={onGetData} type="text" name="" id="sCode" placeholder="security code" />
            <div className={styles.code}>
              <span>{stringCode[0]}</span>
              <span>{stringCode[1]}</span>
              <span>{stringCode[2]}</span>
              <span>{stringCode[3]}</span>
            </div>
          </div>
          <div className={styles.rememberpass}>
            <div>
              <span>
                <input onChange={onGetData} type="checkbox" id="remember" />
              </span>
              <span> Remember me</span>
            </div>
            <div>
              <span onClick={onGoToForgot}>Forgot Password</span>
            </div>
          </div>
          <button onClick={onLoginUser}> Log In</button>
        </div>
      </div>
      {/* </Container> */}
    </>
  );
};

export default LoginComp;
