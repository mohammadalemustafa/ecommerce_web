import React from 'react'
import styles from './index.module.css'
const OutlineBtn = ({name}) => {
  return (
    <>
    <button className={styles.outlinebtn}>{name}</button>
    </>
  )
}

export default OutlineBtn
