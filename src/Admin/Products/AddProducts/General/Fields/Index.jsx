import React, { useEffect, useState } from "react";
import styles from "./index.module.css";
import EditField from "./EditFields/Index";
import { BsCurrencyDollar } from "react-icons/bs";
import { VscPercentage } from "react-icons/vsc";
import { GoInfo } from "react-icons/go";
import { IoIosArrowDown } from "react-icons/io";
import { RxCross1 } from "react-icons/rx";
import OutlineBtn from "../../../../../widgets/Outlinebutton/Index";
import ListContent from "./Listcontent/Index";
import { listdata } from "../../../../../data/Listdata";
import { filter, p } from "framer-motion/client";
import { FaPlus } from "react-icons/fa";
import { FiPlus } from "react-icons/fi";
import Swal from "sweetalert2";
const Fiels = ({
  inputbox,
  para3,
  modebox,
  para1,
  discountbox,
  pricebox,
  tagbox,
  selectbox,
  areabox,
  datebox,
  areabox2,
  options,
  name,
  placeholder,
  para,
  require,
  handletoggle,
  imgbox
}) => {
  const [input, setinput] = useState("");
  const [area, setarea] = useState("");
  const [select, setselect] = useState("");
  const [active, setactive] = useState("Heading6");
  const [strong, setstrong] = useState("400");
  const [itallic, setitallic] = useState("normal");
  const [headingtext, setheadingtext] = useState("20px");
  const [tags,settags]=useState(false)
  const [taglist,settaglist]=useState(listdata)
  const handletags=()=>{
    settags(!tags)
  }
  const handlepropogation=(e)=>{
    e.stopPropagation()

  }


  

  const handlechange=(value)=>{
    
   const newdata= listdata.filter(it=>{
      return it.title.includes(value)
    })
    settaglist(newdata)
  }

  const [metaimg,setmetaimg]=useState(false)
  const handleimgmeta=()=>{
   setmetaimg(!metaimg)
  }

 
  return (
    <>
      <div className={styles.generalcontainer}>
        <div className={styles.fieldscontiner}>
          <div className={styles.labels}>
            <label>
              {name} <span>*</span>
            </label>
          </div>
          <div className={styles.feilds}>
            {inputbox && (
              <input
                type="text"
                className={styles.input}
                value={input}
                onChange={(e) => setinput(e.target.value)}
                placeholder={placeholder}
                required
              />
            )}
            {datebox && (
              <input
                type="date"
                className={styles.input}
                value={input}
                onChange={(e) => setinput(e.target.value)}
                placeholder={placeholder}
                required
              />
            )}
            {tagbox && (
              <div className={styles.input2} onClick={(e)=>handletags(e)}>
                <input type="search" placeholder="Select option"  readOnly/>
               {tags ==false ?  <i><IoIosArrowDown size={17}/></i>:<RxCross1 size={15}/>}
               {tags && 
               <div className={styles.tagcontainer} onClick={handlepropogation}>
                <input type="search" className={styles.input} onChange={(e)=>handlechange(e.target.value)} placeholder="Search here..." />
               {taglist.length<1 ?<div className={styles.input}>No Data Found</div>:<div className={styles.input}>All</div>} 
                <div className={styles.listcontent}>
                {taglist.map(it=>{
                return <div key={it.id} className={styles.listcontainer}>
                 <ListContent title={it.title} />
                </div>
                })}
                </div>
               </div>
               }
              </div>
            )}
            {pricebox && (
              <>
                <div className={styles.input}>
                  <i>
                    <BsCurrencyDollar size={20} />
                  </i>
                  <input
                    type="text"
                    value={input}
                    className={styles.input1}
                    onChange={(e) => setinput(e.target.value)}
                    placeholder={placeholder}
                    required
                  />
                </div>
              </>
            )}
            {modebox && (
              <div className={styles.modecontainer}>
                <div className={styles.toggleborder}>
                  <input id="one" type="checkbox" />
                  <label htmlFor="one" >
                    <div className={styles.handle} onClick={handletoggle}></div>
                  </label>
                </div>
               {para1 && <p>
                  <i>
                    <GoInfo size={20} />
                  </i>
                  {para1}
                </p>
}
              </div>
            )}
            {discountbox && (
              <>
                <div
                  style={{ justifyContent: "space-between" }}
                  className={styles.input}
                >
                  <input
                    type="text"
                    value={input}
                    className={styles.input1}
                    onChange={(e) => setinput(e.target.value)}
                    placeholder={placeholder}
                    required
                  />
                  <i>
                    <VscPercentage size={20} />
                  </i>
                </div>
              </>
            )}

            {areabox && (
              <textarea
                className={styles.textarea}
                rows={3}
                value={area}
                onChange={(e) => setarea(e.target.value)}
                placeholder={placeholder}
              ></textarea>
            )}
            {imgbox && (
              <>
              <div className={styles.metaimgcontianer} onClick={handleimgmeta}>
                <div className={styles.metaimgtoggle}>
                <FiPlus size={20}  />
                  <input type="file" />
                </div>
              </div>
                {para3 && <p>{para3}</p>}
                </>
            )}
            {areabox2 && (
              <>
                <EditField
                  active={active}
                  strong={strong}
                  itallic={itallic}
                  setactive={setactive}
                  setheadingtext={setheadingtext}
                  setstrong={setstrong}
                  setitallic={setitallic}
                />
                <textarea
                  className={styles.textarea}
                  style={{
                    fontSize: headingtext,
                    fontWeight: strong,
                    fontStyle: itallic,
                  }}
                  rows={3}
                  value={area}
                  onChange={(e) => setarea(e.target.value)}
                  placeholder={placeholder}
                ></textarea>
              </>
            )}

            {selectbox && (
              <select
                className={styles.select}
                onChange={(e) => setselect(e.target.value)}
              >
                <option value="select">Select</option>
                {options.map((it) => {
                  return (
                    <option key={it.id} value={it.value}>
                      {it.value}
                    </option>
                  );
                })}
              </select>
            )}
            {input != "" || area != "" || select != "" ? (
              <li style={{ opacity: "0" }}></li>
            ) : (
              <li style={{ opacity: "1", padding: "5px" }}>{require}</li>
            )}
            <p>{para}</p>
          </div>
        </div>
      </div>
    </>
  );
};

export default Fiels;
