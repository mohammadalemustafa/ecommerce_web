import React from 'react'
import styles from './index.module.css';
import { motion } from 'framer-motion';
import { IoRemove } from 'react-icons/io5';
import IconCont from '../../widgets/IconCont';
import logo from '../../assets/logo.svg';
import SearchBar from '../SearchBar';
import { sidebardata } from '../../data/sidebardata.js'
import { FaAngleDoubleDown } from 'react-icons/fa';
import { useNavigate } from 'react-router-dom';
import { Iconsdata } from '../../data/Sicons.jsx'
const Sidebar = () => {
    const Naviagte = useNavigate();
    const onNavigate = (p) => {
        Naviagte(p);
    }
    return (
        <motion.div
            initial={{ width: 0 }}
            transition={{ duration: .3 }}
            animate={{ width: 350 }}
            className={styles.sidebarCont}>
            <div className={styles.logo}>
                <div className={styles.imgCont}>
                    <img src={logo} alt="" />
                </div>
                <IconCont><IoRemove /></IconCont>
            </div>
            <div className={styles.serchBarCont}>
                <SearchBar sidebar="true" />
            </div>
            <div className={styles.accordion}>
                <ul>
                    {sidebardata.map((p, index) => <li key={index}>{p} <span><FaAngleDoubleDown /></span></li>)}
                </ul>
            </div>

            <div className={styles.sinup}>
                <span>Our Location</span>
                <span><strong onClick={() => onNavigate('/login')}>Login In</strong><strong onClick={() => onNavigate('/register')}>/Sin up</strong></span>
                <span>+9628554907</span>
            </div>
            <div className={styles.sIcon}>
                <h3>Follow Us</h3>
                <div className={styles.icons}>
                    {

                        Iconsdata.map((data) => <IconCont> {data}</IconCont>)

                    }
                </div>
            </div>
            <div className={styles.footer}>
                <p>© 2024, <span className={styles.nest}> Nest</span> - HTML Ecommerce Template</p>
                <p>All rights reserved </p>
            </div>
        </motion.div>
    )
}

export default Sidebar