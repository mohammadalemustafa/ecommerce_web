import React from 'react'
import styles from './index.module.css';
import { motion } from 'framer-motion';
const Btn = ({ btnName, show }) => {
    return (
        <motion.button
            onClick={() => show(btnName)}
            whileHover={{ translateY: -10, boxShadow: "rgba(0, 0, 0, 0.25) 0 54px 55px, rgba(0, 0, 0, 0.12) 0px -12px 30px, rgba(0, 0, 0, 0.12) 0px 4px 6px, rgba(0, 0, 0, 0.17) 0px 12px 13px, rgba(0, 0, 0, 0.09) 0px -3px 5px" }}
            transition={{ duration: 1, }}
            className={styles.btnCont}>{btnName}</motion.button>
    )
}
export default Btn;