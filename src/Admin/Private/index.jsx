import React from 'react'
import styles from './index.module.css';
import Anavbar from '../Navbar';
import Sidebar from '../sidebar';
import Footer from '../footer';
import Container from '../../ui/Container';
const Private = ({ element }) => {
    return (
        <Container >
            <div className={styles.layoutCont}>
                <div>
                    <Sidebar />
                </div>
                <div className={styles.container}>
                    <Anavbar />
                    <div className={styles.cont}>{element}</div>
                    <div className={styles.footer}>
                        <Footer />
                    </div>
                </div>
            </div>
        </Container>
    )
}
export default Private