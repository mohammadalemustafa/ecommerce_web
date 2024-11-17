import React from 'react'
import { guiddata } from '../../../../data/Guiddata'
import styles from './index.module.css'
const GuidCartd = ({name,desc,img,read}) => {
  return (
    <>
    
     <div className={styles.guidcontainer}>
        <div className={styles.guidimg}>
            <img src={img} alt="" />
        </div>
        <h2>{name}</h2>
        <p>{desc}</p>
        <span>{read}</span>
    </div> 
    </>
  )
}

export default GuidCartd
