import React from 'react'
import styles from './index.module.css'
import SubmitButton from '../../../widgets/SubmitButton/Index'


const TrackOrder = () => {
  return (
    <>
     <h2>Orders tracking</h2> 
     <p>To track your order please enter your OrderID in the box below and press "Track" button. This was given
      to you on your receipt and in the confirmation email you should have received.</p>
     <div className={styles.formcontainer}>
        <label>Order ID</label>
        <input type="text" className={styles.input} placeholder='Found in your order confirmation email' />
        <label>Billing Email</label>
        <input type="text" className={styles.input} placeholder='Email you used during checkout' />
        <div className={styles.buttoncontainer}>
        <SubmitButton name="Track" />
        </div>
     </div>
    </>
  )
}

export default TrackOrder
