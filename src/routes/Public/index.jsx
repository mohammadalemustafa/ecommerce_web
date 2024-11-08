import React, { useState } from "react";
import Header from "../../components/Header";
import Navbar from "../../components/Navbar";
import Footer from "../../components/Footer";
import AboutpCart from "../../components/aboutproduct";
import Secondlast from "../../components/Secondlast";
import { carddata } from "../../data/aboutpCartdata";
import { secondlastdata } from "../../data/Secondlast";
import banner from "../../assets/banner-9.png";
import bannerbg from "../../assets/banner10.png";
import Banner2 from "../../components/Banner2";
import Mainportal from "../../Modal/mainportal";
import LoginComp from "../../components/LoginComp";
import { useDispatch, useSelector } from "react-redux";
import { uiActions } from "../../Store/ui";
import RegisterComp from "../../components/RegisterComp";
import Forgotpass from "../../components/ForgotComp";
const Public = ({ element, onHover }) => {
  const [scr, setScr] = useState("login");
  const dispatch = useDispatch();
  const loginModal = useSelector((state) => state.ui.loginModal);
  const onClose = () => {
    setScr("login");
    dispatch(uiActions.onOpenLoginModal(false));
  };
  const onChangeScreen = (s) => {
    setScr(s);
  };
  let screen = "";
  switch (scr) {
    case "login":
      screen = <LoginComp onClick={() => onChangeScreen("register")} onGoToForgot={() => onChangeScreen("forgot")} />;
      break;
    case "register":
      screen = <RegisterComp onClick={() => onChangeScreen("login")} />;
      break;
    default:
      screen = <Forgotpass onClick={onChangeScreen} />;
  }
  return (
    <main>
      {loginModal && <Mainportal onClose={onClose}>{screen}</Mainportal>}
      <Header onHover={onHover} />
      <Navbar />
      {element}
      <Banner2
        it={{
          id: 1,
          title1: "Stay home & get your daily needs from our shop",
          title2: "Start You'r Daily Shopping with   Nest Mart",
          desc: "Sign up for the daily newsletter",
          img:banner,
          img2:bannerbg,
        }}
      />
      <AboutpCart cartdata={carddata} />
      <Secondlast productsdata={secondlastdata} />
      <Footer />
    </main>
  );
};
export default Public;
