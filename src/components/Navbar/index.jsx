import React from "react";
import styles from './index.module.css';
import Container from "../../ui/Container";
import hicon from '../../assets/nav/icon-headphone.svg'
import { FaAngleDown } from "react-icons/fa";
import { HiOutlineSquares2X2 } from "react-icons/hi2";
const Navbar = () => {
    return <Container>
        <div className={styles.navBarCont}>
            <div className={styles.navlistcont}>
                <div className={styles.dropdown}>
                    <span><HiOutlineSquares2X2 color="white" size="20px" fontWeight={800} /></span>
                    <span>
                        browse all categories
                    </span>
                    <span> <FaAngleDown size="10px"></FaAngleDown></span>
                </div>
                <ul>
                    <li>deals</li>
                    <li>
                        <span>Home</span>
                        <span> <FaAngleDown size="10px"></FaAngleDown></span>
                    </li>
                    <li>
                        <span>About</span>
                        <span></span>

                    </li> <li>
                        <span>Shop</span>
                        <span> <FaAngleDown size="10px"></FaAngleDown></span>

                    </li> <li>
                        <span>Vendors</span>
                        <span> <FaAngleDown size="10px"></FaAngleDown></span>

                    </li> <li>
                        <span> Mega menu</span>
                        <span> <FaAngleDown size="10px"></FaAngleDown></span>

                    </li>
                    <li>
                        <span>Blog</span>
                        <span> <FaAngleDown size="10px"></FaAngleDown></span>

                    </li>
                    <li>
                        <span>Pages</span>
                        <span> <FaAngleDown size="10px"></FaAngleDown></span>

                    </li> <li>
                        <span>Contact</span>
                        <span></span>
                    </li>
                </ul>
            </div>
            <div className={styles.right}>
                <div className={styles.imgCont}><img src={hicon} alt="" /></div>
                <div className={styles.iconCont}>
                    <span>1900 - 888</span>
                    <span>24/7 Support Center</span>
                </div>
            </div>
        </div>;
    </Container>

};

export default Navbar;
