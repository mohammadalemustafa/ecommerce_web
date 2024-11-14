import React, { useEffect, useState } from "react";
import styles from "./index.module.css";
import { BiStar } from "react-icons/bi";
import { FaStar } from "react-icons/fa";
import { FaLocationDot } from "react-icons/fa6";
import { TfiHeadphoneAlt } from "react-icons/tfi";
import CartBtn from "../../../../ui/CartBtn";

const VendorListCard = ({ it, module }) => {
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
      <img src={it.pic} alt={it.itemName} />
      <div className={styles.bottom}>
      <CartBtn name="Add" />
      </div>
      </div>
      <div className={styles.contentCont}>
        <p className={styles.cat}>{it.name}</p>
        <h4>{it.itemName}</h4>
        <p className={styles.rating}>
          {[1, 2, 3, 4, 5].map((itm, index) => (itm <= it.rating ? <FaStar key={index} color="#FDC040" /> : <BiStar key={index} />))}

          <span>({it.rating})</span>
        </p>

      <div className={styles.vendorlocation}>
        <div className={styles.vendorlocationcontainer}>
            <div className={styles.location}>
               
                <p> <i><FaLocationDot/></i> Address: 5171 W Campbell Ave undefined Kent, Utah 53127 United States</p>
            </div>
            <div className={styles.location}>
            
            <p><i><TfiHeadphoneAlt /></i>  Call Us:(+91) - 540-025-124553</p>
            </div>
        </div>

        <CartBtn name="Visit Store ->" className={styles.cartBtn} />
        </div>
        </div>

    </div>
  );
};

export default VendorListCard;
