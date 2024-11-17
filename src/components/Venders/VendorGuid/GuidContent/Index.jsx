import React from "react";
import styles from "./index.module.css";
import { vendorguiddata } from "../../../../data/Vendordata";
const GuidContent = () => {
  return (
    <>
      {vendorguiddata.map((item) => {
        return (
          <>
            <div key={item.id} className={styles.guidcontent}>
              <h1>{item.id}.{item.name}</h1>
              <p>
               {item.para}
              </p>
            </div>
          {item.list &&  <div className={styles.listcontainer}>
              <ul>
                {item.list.map(it=>{
                    return <li key={it.id}>{it.para}</li>
                })}
                
              </ul>
            </div>
      }
          </>
        );
      })}
    </>
  );
};

export default GuidContent;
