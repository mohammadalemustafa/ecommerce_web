import React from "react";
import Viewmaplist from "../../components/Viewmap";
import AboutpCart from "../../components/aboutproduct";
import Secondlast from "../../components/Secondlast";
import { carddata } from "../../data/aboutpCartdata";
import { secondlastdata } from "../../data/Secondlast";
import banner from "../../assets/banner-13.png";
import Banner2 from "../../components/Banner2";
import RegisterComp from "../../components/RegisterComp";
const Register = () => {
    return <div>
        <RegisterComp />
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
};
export default Register;
