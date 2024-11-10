import React, { useEffect, useReducer } from "react";
import styles from "./index.module.css";
import Container from "../../ui/Container";
import { BiBookBookmark } from "react-icons/bi";
import Rfrom from "../RegisterFrom";
import { FaApple, FaFacebookSquare, FaGoogle } from "react-icons/fa";
import axios from "axios";

const reducerFunc = (state, action) => {
  switch (action.type) {
    case "DATA":
      return { ...state, ...action.payload, termsAccepted: action.payload.termsAccepted === "on" ? false : true };

    case "USER":
      return { ...state, userType: action.payload.customer ? 1 : 2 };

    default:
      return state;
  }
};

const RegisterComp = ({ onClick, stringCode }) => {
  const [state, dispatch] = useReducer(reducerFunc, {
    username: "",
    email: "",
    password: "",
    cpassword: "",
    sCode: "",
    userType: 1,
    termsAccepted: false,
  });

  console.log(state);

  const onGetData = (e) => {
    let id = e.target.id;

    let val = !e.target.checked ? e.target.value : e.target.checked;

    const newData = { ...state, [id]: val };

    dispatch({ type: "DATA", payload: newData });
  };

  const onUserType = (e) => {
    let id = e.target.id;
    let val = e.target.checked;

    const newData = { [id]: val };

    dispatch({ type: "USER", payload: newData });
  };

  useEffect(() => {
    axios.get("https://ecommerce-web-69896-default-rtdb.firebaseio.com/users.json").then((res) => {
      console.log(res);
    });
  }, []);

  const onSubmitData = () => {
    const config = {
      url: "https://ecommerce-web-69896-default-rtdb.firebaseio.com/users.json",
      method: "POST",
      data: state,
    };

    axios(config)
      .then((res) => {
        console.log(res);
      })
      .catch((err) => {});
  };

  return (
    <Container>
      <div className={styles.cont}>
        <div className={styles.right}>
          <h1>Create an Account</h1>
          <p>
            Already have an account? <span onClick={onClick}>login</span>
          </p>
          {/* </Link> */}
          <input
            className={styles.forminput}
            onChange={onGetData}
            type="text"
            name=""
            id="username"
            placeholder="Username"
          />
          <input
            className={styles.forminput}
            onChange={onGetData}
            type="email"
            name="email"
            id="email"
            placeholder="Enter Email"
          />
          <input
            className={styles.forminput}
            onChange={onGetData}
            type="password"
            name=""
            id="password"
            placeholder="password"
          />
          <input
            className={styles.forminput}
            onChange={onGetData}
            type="password"
            name=""
            id="cpassword"
            placeholder="confirm password"
          />

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
            <span>
              <input onChange={onUserType} type="radio" name="chech" id="customer" checked={state.customer} />
              <span className={styles.s}>I am a customer</span>
            </span>
            <span>
              <input onChange={onUserType} type="radio" name="chech" id="vendor" checked={state.vendor} />
              <span className={styles.s}>I am a vendor</span>
            </span>
          </div>

          <div className={styles.rememberpass}>
            <span>
              <input onChange={onGetData} type="checkbox" name="" id="termsAccepted" checked={state.termsAccepted} />
              <span>I agree to terms & Policy.</span>
            </span>

            <span>
              <span>
                <BiBookBookmark></BiBookBookmark>
              </span>
              <span className={styles.l}>Learn more</span>
            </span>
          </div>
          <button onClick={onSubmitData}>submit & register </button>
          <p className={styles.p}>
            Note:Your personal data will be used to support your experience throughout this website, to manage access to
            your account, and for other purposes described in our privacy policy
          </p>
        </div>
        <div className={styles.left}>
          <Rfrom bg="#1877f2" from="continue with facebook" logo={<FaFacebookSquare size="30px" />} />
          <Rfrom
            color="rgb(126, 126, 126)"
            bg="rgb(242, 243, 244)"
            from="continue with google"
            logo={<FaGoogle size="30px" />}
          />
          <Rfrom bg="black" from="continue with Apple" logo={<FaApple size="30px" />} />
        </div>
      </div>
    </Container>
  );
};

export default RegisterComp;
