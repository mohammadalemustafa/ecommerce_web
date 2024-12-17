import React from 'react'
import styles from './index.module.css'
import Fiels from '../General/Fields/Index'
import OutlineBtn from '../../../../widgets/Outlinebutton/Index'
const Metaimages = () => {
  return (
    <>
      <Fiels imgbox={true} para3="*Upload image size 600x600px recommended" name="Thumbnail"/>
      <Fiels imgbox={true} para3="*Upload image size 600x600px recommended" name="Images"/>
      <Fiels imgbox={true} para3="*Upload an image showcasing the size chart tailored for fashion products. A table format image is suggested for easy reference." name="Size Chart"/>
     <div className={styles.buttonout}>
      <OutlineBtn name="Save Product"/>
      </div>
    </>
  )
}

export default Metaimages
