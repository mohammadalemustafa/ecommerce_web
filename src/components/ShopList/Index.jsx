import React from "react";
import styles from './index.module.css'
import RightCardCont from "../BlogCategoryGrid/RightSideBar/RightCardCont/Index";
import ShopTop from "../ShopGrid/ShopTop/Index";
import ShopListComp from "../Shoplistcomp/Index";
import DealsOfTheYear from "../DealsOfTheYear";
import SectionTitle from "../../shared/SectionTitle";
const Shoplist = () => {
  return (
    <>
    <div className={styles.shoplistcontainer}>
      <RightCardCont />
      <div className={styles.shoprigntcontainer}>
        <ShopTop />
        <ShopListComp/>
        <SectionTitle title="Deals Of The Day"/>
        <DealsOfTheYear/>
      </div>
      </div>
    </>
  );
};

export default Shoplist;
