import React from "react";
import styles from "./index.module.css";
import Container from "../../ui/Container";
import pass from "../../assets/forgot_password.svg";
import { Link } from "react-router-dom";
import { useGenerateCode } from "../../hooks/useGenerateCode";
const Forgotpass = () => {
  const { stringCode } = useGenerateCode();
  return (
    <Container>
      <div className={styles.cont}>
        <div className={styles.right}>
          <div className={styles.imgCont}>
            <img src={pass} alt="" />
          </div>
          <h1>Forgot Password?</h1>
          <p>
            Not to worry, we got you! Let’s get you a new password. Please enter your email address or your Username.
          </p>
          <input type="email" name="email" id="" placeholder="Enter Email or Username" />
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
              <span>I agree to terms & Policy.</span>
            </div>
            <div>
              <spaxn>learn</spaxn>
            </div>
          </div>
          <Link to="/resetpass">
            <button> reset password</button>
          </Link>
        </div>
      </div>
    </Container>
  );
};

export default Forgotpass;
