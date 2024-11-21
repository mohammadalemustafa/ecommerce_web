import React, { useReducer } from "react";
import styles from "./index.module.css";
import AccountDrop from "../../components/AccountDropd";
import CartDrop from "../../components/CartDrop";
import { useNavigate } from "react-router-dom";

const Icon = ({ children, counter, name }) => {
  const navigate = useNavigate();
  const reducer = (state, action) => {
    if (action.type === "ACCOUNT_HOVER") {
      return { ...state, accountHover: !state.accountHover };
    } else if (action.type === "CART_HOVER") {
      return { ...state, cartHover: !state.cartHover };
    }
  };
  const onHover = () => {
    dispatch({ type: "ACCOUNT_HOVER" });
  };
  const onCartHover = () => {
    dispatch({ type: "CART_HOVER" });
  };

  const [state, dispatch] = useReducer(reducer, {
    accountHover: false,
    cartHover: false,
  });
  const onClick = (p) => {
    navigate(p);
  }
  return (
    <div
      onClick={() => name === "Compare" ? onClick('/compare') : name === "Wishlists" ? onClick('/wishlists') : ""}
      onMouseEnter={(!counter && onHover) || (name === "Cart" && onCartHover)}
      onMouseLeave={(!counter && onHover) || (name === "Cart" && onCartHover)}
      className={styles.icon}
    >
      {state.accountHover && <AccountDrop />}
      {state.cartHover && <CartDrop />}
      <div className={styles.left}>
        {children}
        {name !== "Account" && <>{counter > 0 ? <p>{counter}</p> : <p>{0}</p>}</>}
      </div>
      <p className={styles.right}>{name}</p>
    </div >
  );
};
export default Icon;
