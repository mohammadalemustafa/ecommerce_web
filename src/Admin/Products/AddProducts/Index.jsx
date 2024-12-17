import React, { useState } from 'react'
import styles from './index.module.css'
import { RiSettings2Line } from 'react-icons/ri'
import { MdOutlineInventory2, MdOutlineLocalShipping } from 'react-icons/md'
import { HiOutlineWrenchScrewdriver } from 'react-icons/hi2'
import { IoImageOutline } from 'react-icons/io5'
import { TbSeo } from 'react-icons/tb'
import { GrStatusGood } from 'react-icons/gr'
import Container from '../../../ui/Container'
import Fiels from './General/Fields/Index'
import Generals from './General/Generals/Index'
import Inventory from './Inventory/Index'
import SetUp from './SetUp/Index'
import Status from './Status/Index'
import Shipping from './Shipping/Index'
import Seo from './Seo/Index'
import Metaimages from './Images/Index'


const AddProducts = () => {
    const [active,setactive]=useState("General")
    
    const ongetmenu=(n)=>{
        setactive(n)
    }
  return (
    <>
     <Container>
     <div className={styles.addproductcontainer}>
      <div className={styles.AddProducts}>
        <div className={styles.apleftmenucontainer}>
            <h2>Add Product</h2>
          <div onClick={() => ongetmenu("General")} className={active == "General" ? styles.active : styles.appsidemenucontainer}>
            <div className={styles.aplogo}> <RiSettings2Line size={25} /></div>
            <div className={styles.apname}>General</div>
          </div>
          <div onClick={() => ongetmenu("Inventory")} className={active == "Inventory" ? styles.active : styles.appsidemenucontainer}>
            <div className={styles.aplogo}> <MdOutlineInventory2  size={25} /></div>
            <div className={styles.apname}>Inventory</div>
          </div>
          <div onClick={() => ongetmenu("SetUp")} className={active == "SetUp" ? styles.active : styles.appsidemenucontainer}>
            <div className={styles.aplogo}> <HiOutlineWrenchScrewdriver size={25} /></div>
            <div className={styles.apname}>SetUp</div>
          </div>
          <div onClick={() => ongetmenu("Images")} className={active == "Images" ? styles.active : styles.appsidemenucontainer}>
            <div className={styles.aplogo}> <IoImageOutline size={25} /></div>
            <div className={styles.apname}>Images</div>
          </div>
          <div onClick={() => ongetmenu("Seo")} className={active == "Seo" ? styles.active : styles.appsidemenucontainer}>
            <div className={styles.aplogo}> <TbSeo size={25} /></div>
            <div className={styles.apname}>SEO</div>
          </div>
          <div onClick={() => ongetmenu("Shipping")} className={active == "Shipping" ? styles.active : styles.appsidemenucontainer}>
            <div className={styles.aplogo}> <MdOutlineLocalShipping  size={25} /></div>
            <div className={styles.apname}>Shipping & Tax</div>
          </div>
          <div onClick={() => ongetmenu("Status")} className={active == "Status" ? styles.active : styles.appsidemenucontainer}>
            <div className={styles.aplogo}> <GrStatusGood size={25} /></div>
            <div className={styles.apname}>Status</div>
          </div>
        </div>
        <div className={styles.aprightcontentcontainer}>
            {active==="General" && <Generals/>}
            {active==="Inventory" && <Inventory/>}
            {active==="SetUp" && <SetUp/>}
            {active==="Status" && <Status/>}
            {active==="Shipping" && <Shipping/>}
            {active==="Seo" && <Seo/>}
            {active==="Images" && <Metaimages/>}
            
        </div>
      </div>
      </div> 
      </Container>
    </>
  )
}

export default AddProducts
