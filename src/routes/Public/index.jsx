import React from "react";
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

const Public = ({ element, onHover }) => {
  return (
    <main>
      <Header onHover={onHover} />
      <Navbar />

      {element}
      <Banner2
        it={{
          id: 1,
          title1: "Stay home & get your daily needs from our shop",
          title2: "Start You'r Daily Shopping with   Nest Mart",
          desc: "Sign up for the daily newsletter",
          img: banner,
          img2: bannerbg,
        }}
      />
      <AboutpCart cartdata={carddata} />
      <Secondlast productsdata={secondlastdata} />
      <Footer />
    </main>
  );
};
export default Public;
