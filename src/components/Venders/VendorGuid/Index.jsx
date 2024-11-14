import React from 'react'
import styles from './index.module.css'
import GuidCartd from './GuidCard/Index'
import { guiddata } from '../../../data/Guiddata'
import GuidContent from './GuidContent/Index'
import SubmitButton from '../../../widgets/SubmitButton/Index'
const VendorGuid = () => {
  return (
    <>
    <div className={styles.vendorguid}>
        <div className={styles.vendorguidtitle}>
        <h1>Start an online retail business with <span> Nest</span></h1>
        <span>today</span>
        <p>Sell your products and accept credit card payments from buying customers. Shopify gives you everything you need to run a successful online store.</p>
        </div>
        <div className={styles.guidcard}>
          {
            guiddata.map(it=>{
              return <GuidCartd img={it.img} key={it.id} name={it.name} desc={it.des} read={it.read} />
            })
          }
          
        </div>
        <GuidContent/>
        <div className={styles.vendorguidform}>
            <h2>Contact form</h2>
            <h1>Drop Us a Line</h1>
            <p>Your email address will not be published. Required fields are marked *</p>
            <div className={styles.guidform}>
              <div className={styles.nameemailguid}>
                <input type="text" placeholder='First Name' />
                <input type="text" placeholder='Your Email'/>
              </div>
              <div className={styles.nameemailguid}>
                <input type="text" placeholder='Your Phone' />
                <input type="text" placeholder='Your Subject'/>
              </div>
              <textarea role='8' placeholder='Measages'></textarea>
              <SubmitButton name="Send Message"/>
            </div>
          </div>
    </div> 
    </>
  )
}

export default VendorGuid
