import React from 'react'
import styles from './index.module.css';
import PopularProducts from '../../../components/PopularProducts';
import ProductCard from '../../../components/ProductCard';
import SectionMenu from '../../../shared/SectionMenu';
import { pProducts } from '../../../data';
const RelatedProducts = () => {
    return (
        <>
            <div className={styles.main}>
                <SectionMenu title="Related Products" />
                <div className={styles.popularProducts}>
                    {pProducts.slice(0, 5).map((it, index) => (
                        <ProductCard key={index} it={it} />
                    ))}
                </div>
            </div>
        </>


    )
}

export default RelatedProducts;