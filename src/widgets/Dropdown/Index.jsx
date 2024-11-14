import React, { useState } from 'react'
import styles from './index.module.css'
import { PiSquaresFour } from 'react-icons/pi';
import { RiArrowDownSLine } from 'react-icons/ri';
import { TbSortDescending2 } from 'react-icons/tb';
let data = [
    {
      id: 1,
      log1: <PiSquaresFour color="rgb(165, 163, 163)" size={20} />,
      content: "Show:50",
      logo2: <RiArrowDownSLine color="rgb(165, 163, 163)" />,
      li1:"50",
      li2:"100",
      li3:"150",
      li4:"200",
      li5:"All",
    },
    {
      id: 2,
      log1: <TbSortDescending2 color="rgb(165, 163, 163)" size={20} />,
      content: "Sort:Featured",
      logo2: <RiArrowDownSLine color="rgb(165, 163, 163)" />,
      li1:"Featured",
      li2:"Newest",
      li3:"Most Comment",
      li4:"Realse Date",
      li5:"All",
    },
  ];
const Dropdown = () => {
    const [toggle,settoggle]= useState(false);
    const[id,setid]=useState(0);
   
    const hangletoggle=(id)=>{
     settoggle( !toggle)
     setid(id)
    }
  return (
    <>
       <div className={styles.dropdown}>
              {data.map((it) => {
                // setname(it.li1)
                return (
                  <>
                    <div key={it.id} onClick={()=>hangletoggle(it.id)} className={styles.show}>
                      <i>{it.log1}</i>
                      { it.content}
                      <i>{it.logo2}</i>
                    </div>
                    <div style={toggle && it.id===id? { height:"200px" , paddingTop:"15px"} :{height:"0px"}} className={it.id==1? styles.listcontainer1: styles.listcontainer2}>
                        <ul>
                          <li  className={styles.list}>{it.li1}</li>
                          <li  className={styles.list}>{it.li2}</li>
                          <li  className={styles.list}>{it.li3}</li>
                          <li  className={styles.list}>{it.li4}</li>
                          <li  className={styles.list}>{it.li5}</li>
                        </ul>
                      </div>
                  </>
                );
              })}
            </div>
    </>
  )
}

export default Dropdown
