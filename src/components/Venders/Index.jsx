import React from 'react'
import styles from './index.module.css'
import VendorTop from './VenderTop/Index'
import ShopTop from '../ShopGrid/ShopTop/Index'
import VendorTopCont from './VenderTopcontainer/Index'
import VendorCard from './VendorCard/Index'
import { Vendorcartdata } from '../../data/Vendorgrid'
const VendorGrid = () => {
  return (
    <>
      <div className={styles.vendorgridcontainer}>
        <VendorTopCont/>
        <div className={styles.Vendorcart}>
        {Vendorcartdata.map((it, index) => (
          <VendorCard key={index} it={it} />
        ))}
      </div>
      </div>
    </>
  )
}

export default VendorGrid
