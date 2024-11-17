import React from "react";
import styles from "./index.module.css";
import { orderdata } from "../../../data/orderdata";
import { orderdata1 } from "../../../data/vendordashboardOrderdata";
const Orders = ({ name }) => {
  return (
    <>
      <div className={styles.ordercontainer}>
        <h2 className={styles.orderheading}>{name}</h2>
        <table>
          <thead>
            <tr>
              <th
                className={
                  name == "Recent Orders"
                    ? styles.recentorders
                    : styles.recentorders1
                }
              >
                Order
              </th>
              <th
                className={
                  name == "Recent Orders"
                    ? styles.recentorders
                    : styles.recentorders1
                }
              >
                Date
              </th>
              <th
                className={
                  name == "Recent Orders"
                    ? styles.recentorders
                    : styles.recentorders1
                }
              >
                Status
              </th>
              <th
                className={
                  name == "Recent Orders"
                    ? styles.recentorders
                    : styles.recentorders1
                }
              >
                Total
              </th>
              <th
                className={
                  name == "Recent Orders"
                    ? styles.recentorders
                    : styles.recentorders1
                }
              >
                Actions
              </th>
            </tr>
          </thead>
          <tbody>
            {name == "Recent Orders"
              ? orderdata1.map((item) => {
                  return (
                    <tr>
                      <td
                        className={
                          name == "Recent Orders"
                            ? styles.recentorders
                            : styles.recentorders1
                        }
                      >
                        {item.order}
                      </td>
                      <td
                        className={
                          name == "Recent Orders"
                            ? styles.recentorders
                            : styles.recentorders1
                        }
                      >
                        {item.date}
                      </td>
                      <td
                        className={
                          name == "Recent Orders"
                            ? styles.recentorders
                            : styles.recentorders1
                        }
                      >
                        {item.status}
                      </td>
                      <td
                        className={
                          name == "Recent Orders"
                            ? styles.recentorders
                            : styles.recentorders1
                        }
                      >
                        {item.total}
                      </td>
                      <td
                        className={
                          name == "Recent Orders"
                            ? styles.recentorders
                            : styles.recentorders1
                        }
                      >
                        {item.action}
                      </td>
                    </tr>
                  );
                })
              : orderdata.map((item) => {
                  return (
                    <tr>
                      <td
                        className={
                          name == "Recent Orders"
                            ? styles.recentorders
                            : styles.recentorders1
                        }
                      >
                        {item.order}
                      </td>
                      <td
                        className={
                          name == "Recent Orders"
                            ? styles.recentorders
                            : styles.recentorders1
                        }
                      >
                        {item.date}
                      </td>
                      <td
                        className={
                          name == "Recent Orders"
                            ? styles.recentorders
                            : styles.recentorders1
                        }
                      >
                        {item.status}
                      </td>
                      <td
                        className={
                          name == "Recent Orders"
                            ? styles.recentorders
                            : styles.recentorders1
                        }
                      >
                        {item.total}
                      </td>
                      <td
                        className={
                          name == "Recent Orders"
                            ? styles.recentorders
                            : styles.recentorders1
                        }
                      >
                        {item.action}
                      </td>
                    </tr>
                  );
                })}
          </tbody>
        </table>
      </div>
    </>
  );
};

export default Orders;
