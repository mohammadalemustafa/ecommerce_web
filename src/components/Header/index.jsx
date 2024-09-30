import React from "react";
import Item from "./Item/inde";
import { FaAngleDown } from "react-icons/fa";
import { GiRecycle } from "react-icons/gi";
import { GoHeart } from "react-icons/go";
import { IoCartOutline } from "react-icons/io5";
import { LuUser } from "react-icons/lu";

import styles from "./index.module.css";
import Container from "../../ui/Container";
import { leftMenu } from "../../data/header";
import logo from "../../assets/logo.svg";
import Icon from "../../ui/Icon";

const icons = [
  { id: 1, name: "Compare", counter: "3", icon: <GiRecycle size={30} /> },
  { id: 2, name: "Wishlists", counter: "6", icon: <GoHeart size={30} /> },
  { id: 3, name: "Cart", counter: "2", icon: <IoCartOutline size={30} /> },
  { id: 4, name: "Account", counter: null, icon: <LuUser size={30} /> },
];

const Header = () => {
  return (
    <header className={styles.header}>
      <Container>
        <div className={styles.content}>
          <ul className={styles.left}>
            {leftMenu.map((it) => (
              <Item key={it.id} name={it.name} to={it.to} />
            ))}
          </ul>
          <p>Trendy 25silver jewelry, save up 35% off today</p>
          <ul className={styles.right}>
            <Item name="Need help? Call Us:" value="+ 1800 900" />
            <Item name="English" value={<FaAngleDown />} />
            <Item name="USD" value={<FaAngleDown />} />
          </ul>
        </div>
        <div className={styles.content}>
          <div>
            <img src={logo} alt="logo" />
          </div>
          <div></div>
          <div></div>
          <div className={styles.iconCont}>
            {icons.map((it) => (
              <Icon key={it.id} counter={it.counter} name={it.name}>
                {it.icon}
              </Icon>
            ))}
          </div>
        </div>
      </Container>
    </header>
  );
};

export default Header;
