import React from 'react'
import styles from './index.module.css';
import DashCard from '../Dashcart';
import { dashCartdata } from '../admindata/dashcartdata';
import chart from '../../assets/e4ouwi02.svg'
import Topsell from '../topCont/index.jsx';
import { topStores, topSellings, TopProducts } from '../admindata/topstoredata.jsx';
const Dashboard = () => {
    return (
        <>
            <div className={styles.cont}>
                {
                    dashCartdata.map((data, index) => { return (<DashCard key={index} data={data} />) })
                }
            </div>
            <div className={styles.chartCont}>
                <div className={styles.left}>
                    <img src={chart} alt="" />
                </div>
                <div className={styles.right}>
                    <Topsell width="270px" tableData={topStores} />
                </div>
            </div >
            <div className={styles.chartCont}>
                <div className={styles.right}>
                    <Topsell width="370px" tableData={TopProducts} />
                </div>
                <div className={styles.left}>
                    <Topsell width="500px" tableData={topSellings} />
                </div>
            </div>
        </>
    )
}
export default Dashboard;