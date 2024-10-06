import React from "react";
import { pProducts } from "../../data";
import ProductCard from "../ProductCard";

import styles from "./index.module.css";

const PopularProducts = () => {
  return (
    <div className={styles.popularProducts}>
      {pProducts.map((it) => (
        <ProductCard key={it.id} it={it} />
      ))}
    </div>
  );
};

export default PopularProducts;
