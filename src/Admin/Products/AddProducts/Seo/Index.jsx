import React from 'react'
import styles from './index.module.css'
import Fiels from '../General/Fields/Index'
import OutlineBtn from '../../../../widgets/Outlinebutton/Index'
const Seo = () => {
  return (
    <>
     <Fiels inputbox={true} name="Meta Title" placeholder="Enter Meta Title"/> 
     <Fiels areabox={true} name="Meta Description" placeholder="Enter Meta Description"/> 
     <Fiels imgbox={true} name="Meta Image"/>
     <div className={styles.buttonout}>
      <OutlineBtn name="Save Product"/>
      </div>
    </>
  )
}

export default Seo
