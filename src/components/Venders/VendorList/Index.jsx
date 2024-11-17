import React from 'react'
import styles from './index.module.css'
import VendorTopCont from '../VenderTopcontainer/Index'
import VendorCard from '../VendorCard/Index'
import { Vendorcartdata } from '../../../data/Vendorgrid'
import VendorListCard from './VendorListCart/Index'
const VendorList = () => {
  return (
    <>
     <div className="vendorlistcomp">
    <VendorTopCont name="Vendors List"/>
    <div className={styles.Vendorcart}>
        {Vendorcartdata.map((it, index) => (
          <VendorListCard key={index} it={it} />
        ))}
        </div>
    </div> 
    </>
  )
}

export default VendorList
