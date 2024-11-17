import React from "react";
import styles from "./index.module.css";
import RightSideBar from "../BlogCategoryGrid/RightSideBar/Index";
import Container from "../../ui/Container";
import RightCardCont from "../BlogCategoryGrid/RightSideBar/RightCardCont/Index";
import Dropdown from "../../widgets/Dropdown/Index";
import ProductCard from "../ProductCard";
import { shoppProducts } from "../../data/shopPopularProduc";
import DealsOfTheYear from "../DealsOfTheYear";
import SectionTitle from "../../shared/SectionTitle";
import ShopTop from "./ShopTop/Index";
const ShopGrid = ({name}) => {
  return (
    <>
      <Container>
        <div className={styles.shopgridcontainer}>
          
        <RightCardCont vendor={name} />
        <div className={styles.shoprigntcontainer}>
          <ShopTop/>
          <div className={styles.shoppopularproduct}>
          {shoppProducts.map((it, index) => (
          <ProductCard key={index} it={it} />
        ))}
          </div>
          <div className={styles.shopdealyear}>
          <SectionTitle title="Deals of the day"/>
          <DealsOfTheYear/>
          </div>
          </div>
        </div>
      </Container>
    </>
  );
};

export default ShopGrid;
