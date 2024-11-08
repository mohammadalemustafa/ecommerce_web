import React from "react";
import styles from "./index.module.css";
// import Container from "../../ui/Container";
import img from "../../assets/login-1.png";
import { useGenerateCode } from "../../hooks/useGenerateCode";
// import { Link } from "react-router-dom";

const LoginComp = ({ onClick, onGoToForgot }) => {
  const { stringCode } = useGenerateCode();

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
          <input type="email" name="email" id="" placeholder="Enter Email or Username" />
          <input type="password" name="" id="password" placeholder="password" />
          <div className={styles.securityCode}>
            <input type="text" name="" id="" placeholder="security code" />
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
                <input type="checkbox" />
              </span>
              <span> Remember me</span>
            </div>
            <div>
              <span onClick={onGoToForgot}>Forgot Password</span>
            </div>
          </div>
          <button> Log In</button>
        </div>
      </div>
      {/* </Container> */}
    </>
  );
};

export default LoginComp;
