import React from 'react'
import styles from './index.module.css'
import VendorCard from '../VendorCard/Index'
import VendorTop from '../VenderTop/Index'
import ShopGrid from '../../ShopGrid/Index'
const VendorDetails1 = () => {
  return (
    <>
      <div className={styles.vendordetails1}>
        <VendorTop name="Nest Food Store"/>
        <ShopGrid name="true"/>
      </div>
    </>
  )
}

export default VendorDetails1
