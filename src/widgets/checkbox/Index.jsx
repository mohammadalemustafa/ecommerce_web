import React from 'react'
import styles from './index.module.css'
const Checkbox = ({bg}) => {
  return (
    <>
     <div style={{backgroundColor:bg}} className={styles.checkbox}></div>
    </>
  )
}

export default Checkbox
