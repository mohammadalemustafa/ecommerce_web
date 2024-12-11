import React, { useEffect, useState } from "react";
import styles from "./index.module.css";
import Container from "../../ui/Container";
import hicon from "../../assets/nav/icon-headphone.svg";
import { FaAngleDown } from "react-icons/fa";
import { HiOutlineSquares2X2 } from "react-icons/hi2";
import DropCard from "../browseDropCard";
import { Browsdropdata } from "../../data/Browsdropdata";
import { IoAddCircleOutline } from "react-icons/io5";
import icon1 from "../../assets/drowdown/icon-1.svg";
import icon2 from "../../assets/drowdown/icon-2.svg";
import icon3 from "../../assets/drowdown/icon-3.svg";
import icon4 from "../../assets/drowdown/icon-4.svg";
import { PiMinusCircle } from "react-icons/pi";
import { mega } from "../../data/Megadropdata";
import banner from "../../assets/drowdown/banner-menu.png";
import Manubanner from "../Manubanner";
import { pageslist } from "../../data/pageslist";
import { blogData } from "../../data/blog";
import { vendorsdata } from "../../data/vendors";
import { shopdata } from "../../data/shop";
import { Link, useNavigate } from "react-router-dom";
import { motion } from "framer-motion";
import { div } from "framer-motion/client";
import useResponsive from "../../hooks/useResponsive";
export const additionaldata = [
  { id: 11, name: "Milks and Dairies", logo: icon1 },
  { id: 12, name: "Milks and Dairies", logo: icon2 },
  {
    id: 13,
    name: "Wines & Drink",
    logo: icon3,
  },
  { id: 14, name: "Fresh Seafood", logo: icon4 },
];
const manuBannerData = {
  id: 1,
  img: banner,
  title: "Hot deals",
  about: "Don't miss Trending",
  desc: "Save to 50%",
};
const Navbar = () => {
  const [click, setClick] = useState(false);
  const [data, setAdditioonaldata] = useState(Browsdropdata);
  const [set, setSet] = useState(false);
  const [mouse, setMouse] = useState(false);
  const [hoveronpages, setHover] = useState(false);
  const [blogHover, setBloghover] = useState(false);
  const [vendor, setVendor] = useState(false);
  const [shophover, setshopHover] = useState(false);
  const navigate = useNavigate();
  const adddata = () => {
    setSet(!set);
    var data1 = additionaldata.map((item) => {
      return item;
    });
    setAdditioonaldata([...data, ...data1]);
  };
  const Subdata = () => {
    setAdditioonaldata(data.slice(0, 10));
    setSet(!set);
  };
  const handleMouse = () => {
    setMouse(true);
  };
  const onmouseleave = () => {
    setMouse(false);
  };
  const handleMouse1 = () => {
    setHover(true);
  };
  const onmouseleave1 = () => {
    setHover(false);
  };
  const blog = () => {
    setBloghover(!blogHover);
  };
  const Vendors = () => {
    setVendor(!vendor);
  };
  const shop = () => {
    setshopHover(!shophover);
  };
  const OnNavigate = (n) => {
    console.log(n);
    navigate(n);
    setHover(false);
  };

  const { isLaptop } = useResponsive();

  console.log(isLaptop);

  return (
    <div className={styles.navbar}>
      <Container>
        <div className={styles.navBarCont}>
          <div className={styles.navlistcont}>
            <div onClick={() => setClick(!click)} className={styles.dropdown}>
              <span>
                <HiOutlineSquares2X2 color="white" size="20px" fontWeight={800} />
              </span>
              <div>
                <span>browse all categories</span>
                <span>
                  {" "}
                  <FaAngleDown size="10px"></FaAngleDown>
                </span>
              </div>
            </div>
            {click && (
              <div className={styles.browsedro}>
                {data.map((item, index) => {
                  return <DropCard key={index} name={item.name} logo={item.logo} />;
                })}
                <div className={styles.showMore}>
                  {!set ? (
                    <span>
                      <IoAddCircleOutline size={20} />
                    </span>
                  ) : (
                    <span>
                      <PiMinusCircle size={20} />
                    </span>
                  )}
                  {set ? <span onClick={Subdata}>show less</span> : <span onClick={adddata}>show more</span>}
                </div>
              </div>
            )}
            <ul>
              <li>deals</li>
              <li>
                <span>Home</span>
                <span>
                  {" "}
                  <FaAngleDown size="10px"></FaAngleDown>
                </span>
              </li>
              <li>
                <span>About</span>
                <span></span>
              </li>
              <li onMouseEnter={shop} onMouseLeave={shop}>
                <span className={styles.pagesnav}>
                  Shop
                  {shophover && (
                    <motion.div className={styles.pasesdrop} initial={{ top: -20 }} animate={{ top: 30 }}>
                      {shopdata.map((item, index) => {
                        console.log(item);

                        return (
                          <div>
                            <motion.span whileHover={{ color: "#3bb77e", scale: 1.2, originX: 0 }}>
                              {item.p1}
                            </motion.span>
                            <motion.span whileHover={{ color: "#3bb77e", scale: 1.2, originX: 0 }}>
                              {item.p2}
                            </motion.span>
                            <motion.span whileHover={{ color: "#3bb77e", scale: 1.2, originX: 0 }}>
                              {item.p3}
                            </motion.span>
                            <motion.span
                              whileHover={{ color: "#3bb77e", scale: 1.2, originX: 0 }}
                              onClick={() => OnNavigate("/singleProduct")}
                            >
                              {item.p4}
                            </motion.span>
                            <motion.span whileHover={{ color: "#3bb77e", scale: 1.2, originX: 0 }}>
                              {item.p5}
                            </motion.span>
                            <motion.span whileHover={{ color: "#3bb77e", scale: 1.2, originX: 0 }}>
                              {item.p6}
                            </motion.span>
                            <motion.span whileHover={{ color: "#3bb77e", scale: 1.2, originX: 0 }}>
                              {item.p7}
                            </motion.span>
                            <motion.span whileHover={{ color: "#3bb77e", scale: 1.2, originX: 0 }}>
                              {item.p8}
                            </motion.span>
                            <motion.span whileHover={{ color: "#3bb77e", scale: 1.2, originX: 0 }}>
                              {item.p9}
                            </motion.span>
                            <motion.span
                              whileHover={{ color: "#3bb77e", scale: 1.2, originX: 0 }}
                              onClick={() => OnNavigate("/invoice")}
                            >
                              {item.p10}
                            </motion.span>
                            <motion.span whileHover={{ color: "#3bb77e", scale: 1.2, originX: 0 }}>
                              {item.p11}
                            </motion.span>
                          </div>
                        );
                      })}
                    </motion.div>
                  )}
                </span>
                <span>
                  {" "}
                  <FaAngleDown size="10px"></FaAngleDown>
                </span>
              </li>
              <li onMouseEnter={Vendors} onMouseLeave={Vendors}>
                <div className={styles.pagesnav}>
                  Vendors
                  {vendor && (
                    <motion.div initial={{ top: -20 }} animate={{ top: 30 }} className={styles.pasesdrop}>
                      {vendorsdata.map((item, index) => {
                        return (
                          <div key={index} className={styles.pages}>
                            <span onClick={() => OnNavigate("/vendorgrid")}>{item.p1}</span>
                            <span onClick={() => OnNavigate("/vendorlist")}>{item.p2}</span>
                            <span onClick={() => OnNavigate("/vendordetail1")}>{item.p3}</span>
                            <span onClick={() => OnNavigate("/vendordetail2")}>{item.p4}</span>
                            <span onClick={() => OnNavigate("/vendordashboard")}>{item.p5}</span>
                            <span onClick={() => OnNavigate("/vendorguid")}>{item.p6}</span>
                            <motion.span whileHover={{ color: "#3bb77e", scale: 1.2, originX: 0 }}>
                              {item.p1}
                            </motion.span>
                            <motion.span whileHover={{ color: "#3bb77e", scale: 1.2, originX: 0 }}>
                              {item.p2}
                            </motion.span>
                            <motion.span whileHover={{ color: "#3bb77e", scale: 1.2, originX: 0 }}>
                              {item.p3}
                            </motion.span>
                            <motion.span whileHover={{ color: "#3bb77e", scale: 1.2, originX: 0 }}>
                              {item.p4}
                            </motion.span>
                            <motion.span whileHover={{ color: "#3bb77e", scale: 1.2, originX: 0 }}>
                              {item.p5}
                            </motion.span>
                            <motion.span whileHover={{ color: "#3bb77e", scale: 1.2, originX: 0 }}>
                              {item.p6}
                            </motion.span>
                          </div>
                        );
                      })}
                    </motion.div>
                  )}
                </div>
                <span>
                  {" "}
                  <FaAngleDown size="10px"></FaAngleDown>
                </span>
              </li>

              <li>
                <div onMouseLeave={onmouseleave} className={styles.megamanu} onMouseEnter={handleMouse}>
                  {" "}
                  Mega menu
                  {mouse && (
                    <modiv className={styles.megadrop}>
                      <div className={styles.left}>
                        {mega.map((item, index) => {
                          <h1 key={index}>Fruit & Vegetables</h1>;
                          if (item.cat === "Fruit & Vegetables") {
                            return (
                              <div key={index} className={styles.cont}>
                                <h1>Fruit & Vegetables</h1>
                                <div>
                                  <motion.span whileHover={{ color: "#3bb77e", scale: 1.2, originX: 0 }}>
                                    {item.d1}
                                  </motion.span>
                                  <motion.span whileHover={{ color: "#3bb77e", scale: 1.2, originX: 0 }}>
                                    {item.d2}
                                  </motion.span>
                                  <motion.span whileHover={{ color: "#3bb77e", scale: 1.2, originX: 0 }}>
                                    {item.d3}
                                  </motion.span>
                                  <motion.span whileHover={{ color: "#3bb77e", scale: 1.2, originX: 0 }}>
                                    {item.d4}
                                  </motion.span>
                                  <motion.span whileHover={{ color: "#3bb77e", scale: 1.2, originX: 0 }}>
                                    {item.d5}
                                  </motion.span>
                                  <motion.span whileHover={{ color: "#3bb77e", scale: 1.2, originX: 0 }}>
                                    {item.d6}
                                  </motion.span>
                                </div>
                              </div>
                            );
                          }
                        })}
                        {mega.map((item, index) => {
                          if (item.cat === "Breakfast & Dairy") {
                            return (
                              <div key={index} className={styles.cont}>
                                <h1>Breakfast & Dairy</h1>
                                <div>
                                  <motion.span whileHover={{ color: "#3bb77e", scale: 1.2, originX: 0 }}>
                                    {item.d1}
                                  </motion.span>
                                  <motion.span whileHover={{ color: "#3bb77e", scale: 1.2, originX: 0 }}>
                                    {item.d2}
                                  </motion.span>
                                  <motion.span whileHover={{ color: "#3bb77e", scale: 1.2, originX: 0 }}>
                                    {item.d3}
                                  </motion.span>
                                  <motion.span whileHover={{ color: "#3bb77e", scale: 1.2, originX: 0 }}>
                                    {item.d4}
                                  </motion.span>
                                  <motion.span whileHover={{ color: "#3bb77e", scale: 1.2, originX: 0 }}>
                                    {item.d5}
                                  </motion.span>
                                  <motion.span whileHover={{ color: "#3bb77e", scale: 1.2, originX: 0 }}>
                                    {item.d6}
                                  </motion.span>
                                </div>
                              </div>
                            );
                          }
                        })}
                        {mega.map((item, index) => {
                          if (item.cat === "Meat & Seafoo") {
                            return (
                              <div key={index} className={styles.cont}>
                                <h1>Meat & Seafood</h1>
                                <div>
                                  <motion.span whileHover={{ color: "#3bb77e", scale: 1.2, originX: 0 }}>
                                    {item.d1}
                                  </motion.span>
                                  <motion.span whileHover={{ color: "#3bb77e", scale: 1.2, originX: 0 }}>
                                    {item.d2}
                                  </motion.span>
                                  <motion.span whileHover={{ color: "#3bb77e", scale: 1.2, originX: 0 }}>
                                    {item.d3}
                                  </motion.span>
                                  <motion.span whileHover={{ color: "#3bb77e", scale: 1.2, originX: 0 }}>
                                    {item.d4}
                                  </motion.span>
                                  <motion.span whileHover={{ color: "#3bb77e", scale: 1.2, originX: 0 }}>
                                    {item.d5}
                                  </motion.span>
                                  <motion.span whileHover={{ color: "#3bb77e", scale: 1.2, originX: 0 }}>
                                    {item.d6}
                                  </motion.span>
                                </div>
                              </div>
                            );
                          }
                        })}
                      </div>
                      <Manubanner data={manuBannerData} />
                    </modiv>
                  )}
                </div>
                <span>
                  {" "}
                  <FaAngleDown size="10px"></FaAngleDown>
                </span>
              </li>
              <li onMouseEnter={blog} onMouseLeave={blog}>
                <span className={styles.pagesnav}>
                  Blog
                  {blogHover && (
                    <div className={styles.pasesdrop}>
                      {blogData.map((item, index) => {
                        return (
                          <div key={index} className={styles.pages}>
                            <motion.span
                              whileHover={{ color: "#3bb77e", scale: 1.2, originX: 0 }}
                              onClick={() => OnNavigate("/BlogCategoryGrid")}
                            >
                              {item.p1}
                            </motion.span>
                            <motion.span whileHover={{ color: "#3bb77e", scale: 1.2, originX: 0 }}>
                              {item.p2}
                            </motion.span>
                            <motion.span whileHover={{ color: "#3bb77e", scale: 1.2, originX: 0 }}>
                              {item.p3}
                            </motion.span>
                            <motion.span whileHover={{ color: "#3bb77e", scale: 1.2, originX: 0 }}>
                              {item.p4}
                            </motion.span>
                            <motion.span
                              whileHover={{ color: "#3bb77e", scale: 1.2, originX: 0 }}
                              onClick={() => OnNavigate("/SinglePostRight")}
                            >
                              {item.p5}
                            </motion.span>
                            <motion.span whileHover={{ color: "#3bb77e", scale: 1.2, originX: 0 }}>
                              {item.p6}
                            </motion.span>
                          </div>
                        );
                      })}
                    </div>
                  )}
                </span>
                <span>
                  {" "}
                  <FaAngleDown size="10px"></FaAngleDown>
                </span>
              </li>
              <li onMouseEnter={handleMouse1} onMouseLeave={onmouseleave1}>
                <span className={styles.pagesnav}>
                  Pages
                  {hoveronpages && (
                    <div initial={{ top: -20 }} animate={{ top: 30 }} className={styles.pasesdrop}>
                      {pageslist.map((item, index) => {
                        console.log(item);

                        return (
                          <div key={index} className={styles.pages}>
                            <motion.span
                              whileHover={{ color: "#3bb77e", scale: 1.2, originX: 0 }}
                              onClick={() => OnNavigate("/about")}
                            >
                              {item.p1}
                            </motion.span>

                            <motion.span
                              whileHover={{ color: "#3bb77e", scale: 1.2, originX: 0 }}
                              onClick={() => OnNavigate("/contact")}
                            >
                              {item.p2}
                            </motion.span>

                            <motion.span
                              whileHover={{ color: "#3bb77e", scale: 1.2, originX: 0 }}
                              onClick={() => OnNavigate("/myprofile")}
                            >
                              {item.p3}
                            </motion.span>

                            <motion.span
                              whileHover={{ color: "#3bb77e", scale: 1.2, originX: 0 }}
                              onClick={() => OnNavigate("/login")}
                            >
                              {item.p4}
                            </motion.span>

                            <motion.span
                              whileHover={{ color: "#3bb77e", scale: 1.2, originX: 0 }}
                              onClick={() => OnNavigate("/register")}
                            >
                              {item.p5}
                            </motion.span>
                            <motion.span
                              whileHover={{ color: "#3bb77e", scale: 1.2, originX: 0 }}
                              onClick={() => OnNavigate("/forgotpass")}
                            >
                              {item.p6}
                            </motion.span>
                            <motion.span
                              whileHover={{ color: "#3bb77e", scale: 1.2, originX: 0 }}
                              onClick={() => OnNavigate("/resetpass")}
                            >
                              {item.p7}
                            </motion.span>
                            <motion.span whileHover={{ color: "#3bb77e", scale: 1.2, originX: 0 }}>
                              {item.p8}
                            </motion.span>
                            <motion.span
                              whileHover={{ color: "#3bb77e", scale: 1.2, originX: 0 }}
                              onClick={() => OnNavigate("/privacy")}
                            >
                              {item.p9}
                            </motion.span>
                            <motion.span
                              whileHover={{ color: "#3bb77e", scale: 1.2, originX: 0 }}
                              onClick={() => OnNavigate("/TemsAndCondition")}
                            >
                              {item.p10}
                            </motion.span>
                          </div>
                        );
                      })}
                    </div>
                  )}
                </span >
                <span>
                  {" "}
                  <FaAngleDown size="10px"></FaAngleDown>
                </span>
              </li >
              <li>
                <span>Contact</span>
                <span> </span>
              </li>
            </ul >
          </div >
          <div className={styles.right}>
            <div className={styles.imgCont}>
              <img src={hicon} alt="" />
            </div>
            <div className={styles.iconCont}>
              <span>1900 - 888</span>
              <span>24/7 Support Center</span>
            </div>
          </div>
        </div >
      </Container >
    </div >
  );
};

export default Navbar;
