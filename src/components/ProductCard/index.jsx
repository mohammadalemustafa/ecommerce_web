import React, { useState } from "react";
import CartBtn from "../../ui/CartBtn";
import styles from "./index.module.css";

const ProductCard = ({ it }) => {
  const [change, setChange] = useState(false);

  const onChangeImage = () => {
    setChange(!change);
  };

  return (
    <div onMouseEnter={onChangeImage} onMouseLeave={onChangeImage} className={styles.productCard}>
      <div className={styles.tag}>{it.tag}</div>
      <div className={styles.imgCont}>
        <img src={change ? it.img[1] : it.img[0]} alt={it.itemName} />
      </div>
      <div className={styles.contentCont}>
        <p className={styles.cat}>{it.name}</p>
        <h4>{it.itemName}</h4>
        <p className={styles.comp}>
          By <span>{it.company}</span>
        </p>

        <div className={styles.bottom}>
          <div className={styles.left}>
            <span className={styles.cPrice}>${it.price}</span>
            <span className={styles.oPrice}>${it.ogPrice}</span>
          </div>
          <CartBtn name="Add" />
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
