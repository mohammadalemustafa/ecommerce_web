import React from 'react'
import styles from './index.module.css';
import Btn from '../btn';
import Button from '../../widgets/Button';
import { BiExport, BiImport } from 'react-icons/bi';
import { useNavigate } from 'react-router-dom';
const AllUsers = () => {
    const navigate = useNavigate();
    const handleClick = (para) => {
        navigate(para);
    }
    return (
        <div className={styles.allUsers}>
            <div className={styles.cont}>
                <div>
                    <div className={styles.btnCont}><span className={styles.heading}>Users</span>
                        <div className={styles.btnCont1}>
                            <Button className={styles.btn}> <BiImport /> Import </Button>
                            <Button className={styles.btn3}>  <BiExport />  Export</Button>
                            <Button onClick={() => handleClick('/add/user')} className={styles.btn1}>Add Users</Button>
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

export default AllUsers