import React from 'react'
import styles from './index.module.css';
import SearchBar from '../../components/SearchBar';
import Button from '../../widgets/Button';
import { IoMdNotifications } from "react-icons/io";
import { BsFillLightbulbFill } from "react-icons/bs";
import IconCont from '../../widgets/IconCont';
import { PiLetterCircleVThin } from "react-icons/pi";
const Anavbar = () => {
    return (
        <div className={styles.cont}>
            <div>
                <SearchBar sidebar={true} />
            </div>
            <div className={styles.bntCont}>
                <Button className={styles.btn} >Add Product</Button>
                <Button className={styles.btn1} >Add Order</Button>
                <IconCont>
                    <IoMdNotifications color='white' size={25} />
                </IconCont>
                <IconCont>
                    <BsFillLightbulbFill color='white' size={25} />
                </IconCont>
                <IconCont>
                    <PiLetterCircleVThin color='white' size={25} />
                </IconCont>

            </div>
        </div>
    )
}
export default Anavbar;