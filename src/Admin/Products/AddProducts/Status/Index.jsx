import React, { useState } from 'react'
import Fiels from '../General/Fields/Index'
import OutlineBtn from '../../../../widgets/Outlinebutton/Index'
import styles from './index.module.css'
const Status = () => {

    const [hideproduct,sethideproduct]=useState(true)
    const handletoggle=()=>{
        sethideproduct(!hideproduct)
    }
  return (
    <>
     <Fiels modebox={true} handletoggle={handletoggle} name="Featured" para1="*Enabling this option will display a Featured tag on the product."/> 
     <Fiels modebox={true}  handletoggle={handletoggle} name="Safe checkout" para1="*A safe checkout image will appear on the product page. Modify the image in the theme options."/> 
     <Fiels modebox={true}  handletoggle={handletoggle} name="Secure checkout" para1="*A secure checkout image will appear on the product page. Modify the image in the theme options."/> 
     <Fiels modebox={true}  handletoggle={handletoggle} name="Social share" para1="*Enable this option to allow users to share the product on social media platforms."/> 
     <Fiels modebox={true}  handletoggle={handletoggle} name="Encourage order" para1="*A random order count between 1 and 100 will be displayed to motivate user purchases."/> 
     <Fiels modebox={true}  handletoggle={handletoggle} name="Encourage view" para1="*this feature encourages users to view products by presenting engaging content or prompts."/> 
     <Fiels modebox={true}  handletoggle={handletoggle} name="Trending" para1="*Enabling this will showcase the product in the sidebar of the product page as a trending item."/> 
     <Fiels modebox={true}  handletoggle={handletoggle} name="Return" para1="*Enable to make the product eligible for returns."/> 
     <Fiels modebox={true}  handletoggle={handletoggle} name="Status" para1="*Toggle between Enabled and Disabled to control the availability of the product for purchase."/> 
   <div className={styles.btncont}>
    <OutlineBtn name="Save Product"/>
    </div>
    </>
  )
}

export default Status
