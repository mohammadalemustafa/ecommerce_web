import React from 'react'
import styles from './index.module.css';
const DashCard = ({ data }) => {
    return (
        <div className={styles.cardCont} style={{ background: data.bg }}>
            <div className={styles.left}>
                <span>{data.name}</span>
                <strong>{data.value}</strong>
            </div>
            <i className={styles.iconCont} style={{ background: data.iBg }} >{data.icon}</i>
        </div>
    )
}

export default DashCard