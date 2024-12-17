import React from 'react'
import styles from './index.module.css'
import Fiels from '../General/Fields/Index'
import OutlineBtn from '../../../../widgets/Outlinebutton/Index'
const Inventory = () => {
  return (
    
    <>
      <Fiels name="Type" selectbox={true} options={[{id:1,value:"Simple"},{id:2,value:"Classified"}]}/>
      <Fiels name="Unit" placeholder="Enter Unit" para="*Specify the measurement unit, such as 10 Pieces, 1 KG, 1 Ltr, etc." inputbox={true}/>
      <Fiels name="Weight" placeholder="Enter Weight Gms (E.G. 100)" para="*Specify the weight of this product in Gms." inputbox={true}/>
      <Fiels name="Stock Status" selectbox={true} options={[{id:1,value:"In Stock"},{id:2,value:"Out of Stock"}]}/>
      <Fiels name="SKU" placeholder="Enter SKU" require="SKU is required" inputbox={true}/>
      <Fiels name="Stock Quantity" placeholder="Enter Quantity" require="Quantity is required" inputbox={true}/>
      <Fiels name="Price" placeholder="Enter Price"  pricebox={true}/>
      <Fiels name="Discount" placeholder="Enter Discount"  discountbox={true}/>
      <Fiels name="Sale Price" placeholder="0.00"  pricebox={true}/>
      <Fiels name="Sale Status"  modebox={true} />
      <Fiels name="Sale Start Date"    datebox={true}/>
      <Fiels name="Sale End Date"    datebox={true}/>
      <div className={styles.saveproduct}>
        <OutlineBtn name="Save Product"/>
      </div>
   
    </>
  )
}

export default Inventory
