import React from 'react'
import styles from './index.module.css'
import Orders from '../MyAccount/Orders/Index'
import TrendingNow from '../BlogCategoryGrid/RightSideBar/TrendingNow/Index'
import SectionMenu from '../../shared/SectionMenu'
import ProductCard from '../ProductCard'
import { pProducts } from '../../data'
import SectionTitle from '../../shared/SectionTitle'
const VendorDashboard = () => {
  return (
    <>
      <div className={styles.vendorDashBoard}>
        <div className={styles.vendordashboardheading}>
        <h1>DashBoard</h1>
        <div className={styles.vendormaindashbord}>
        <Orders name="Recent Orders"/>
        <TrendingNow title="Best Shell"/>
        </div>
        <SectionTitle title="Popular Products"  />
      <div className={styles.popularProducts}>
        {pProducts.map((it, index) => (
          <ProductCard key={index} it={it} />
        ))}
      </div>
        </div>
      </div>
    </>
  )
}

export default VendorDashboard
