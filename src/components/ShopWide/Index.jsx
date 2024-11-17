import React from 'react'
import ShopTop from '../ShopGrid/ShopTop/Index'
import styles from './index.module.css'
import ProductCard from '../ProductCard'
import { pProducts } from '../../data'
import SectionTitle from '../../shared/SectionTitle'
import DealsOfTheYear from '../DealsOfTheYear'
const ShopWide = () => {
  return (
    <>
     <div className={styles.shopWideContainer}>
        <ShopTop/>
        <div className={styles.shopwidepopularcart}>
        {pProducts.map((it, index) => (
          <ProductCard key={index} it={it} />
        ))}
        </div>
        <SectionTitle title="Deals of The Years"/>
        <DealsOfTheYear/>
    </div> 
    </>
  )
}

export default ShopWide
