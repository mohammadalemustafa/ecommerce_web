import React from 'react'
import styles from './index.module.css'
import CartBtn from '../../../../ui/CartBtn'
import { FaFacebook, FaGithub, FaStar } from 'react-icons/fa'
import { FaLocationDot, FaSquareInstagram } from 'react-icons/fa6'
import { TfiHeadphoneAlt } from 'react-icons/tfi'
import logo from '../../../../assets/Vendors/pic16.png'
import logobg from '../../../../assets/Vendors/picbg.png'
import { BiStar } from 'react-icons/bi'
import { AiFillFacebook, AiFillTwitterCircle } from 'react-icons/ai'
const VendorDCL = ({bg}) => {
  return (
    <>
     <div className={styles.Vendordcl}>
      {bg ? 
      <div className={styles.vdclcartbg}>
      <div className={styles.Vendordclimgconbg}>
          <img src={logobg} alt="weblogo" />
      </div>
      <div className={styles.vendordclContentbg}>
      <div className={styles.vendordclleftcontbg}>
  <p className={styles.catbg}>Since 2012</p>
  <h4>Nest Food.,Ltd</h4>
  <p className={styles.vendordclratingratingbg}>
    {[1, 2, 3, 4, 5].map((itm, index) => (itm <= 4 ? <FaStar key={index} color="#FDC040" /> : <BiStar key={index} />))}

    <span>(4)</span>
  </p>
  <div className={styles.bgcontentflex}>
  <p>Got a smooth, buttery spread in your fridge? Chances are good that it's Good Chef. This brand made Lionto's list of the most popular grocery brands across the country.</p>
  
  <div className={styles.vendordcllocationbg}>
      <div className={styles.dcllocationbg}>
         
          <p><i><FaLocationDot/></i> Address: 5171 W Campbell Ave undefined Kent, Utah 53127 United States</p>
      </div>
      <div className={styles.dclheadphonebg}>
      
      <p> <i><TfiHeadphoneAlt /></i> Call Us:(+91) - 540-025-124553</p>
      </div>
  </div>
  <div className={styles.vendordclsocialbg}>
    <h2>Follow Us</h2>
    <div className={styles.vendordclsocialmediabg}>
    <AiFillTwitterCircle color='rgb(103, 188, 238)' size={35} />
    <FaFacebook color='darkblue' size={35} />
    <FaSquareInstagram  color='red' size={35} />
    <FaGithub color='black' size={35} />
    </div>

  </div>
  </div>
  </div>

      </div>
  </div>
      :
      <div className={styles.vdclcart}>
            <div className={styles.Vendordclimgcon}>
                <img src={logo} alt="weblogo" />
            </div>
            <div className={styles.vendordclContent}>
            <div className={styles.vendordclleftcont}>
        <p className={styles.cat}>Since 2012</p>
        <h4>Nest Food.,Ltd</h4>
        <p className={styles.vendordclratingrating}>
          {[1, 2, 3, 4, 5].map((itm, index) => (itm <= 4 ? <FaStar key={index} color="#FDC040" /> : <BiStar key={index} />))}

          <span>(4)</span>
        </p>
        <p>Got a smooth, buttery spread in your fridge? Chances are good that it's Good Chef. This brand made Lionto's list of the most popular grocery brands across the country.</p>
        </div>
        <div className={styles.vendordclsocial}>
          <h2>Follow Us</h2>
          <div className={styles.vendordclsocialmedia}>
          <AiFillTwitterCircle color='rgb(103, 188, 238)' size={35} />
          <FaFacebook color='darkblue' size={35} />
          <FaSquareInstagram  color='red' size={35} />
          <FaGithub color='black' size={35} />
          </div>

        </div>
        <div className={styles.vendordcllocation}>
            <div className={styles.dcllocation}>
               
                <p><i><FaLocationDot/></i> Address: 5171 W Campbell Ave undefined Kent, Utah 53127 United States</p>
            </div>
            <div className={styles.dclheadphone}>
            
            <p> <i><TfiHeadphoneAlt /></i> Call Us:(+91) - 540-025-124553</p>
            </div>
        <CartBtn name="Contact Sheller ->" className={styles.dclcartBtn} />
        </div>
            </div>
        </div>
      }
        
    </div> 
    </>
  )
}

export default VendorDCL
