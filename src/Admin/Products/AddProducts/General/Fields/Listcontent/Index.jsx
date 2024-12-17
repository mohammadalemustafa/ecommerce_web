import React from 'react'
import styles from './index.module.css'
import OutlineBtn from '../../../../../../widgets/Outlinebutton/Index'
const ListContent = ({title}) => {
  return (
    <>
      <span>{title}</span>
      <OutlineBtn name="Select"/> 
    </>
  )
}

export default ListContent
