import React from 'react'
import styles from './index.module.css';
import img from '../../../assets/vendor-18.svg'
import { FaLocationArrow } from 'react-icons/fa';
import { BiHeadphone } from 'react-icons/bi';
const Vendor = () => {
    return (
        <div className={styles.vendorCont}>
            <div className={styles.imgCont}><img src={img} alt="" />
                <p>
                    <span>Noodles Co.</span>
                    <span>(32 Review)</span>
                </p>
            </div>
            <div className={styles.n}>
                <i><FaLocationArrow color='#3bb77e' size={20} /></i>
                <span className={styles.l}>Address:</span>
                <span> 5171 W Campbell Ave undefined Kent, Utah 53127 United States</span>
            </div>
            <div className={styles.n}>
                <i><BiHeadphone color='#3bb77e' size={20} /></i>
                <span className={styles.l}>Contact Seller:</span>
                <span>(+91) - 540-025-553</span>
            </div>
            <div className={styles.cont}>
                <div>
                    <span>rating</span>
                    <span>92%</span>
                </div>
                <div>
                    <span>Ship on time</span>
                    <span>100%</span>
                </div> <div>
                    <span>Chat response</span>
                    <span>89%</span>
                </div>
            </div>
            <p>Noodles & Company is an American fast-casual restaurant that offers international and American noodle dishes and pasta in addition to soups and salads. Noodles & Company was founded in 1995 by Aaron Kennedy and is headquartered in Broomfield, Colorado. The company went public in 2013 and recorded a $457 million revenue in 2017.In late 2018, there were 460 Noodles & Company locations across 29 states and Washington, D.C.</p>

        </div>
    )
}

export default Vendor