import React from 'react'
import styles from './index.module.css';

const Topsell = ({ tableData, width }) => {
    return (
        <div style={{ width: width }}>
            <div className={styles.heading1}>{tableData[0].type}</div>
            <select name="" id="" className={styles.select}>
                <option value="">filter By</option>
                <option value="">Today</option>
                <option value="">last week</option>
                <option value="">last month</option>
                <option value="">this year</option>
            </select>
            <div className={styles.tableCont}>
                <table class="table">
                    <thead>
                        <tr>
                            {
                                tableData[0].theaderdata.map((h) => <th>{h}</th>)

                            }
                        </tr>
                    </thead>
                    <tbody>
                        {tableData.map((data) => {
                            return (<tr>
                                {data.name && <td> {data.name}</td>}
                                {data.date && <td>{data.date}</td>}
                                {data.order && <td>{data.order}</td>}
                                {data.earning && <td>{data.earning}</td>}
                                {data.number && <td>{data.number}</td>}
                                {data.amount && <td>{data.amount}</td>}
                                {data.payment && <td>{data.payment}</td>}
                                {data.action && <td>{data.action}</td>}
                            </tr>
                            )
                        })
                        }
                    </tbody>
                </table>
            </div>
        </div >
    )
}

export default Topsell