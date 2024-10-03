import React from "react";
import Container from "../../ui/Container";
import Banner from "../../components/Banner";
import banner1 from "../../assets/Banner/img1.png";
import banner2 from "../../assets/Banner/img2.png";

const bannerData = [
  {
    id: 1,
    title1: "Don’t miss amazing",
    title2: "grocery deals",
    desc: "Sign up for the daily newsletter",
    img: banner1,
  },
  {
    id: 2,
    title1: "Fresh Vegetables",
    title2: "Big discount",
    desc: "Save up to 50% off on your first order",
    img: banner2,
  },
];

const Home = () => {
  return (
    <Container>
      <Banner data={bannerData} />
    </Container>
  );
};

export default Home;
