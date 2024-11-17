import React from "react";
import styles from "./index.module.css";
import GridCatogory from "../../GridCategory/Index";
import { GridCategorydata } from "../../../../data/GridCategorydata";
import { trendingdata } from "../../../../data/Trending";
import { gridpicdata } from "../../../../data/GridGallery";
import { populartagdata } from "../../../../data/PopularTags";
import VendorDCL from "../../../Venders/VendorDetail1/VendorDetailLeftCart/Index";
import juce from "../../../../assets/Vendors/juce.png";
import TrendingNow from "../TrendingNow/Index";
const RightCardCont = ({ vendor, both }) => {
  return (
    <>
      <div className={styles.rightcont}>
        {vendor && (
          <div className={styles.VendorDCLcatogory}>
            <VendorDCL />
          </div>
        )}

        <div className={styles.catogory}>
          <h2 className={styles.name}>Catogory</h2>
          <p className={styles.borderbottom}>
            <i> </i>
          </p>
          {GridCategorydata.map((item) => {
            return (
              <GridCatogory
                key={item.id}
                icon={item.img}
                name={item.name}
                counter={item.counter}
              />
            );
          })}
        </div>
        <TrendingNow title="Trending Now"/>
        {vendor ? (
          <div className={styles.jucepic}>
            <div className={styles.juceDiv}>
              <span>Organic</span>
              <h2>
                Save 17% on <span>Organic</span> Juice
              </h2>
            </div>
            <img src={juce} alt="jucepic" />
          </div>
        ) : (
          <div className={styles.catogory}>
            <h2 className={styles.name}>Gallery</h2>
            <p className={styles.borderbottom}>
              <i> </i>
            </p>
            <div className={styles.griddata}>
              {gridpicdata.map((item) => {
                return <GridCatogory key={item.id} img={item.pic} />;
              })}
            </div>
          </div>
        )}
        {(both || !vendor) && (
          <div className={styles.catogory}>
            <h2 className={styles.name}>Popular Tags</h2>
            <p className={styles.borderbottom}>
              <i> </i>
            </p>
            {populartagdata.map((item) => {
              return (
                <GridCatogory
                  key={item.id}
                  tagicon={item.tagicon}
                  name={item.tag}
                />
              );
            })}
          </div>
        )}
        {both && (
          <div className={styles.jucepic}>
            <div className={styles.juceDiv}>
              <span>Organic</span>
              <h2>
                Save 17% on <span>Organic</span> Juice
              </h2>
            </div>
            <img src={juce} alt="jucepic" />
          </div>
        )}
      </div>
    </>
  );
};

export default RightCardCont;
