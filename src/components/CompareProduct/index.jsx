import React from 'react'
import styles from './index.module.css';
const CompareProduct = () => {
    return (
        <div className={styles.tableCont}>
            <table class="table">
                <thead>
                    <tr>
                        <th>product1</th>
                        <th>product2</th>
                        <th>product3</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td scope="row">about product one</td>
                        <td>about product two</td>
                        <td>about product three</td>
                    </tr>
                    <tr>
                        <td scope="row"></td>
                        <td></td>
                        <td></td>
                    </tr>
                </tbody>
            </table>
        </div>
    )
}
export default CompareProduct