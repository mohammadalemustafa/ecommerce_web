import React from 'react'
import styles from './index.module.css';
import { sidebarData } from '../admindata/sidebardata';
import { FaAngleRight } from "react-icons/fa";
const Sidebar = () => {
    return (
        <div className={styles.sidebarCont}>
            <div className={styles.logo}>
                nest
            </div>
            <ul className={styles.ul}>
                {
                    sidebarData.map((item) => {
                        return (
                            <li>
                                <div className={styles.iconCont}>
                                    <i> {item.logo}</i>
                                    <span>{item.name}</span>
                                </div>
                                {item.id === 2 && <span className={styles.icon}><FaAngleRight /></span>}
                                {item.id === 3 && <span className={styles.icon}><FaAngleRight /></span>}
                                {item.id === 4 && <span className={styles.icon}><FaAngleRight /></span>}
                                {item.id === 5 && <span className={styles.icon}><FaAngleRight /></span>}
                                {item.id === 7 && <span className={styles.icon}><FaAngleRight /></span>}
                                {item.id === 18 && <span className={styles.icon}><FaAngleRight /></span>}
                            </li>
                        )
                    })
                }
            </ul>
        </div>
    )
}
export default Sidebar