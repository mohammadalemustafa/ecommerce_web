import React from 'react';
import { useSelector } from 'react-redux';
import ProductCard from '../components/ProductCard';
import styles from './index.module.css';
import Container from '../ui/Container';
const WishList = () => {
    const data = useSelector(state => state.cart.wishlistdata);
    console.log(data);
    return (
        <Container>
            <div className={styles.pCont}>
                {data.map((it) => <ProductCard it={it} />)}
            </div>
        </Container>
    )
}
export default WishList;