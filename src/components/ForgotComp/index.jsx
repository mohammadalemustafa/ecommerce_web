import React, { useReducer } from "react";
import styles from "./index.module.css";
import Container from "../../ui/Container";
import pass from "../../assets/forgot_password.svg";
import { useGenerateCode } from "../../hooks/useGenerateCode";
import { useSelector } from "react-redux";

const reducerFn = (state, action) => {
  switch (action.type) {
    case "FORGOT":
      return { ...state, ...action.payload, termsAccepted: action.payload.termsAccepted === "on" ? false : true };

    default:
      return state;
  }
};

const Forgotpass = ({ onClick, stringCode }) => {
  const userdata = useSelector((state) => state.auth.userdata);

  const [state, dispatch] = useReducer(reducerFn, {
    username: "",
    sCode: "",
    termsAccepted: false,
  });

  const onGetUser = (e) => {
    let id = e.target.id;
    let val = e.target.checked ? e.target.checked : e.target.value;

    let newData = { [id]: val };

    dispatch({ type: "FORGOT", payload: newData });
  };
  console.log(state);
  console.log(userdata);

  const onVerifyUser = () => {
    const isExisting = userdata.find((it) => it.username === state.username || it.email === state.username);

    if (isExisting) {
      onClick();
    }
  };

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
          <input onChange={onGetUser} type="email" name="email" id="username" placeholder="Enter Email or Username" />
          <div className={styles.securityCode}>
            <input onChange={onGetUser} type="text" name="" id="sCode" placeholder="security code" />
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
                <input onChange={onGetUser} type="checkbox" id="termsAccepted" />
              </span>
              <span>I agree to terms & Policy.</span>
            </div>
            <div>
              <spaxn>learn</spaxn>
            </div>
          </div>
          {/* <Link to="/resetpass"> */}
          <button onClick={onVerifyUser}> reset password</button>
          {/* </Link> */}
        </div>
      </div>
    </Container>
  );
};

export default Forgotpass;
