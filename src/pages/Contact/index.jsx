import React from "react";
import styles from './index.module.css'
import Container from '../../ui/Container'
import Help from "../../components/ContactHelppagemodel";
import Banner2 from "../../components/Banner2";
import banner from "../../assets/banner-13.png";
import AboutpCart from "../../components/aboutproduct";
import { carddata } from "../../data/aboutpCartdata";
import Secondlast from "../../components/Secondlast";
import { secondlastdata } from "../../data/Secondlast";
import Viewmaplist from "../../components/Viewmap";
import ContactComp from "../../components/ContactComp";
const Contact = () => {
    return <Container>
        <Help />
        <Banner2 it={{
            id: 1,
            title1: "Stay home & get your daily neds from our shop",
            title2: "Start You'r Daily Shopping with   Nest Mart",
            desc: "Sign up for the daily newsletter",
            img: banner,
        }} />
        <Viewmaplist />
        <ContactComp />
        <AboutpCart cartdata={carddata} />
        <Secondlast productsdata={secondlastdata} />
    </Container>;
};
export default Contact;
