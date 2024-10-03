import React from "react";
import MultiCarousel from "../../shared/Carousel";
import styles from "./index.module.css";

const responsive = {
  desktop: {
    breakpoint: { max: 3000, min: 1024 },
    items: 1,
  },
  tablet: {
    breakpoint: { max: 1024, min: 464 },
    items: 1,
  },
  mobile: {
    breakpoint: { max: 464, min: 0 },
    items: 1,
  },
};

const Banner = ({ data }) => {
  return (
    <MultiCarousel infinite={true} showDots={true} autoPlay={false} responsive={responsive}>
      {data.map((it) => {
        return <div className={styles.banner} style={{ backgroundImage: `url(${it.img})` }}></div>;
      })}
    </MultiCarousel>
  );
};

export default Banner;
