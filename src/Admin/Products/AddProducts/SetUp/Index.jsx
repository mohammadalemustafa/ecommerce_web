import React, { useState } from 'react'
import styles from './index.module.css'
import Fiels from '../General/Fields/Index'
import OutlineBtn from '../../../../widgets/Outlinebutton/Index'
const SetUp = () => {

    const [hideproduct,sethideproduct]=useState(true)
    const handletoggle=()=>{
        sethideproduct(!hideproduct)
    }
  return (
    <>
     <Fiels name="Tags" tagbox={true}/> 
     <Fiels name="Categories" require="Category is required" tagbox={true}/> 
     <Fiels name="Random Releted Product" handletoggle={handletoggle} para1="Enabling this option allows the backend to randomly select 6 products for display." modebox={true}/> 
    {hideproduct && <Fiels name="Releted Product" placeholder="Select Product" para="*Choose a maximum of 6 products for effective related products display." inputbox={true}/> }
     <Fiels name="Cross shell Product" placeholder="Select Product" para="*Choose a maximum of 3 products for effective cross-selling display." inputbox={true}/> 
     <div className={styles.buttonout}>
      <OutlineBtn name="Save Product"/>
      </div>
    </>
  )
}

export default SetUp
