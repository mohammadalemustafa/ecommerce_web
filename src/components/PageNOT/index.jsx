import React from "react";
import styles from './index.module.css'
import img from '../../assets/page-404.png';
import { BiHome } from "react-icons/bi";
const PagesNoTFound = () => {
    return <div className={styles.cost}>
        <div className={styles.main}>
            <div className={styles.imgCont}>
                <img src={img} alt="" />
            </div>
            <h1>Page Not Found</h1>
            <p>The link you clicked may be broken or the page may have been removed.
                visit the <span>About</span> or <span>Contact</span> us about the problem</p>
            <input type="search" name="" id="" placeholder="search" />
            <button> <span><BiHome size={20} /></span> Back to Home Page</button>
        </div>
    </div>;
};

export default PagesNoTFound;
