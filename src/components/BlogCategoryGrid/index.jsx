import React, { useState } from "react";
import Container from "../../ui/Container";
import SectionTitle from "../../shared/SectionTitle";
import pic1 from "../../assets/BlogGridIcons/pic-1.svg";
import styles from "./index.module.css";
import { PiSquaresFour } from "react-icons/pi";

import { TbSortDescending2 } from "react-icons/tb";
import { RiArrowDownSLine } from "react-icons/ri";

import RightSearch from "./RightSideBar/RightSearch/Index";
import RightSideBar from "./RightSideBar/Index";
import Banner2 from "../Banner2";
import AboutpCart from "../aboutproduct";
import Secondlast from "../Secondlast";
import { carddata } from "../../data/aboutpCartdata";
import { secondlastdata } from "../../data/Secondlast";
import bannerbg from "../../assets/banner10.png";
import Dropdown from "../../widgets/Dropdown/Index";


const BlogCatGrid = () => {

  return (
    <>
      <Container>
        <div className={styles.blogcatcontainer}>
          <div className={styles.leftcontainer}>
            <div className={styles.logogridcontainer}>
              <img src={pic1} alt="milkspic" className={styles.piclogo} />
              <SectionTitle title=" Recips Articles" />
            </div>
           <Dropdown/>
           
          </div>
         
       <RightSearch/>         
        </div>
        <RightSideBar/>
        
      </Container>
    </>
  );
};

export default BlogCatGrid;
