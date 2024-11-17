import React from 'react'
import ProductCard from '../ProductCard'
import { shopListData } from '../../data/ShopList'
import styles from './index.module.css'
import ShopListCart from './ShopListCart/Shoplistcart'
import { pProducts } from '../../data'
const ShopListComp = () => {
  return (
    <>
       <div className={styles.popularProducts}>
        {shopListData.map((it, index) => (
          <ShopListCart key={index} it={it} />
        ))}
      </div>
    </>
  )
}

export default ShopListComp
