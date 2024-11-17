import React, { useState } from 'react'
import styles from './index.module.css';
import Button from '../../../widgets/Button';
import CartBtn from '../../../ui/CartBtn';
import Btn from './Btn';
import Pdescriotion from './Decription'
import AdditionalInfo from '../Additionalinfo';
import Vendor from '../Vendor';


const Descriotion = () => {
    const [hide, setHide] = useState("Description");

    const show = (para) => {
        setHide(para);
    }
    return (
        <div className={styles.listCont}>
            <div className={styles.btnCont}>
                <Btn show={show} btnName="Description" />
                <Btn show={show} btnName="Additional info" />
                <Btn show={show} btnName="Vendor" />
                <Btn show={show} btnName="Reviewer" />
            </div>
            {hide === "Description" && <Pdescriotion />}
            {hide === "Additional info" && <AdditionalInfo />}
            {hide === "Vendor" && <Vendor />}
        </div>
    )
}

export default Descriotion