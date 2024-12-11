import React from "react";
import styles from "./index.module.css";
import img1 from "../../assets/thumbnail-3.jpg";
import img2 from "../../assets/thumbnail-2.jpg";
import { useDispatch, useSelector } from "react-redux";
import { cartActions } from "../../Store/cart";

const CartDrop = () => {
  const dispatch = useDispatch();
  const cartData = useSelector((state) => state.cart.cartData);

  const totalAmount = cartData.reduce((prev, curr) => prev + +(curr.qty * curr.price).toFixed(2), 0);

  const onRemoveItem = (id) => {
    dispatch(cartActions.onRemoveItem(id));
  };
  return (
    <div className={styles.cont}>
      <div className={styles.acc}>
        {cartData.length > 0 ? (
          cartData.map((it) => {
            return (
              <div>
                <div className={styles.imgCont}>
                  <img src={it.img[0]} alt="" />
                </div>
                <div>
                  <span className={styles.p}>
                    <span>{it.itemName}</span>
                    <span onClick={() => onRemoveItem(it.id)}>X</span>
                  </span>
                  <p>
                    {it.qty} × ${it.price}
                  </p>
                </div>
              </div>
            );
          })
        ) : (
          <p>No Data!</p>
        )}

        <div className={styles.bottom}>
          <div className={styles.price}>
            <span>Total</span> <span>$ {totalAmount.toFixed(2)}</span>
          </div>

          <span className={styles.btnCont}>
            <span>
              <button>view Cart</button>
            </span>
            <span>
              <button>checkout</button>
            </span>
          </span>
        </div>
      </div>
    </div>
  );
};

export default CartDrop;
