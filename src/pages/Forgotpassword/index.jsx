import React from "react";
import Container from "../../ui/Container";
import LoginComp from "../../components/LoginComp";
import Banner2 from "../../components/Banner2";
import AboutpCart from "../../components/aboutproduct";
import Secondlast from "../../components/Secondlast";
import { carddata } from "../../data/aboutpCartdata";
import { secondlastdata } from "../../data/Secondlast";
import banner from "../../assets/banner-13.png";
import ForgotComp from '../../components/ForgotComp'
const Forgotpass = () => {
    return <Container>
        <div>
            <ForgotComp />
            <Banner2 it={{
                id: 1,
                title1: "Stay home & get your daily neds from our shop",
                title2: "Start You'r Daily Shopping with   Nest Mart",
                desc: "Sign up for the daily newsletter",
                img: banner,
            }} />
            <AboutpCart cartdata={carddata} />
            <Secondlast productsdata={secondlastdata} />
        </div>;
    </Container>;
};
export default Forgotpass;
