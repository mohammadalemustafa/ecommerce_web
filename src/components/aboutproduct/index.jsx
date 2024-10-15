import React from "react";
import Cart from "../../components/aboutpCard";
import styles from './index.module.css';
const AboutpCart = ({ cartdata }) => {
    return <>
        <div className={styles.cont}>
            {
                cartdata.map((it) => {
                    return (
                        <Cart data={it} />
                    )
                })
            }
        </div>;
    </>
};

export default AboutpCart;

