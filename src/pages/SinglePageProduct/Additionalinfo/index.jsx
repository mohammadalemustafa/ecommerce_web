import React from 'react'
import styles from './index.module.css'
import { tabledata } from '../../../data/SinglePtabledata'
const AdditionalInfo = () => {
    return (
        <div className={styles.tableCont}>
            <table style={{ padding: "5px" }} border={"2px"}>
                <tbody>
                    {
                        tabledata.map((data, index) => {
                            return (<tr key={index}>
                                <td>{data.td1}</td>
                                <td>{data.td2}</td>
                            </tr>)
                        })
                    }
                </tbody>
            </table>
        </div >
    )
}
export default AdditionalInfo