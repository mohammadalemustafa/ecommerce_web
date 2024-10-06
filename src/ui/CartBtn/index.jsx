import React from "react";
import Button from "../../widgets/Button";
import { BsCart3 } from "react-icons/bs";

import styles from "./index.module.css";

const CartBtn = ({ name }) => {
  return (
    <Button className={styles.cart}>
      <BsCart3 /> {name}
    </Button>
  );
};

export default CartBtn;
