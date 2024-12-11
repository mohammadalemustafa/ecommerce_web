import React from 'react'
import styles from './index.module.css';
import Btn from '../btn';
const User = () => {
    return (
        <div className={styles.userCont}>
            <div className={styles.formCont}>
                <div className={styles.heading}>Add User</div>
                <div className={styles.formControll}>
                    <label htmlFor="id">Name:</label>
                    <input required type="text" id='name' placeholder='Enter Full Name' />
                </div>
                <div className={styles.formControll}>
                    <label htmlFor="id">Email:</label>
                    <input required type="email" id='email' placeholder='Enter Email' />
                </div>
                <div className={styles.formControll}>
                    <label htmlFor="id">Phone:</label>
                    <input required type="number" id='name' placeholder='Enter phone' />
                </div>
                <div className={styles.formControll}>
                    <label htmlFor="id">Password:</label>
                    <input required type="password" id='name' placeholder='Enter password' />
                </div>
                <div className={styles.formControll}>
                    <label htmlFor="id">CPassword:</label>
                    <input required type="text" id='cpass' placeholder='Confirm password' />
                </div>
                <div className={styles.formControll}>
                    <label htmlFor="id">Roll:</label>
                    <input required type="text" id='name' placeholder='Select Roll' />
                </div>
                <div className={styles.check}>
                    <label htmlFor="id">Status:</label>
                    <input required type="checkbox" id='name' placeholder='Select Roll' />
                </div>
                <div className={styles.btnCont}>
                    <Btn />
                </div>
            </div>
        </div>
    )
}
export default User;