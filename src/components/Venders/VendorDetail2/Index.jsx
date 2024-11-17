import React from 'react'
import VendorDCL from '../VendorDetail1/VendorDetailLeftCart/Index'
import styles from './index.module.css'
import VendorListCard from '../VendorList/VendorListCart/Index'
import { Vendorcartdata } from '../../../data/Vendorgrid'
import ShopListComp from '../../Shoplistcomp/Index'
import SectionTitle from '../../../shared/SectionTitle'
import DealsOfTheYear from '../../DealsOfTheYear'
import RightCardCont from '../../BlogCategoryGrid/RightSideBar/RightCardCont/Index'
import ShopTop from '../../ShopGrid/ShopTop/Index'
const VendorDetail2 = () => {
  return (
    <>
     <div className={styles.vendordetail2}>
        <div className={styles.vendordcl}>
        <VendorDCL bg={true}/>
        </div>
        <div className={styles.vendorlistcontentcontainer}>
            <RightCardCont  both={true} />
        <div className={styles.vendordetal2list}>
            <ShopTop/>
       <ShopListComp/>
        <SectionTitle title="Deals Of The Day"/>
        <DealsOfTheYear/>
       </div>
        </div>
      
    </div> 
    </>
  )
}

export default VendorDetail2
