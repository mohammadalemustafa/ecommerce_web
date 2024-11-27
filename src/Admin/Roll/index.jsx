import React from 'react'
import styles from './index.module.css';
import Button from '../../widgets/Button';
const Role = () => {
    return (
        <div className={styles.allUsers}>
            <div className={styles.cont}>
                <div>
                    <div className={styles.btnCont}><span className={styles.heading}>Roll</span>
                        <div className={styles.btnCont1}>
                            <Button className={styles.btn1}>Roll</Button>
                        </div>
                    </div>
                    <div className={styles.btnCont}><div className={styles.heading}>show: <div className={styles.square}></div><div>Items per page</div> </div>
                        <div className={styles.btnCont1}>
                            <label>Search:</label>
                            <input type="text" placeholder='search.....' />
                        </div>
                    </div>
                    <div className={styles.tableCont}>
                        <table className="table table-hover">
                            <thead>
                                <tr>
                                    <th><input type="checkbox" /></th>
                                    <th>Avatar</th>
                                    <th>Name</th>
                                    <th>Email</th>
                                    <th>Roll</th>
                                    <th>Created</th>
                                    <th>Status</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <td></td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Role