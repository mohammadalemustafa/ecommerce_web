import React from "react";
import styles from "./index.module.css";
import Container from "../../ui/Container";
import pass from "../../assets/reset_password.svg";
const ResetComp = ({changeScreen}) => {

  // used it for pop

  // Swal.fire({
  //   icon: "error",
  //   title: "Oops...",
  //   text:`${err.message}`,
  //   footer: '<a href="#">Why do I have this issue?</a>'
  // });
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
              <input type="password" name="email" id="" placeholder="password" />
              <input type="password" name="email" id="" placeholder="Confirm password" />
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
          <div style={{display:"flex",columnGap:"5px"
          }}>
          <button> reset password</button>
          <button onClick={changeScreen}>back</button>
          </div>
        </div>
      </div>
    </Container>
  );
};

export default ResetComp;
