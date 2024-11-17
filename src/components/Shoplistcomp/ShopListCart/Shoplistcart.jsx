import React, { useEffect, useState } from "react";
import styles from "./index.module.css";
import { BiStar } from "react-icons/bi";
import { FaStar } from "react-icons/fa";
import CartBtn from "../../../ui/CartBtn";
import { TiArrowShuffle } from "react-icons/ti";

const ShopListCart = ({ it, module }) => {
  const [change, setChange] = useState(false);

  const [bg, setBg] = useState(false);

  const onChangeImage = () => {
    setChange(!change);
  };

  useEffect(() => {
    switch (it.tag.toLowerCase()) {
      case "hot":
        setBg("#f74b81");
        break;
      case "new":
        setBg("#3BB77E");
        break;
      case "sale":
        setBg("#67bcee");
        break;
      default:
        setBg("#f59758");
    }
  }, [it.tag]);

  return (
    
    <div onMouseEnter={onChangeImage} onMouseLeave={onChangeImage} className={styles.productCard}>
      {it.tag && (
        <div style={{ backgroundColor: bg }} className={styles.tag}>
          {it.tag}
        </div>
      )}
      <div className={styles.imgCont}>
        <img src={change ? it.img[1] : it.img[0]} alt={it.itemName} />
      </div>
      <div className={styles.contentCont}>
        <p className={styles.cat}>{it.name}</p>
        <h4>{it.itemName}</h4>
        <p className={styles.rating}>
            <div className="rtg">
          {[1, 2, 3, 4, 5].map((itm, index) => (itm <= it.rating ? <FaStar key={index} color="#FDC040" /> : <BiStar key={index} />))}

          <span>({it.rating})</span>
          </div>
          <span>{it.weight}g</span>
        </p>
        <p className={styles.comp}>
          {it.desc}
        </p>

        <div className={styles.bottom}>
          <div className={styles.left}>
            <span className={styles.cPrice}>${it.price}</span>
            <span className={styles.oPrice}>${it.ogPrice}</span>
          </div>
        </div>
        <div className={styles.shoplistbutton}>
        {module !== "daily" && <CartBtn name="Add to Cart" className={styles.cartBtn} />}
        <span ><TiArrowShuffle />Add Compare</span>
        </div>

        {/* {module === "daily" && <CartBtn name="Add" className={styles.cartBtn} />} */}
      </div>
    </div>
  );
};

export default ShopListCart;
