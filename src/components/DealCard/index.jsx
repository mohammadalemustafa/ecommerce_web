import React from "react";
import styles from "./index.module.css";
import { FaStar } from "react-icons/fa";
import { BiStar } from "react-icons/bi";
import CartBtn from "../../ui/CartBtn";

const DealCard = ({ it }) => {
  return (
    <div className={styles.dealCard}>
      <div className={styles.productImg}>
        <img src={it.img} alt={it.itemName} />
      </div>

      <div className={styles.contt}>
        <div className={styles.time}>
          <div>
            <span>162</span>
            <span>Days</span>
          </div>
          <div>
            <span>07</span>
            <span>Hours</span>
          </div>
          <div>
            <span>45</span>
            <span>Mins</span>
          </div>
          <div>
            <span>14</span>
            <span>Sec</span>
          </div>
        </div>
        <div className={styles.contentCont}>
          <p className={styles.cat}>{it.name}</p>
          <h4>{it.itemName}</h4>
          <p className={styles.rating}>
            {[1, 2, 3, 4, 5].map((itm) => (itm <= it.rating ? <FaStar color="#FDC040" /> : <BiStar />))}

            <span>({it.rating})</span>
          </p>
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
    </div>
  );
};

export default DealCard;
