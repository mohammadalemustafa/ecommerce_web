import React from "react";
import styles from './index.module.css';
import Newsletter from "../../ui/Newsletter";
import img from "../../assets/banner-13.png";
const Banner2 = ({ it }) => {
    return <div style={{ backgroundImage: `url(${it.img})` }} className={styles.banner2cont}>
        <div className={styles.imgCont}>
            <img src={img} alt="" />
        </div>
        <div className={styles.content}>
            <div className={styles.top}>
                {it.title ? (
                    <h4>{it.title}</h4>
                ) : (
                    <h2>
                        {it.title1}


                    </h2>
                )}
                {it.desc && <p>{it.desc}</p>}
            </div>
            <Newsletter />
        </div>
    </div>;
};

export default Banner2;
