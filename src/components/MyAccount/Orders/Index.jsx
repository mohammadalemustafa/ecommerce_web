import React from 'react'
import styles from './index.module.css'
const Orders = () => {
  return (
    <>
     <div className={styles.ordercontainer}>
        <h2>Your Orders</h2>
        <table>
            <thead>
                <tr>
                    <th>Order</th>
                    <th>Date</th>
                    <th>Status</th>
                    <th>Total</th>
                    <th>Actions</th>
                </tr>
            </thead>
            <tbody>
            <tr>
                    <td>#1357</td>
                    <td>March 45, 2020</td>
                    <td>Processing</td>
                    <td>$125.00 for 2 item</td>
                    <td>view</td>
                </tr>
                <tr>
                    <td>#1357</td>
                    <td>March 45, 2020</td>
                    <td>Processing</td>
                    <td>$125.00 for 2 item</td>
                    <td>view</td>
                </tr>
                <tr>
                    <td>#1357</td>
                    <td>March 45, 2020</td>
                    <td>Processing</td>
                    <td>$125.00 for 2 item</td>
                    <td>view</td>
                </tr>
            </tbody>
        </table>
    </div> 
    </>
  )
}

export default Orders
