import React from 'react'
import GridCatogory from '../../GridCategory/Index';
import { trendingdata } from '../../../../data/Trending';
import styles from './index.module.css'
const TrendingNow = ({title}) => {
  return (
    <>
      <div className={styles.catogory}>
          <h2 className={styles.name}>{title}</h2>
          <p className={styles.borderbottom}>
            <i> </i>
          </p>
          {trendingdata.map((item) => {
            return (
              <>
                <GridCatogory
                  key={item.id}
                  price={item.price}
                  img={item.img}
                  title={item.title}
                  star={item.star}
                />
                <p className={styles.borderbottom}></p>
              </>
            );
          })}
        </div>
    </>
  )
}

export default TrendingNow
