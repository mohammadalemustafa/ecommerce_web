import React from 'react'
import RelatedProducts from './RelatedProducts'
import Descriotion from './SingleProductDescriotion'
import Container from '../../ui/Container'
const SingleProducts = () => {
    return (
        <Container>
            <Descriotion />
            <RelatedProducts />
        </Container>
    )
}

export default SingleProducts