import React, { useReducer } from "react";
import styles from "./index.module.css";
import Container from "../../ui/Container";
import pass from "../../assets/reset_password.svg";
import axios from "axios";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";

const reducerFn = (state, action) => {
  switch (action.type) {
    case "NEWPASS":
      return { ...state, ...action.payload };

    default:
      return state;
  }
};

const ResetComp = ({ changeScreen, fpDta }) => {
  const navigate = useNavigate();
  const userdata = useSelector((state) => state.auth.userdata);
  const [state, dispatch] = useReducer(reducerFn, {
    password: "",
    cpassword: "",
  });

  const onGetNewPassword = (e) => {
    let id = e.target.id;
    let val = e.target.value;

    let newData = { [id]: val };

    dispatch({ type: "NEWPASS", payload: newData });
  };

  const onGenerateNewPassword = () => {
    let isExistingUser = userdata.find((it) => it.email === fpDta.email);
    let copyData = isExistingUser && { ...isExistingUser };

    if (isExistingUser) {
      copyData["password"] = state.password;
    }

    const config = {
      url: "https://ecommerce-web-69896-default-rtdb.firebaseio.com/users.json",
      method: "PUT",
      data: copyData,
    };

    axios(config)
      .then((res) => {
        navigate("/");
      })
      .catch((err) => console.log(err));
  };

  return (
    <Container>
      <div className={styles.cont}>
        <div className={styles.right}>
          <div className={styles.imgCont}>
            <img src={pass} alt="" />
          </div>
          <h1>Set new password</h1>
          <p>Please create a new password that you don’t use on any other site.</p>
          <div className={styles.inputCont}>
            <div>
              <input onChange={onGetNewPassword} type="password" name="password" id="password" placeholder="password" />
              <input
                onChange={onGetNewPassword}
                type="password"
                name="confirmpassword"
                id="cpassword"
                placeholder="Confirm password"
              />
            </div>

            <div className={styles.r1}>
              <h1>Password must:</h1>
              <p>Be between 9 and 64 characters</p>
              <p>Include at least two of the following:</p>
              <li>An uppercase character</li>
              <li>A lowercase character</li>
              <li>A number</li>
              <li>A special character</li>
            </div>
          </div>
          <div style={{ display: "flex", columnGap: "5px" }}>
            <button onClick={onGenerateNewPassword}> reset password</button>
            <button onClick={changeScreen}>back</button>
          </div>
        </div>
      </div>
    </Container>
  );
};

export default ResetComp;
