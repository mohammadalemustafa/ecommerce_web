import React from 'react'
import styles from './index.module.css'
import { IoSearch, IoSearchOutline } from 'react-icons/io5'
const VendorTop = ({name}) => {
  return (
    <>
      <div className={styles.vendortop}>
        <h1>{name}</h1>
        <div className={styles.vendorsearch}>
           <i> <IoSearchOutline size={25} /></i>
        <input type="text" placeholder='Search Vendors (by name or id)' />
        </div>
      </div>
    </>
  )
}

export default VendorTop
