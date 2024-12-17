import React from "react";
import styles from "./index.module.css";
import { FiPlus } from "react-icons/fi";
import { FaEdit, FaTrash } from "react-icons/fa";
import Fiels from "../AddProducts/General/Fields/Index";
import { Allproducts } from "../../../data/AllProduct";
const AllProducts = () => {
  return (
    <>
      <div className={styles.allproductscontainer}>
        <div className={styles.allproducts}>
          <div className={styles.allproducthead}>
            <h2>Products</h2>
            <div className={styles.addallproduct}>
              <i>
                <FiPlus size={20} />
              </i>
              <span>Add Product</span>
            </div>
          </div>
          <div className={styles.allproducthead}>
            <div className={styles.items}>
              <span>Items:</span>
              <span>78</span>
              <span>Items per page</span>
            </div>
            <div className={styles.search}>
              <input type="search" placeholder="search here...." />
            </div>
          </div>
          <div className={styles.allproducttablecontainer}>
            <table>
              <thead>
                <tr>
                  <th>S.No.</th>
                  <th>Image</th>
                  <th>Name</th>
                  <th>SKU</th>
                  <th>Price</th>
                  <th>Stock</th>
                  <th>Store</th>
                  <th>Approve</th>
                  <th>Status</th>
                  <th>Actions</th>
                </tr>
              </thead>
            </table>
            <tbody>
              
              {
                Allproducts.map(it=>{
                  return <tr key={it.id}>
                  <td>{it.id}</td>
                  <td>
                    <img src={it.img} style={{width:"50px", height:"50px"}} alt="topsellpic" />
                  </td>
                  <td>{it.name}</td>
                  <td>{it.sku}</td>
                  <td>${it.price}</td>
                  <td>
                  <span>{it.stock}</span>
                  </td>
                  <td>{it.store}</td>
                  <td>
                    <div className={styles.toggleborder}>
                      <input id="one" type="checkbox" />
                      <label htmlFor="one">
                        <div
                          className={styles.handle}
                         
                        ></div>
                      </label>
                    </div>
                  </td>
                  <td>
                    <div className={styles.toggleborder}>
                      <input id="one" type="checkbox" />
                      <label htmlFor="one">
                        <div
                          className={styles.handle}
                          
                        ></div>
                      </label>
                    </div>
                  </td>
                  <td>
                    <i>
                      <FaEdit color="blue" size={20} />
                    </i>
                    &nbsp;&nbsp;&nbsp;
                    <i>
                      <FaTrash color="red" size={20} />
                    </i>
                  </td>
                </tr>
                })
              }
              
            </tbody>
          </div>
        </div>
      </div>
    </>
  );
};

export default AllProducts;
