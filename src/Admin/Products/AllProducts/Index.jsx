import React from 'react'
import styles from './index.module.css'
import { FiPlus } from 'react-icons/fi'
const AllProducts = () => {
  return (
    <>
      <div className={styles.allproductscontainer}>
        <div className={styles.allproducts}>
            <div className={styles.allproducthead}>
                <h2>Products</h2>
                <div className={styles.addallproduct}>
                    <i><FiPlus size={20}/></i>
                    <span>Add Product</span>
                </div>
            </div>
            <div className={styles.allproducthead}>
                <div className={styles.items}>
                    <span>Items:</span>
                    <span>78</span>
                    <span>Items per page</span>
                </div>
                <div className={styles.search}>
                    <input type="search" placeholder='search here....'/>
                </div>
            </div>
        </div>
      </div>
    </>
  )
}

export default AllProducts
