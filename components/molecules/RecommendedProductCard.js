import React from 'react'
import styled from 'styled-components'
import {FIRST_BREAKPOINT, FOURTH_BREAKPOINT} from "../../constants";
import Link from '../atoms/Link'

class RecommendedProductCard extends React.Component {
    render() {
        const {title, category, price, productUrl, productImage, productId, handle} = this.props;

        return (
            <Card>
                <ProductImage src={productImage}/>
                <ProductDetails>
                    <a href={`/product/${handle}`}>
                        <Title>{title}</Title>
                    </a>
                    <Price>{price}</Price>
                </ProductDetails>
            </Card>
        )
    }
}

export default RecommendedProductCard

const Card = styled.div`
    height: auto;
    box-shadow: 0px 2px 23px rgba(0, 0, 0, 0.065925);
    width: 33%;
    background: white;
    text-decoration: none;
    box-sizig: border-box;
    margin: 0px;
    
    @media (max-width: ${FOURTH_BREAKPOINT}) {
        width: 100%;
        height: 450px;
        margin-bottom: 20px
    };
`;

const ProductImage = styled.img`
    height: 300px;
    width: 100%;
    background: #C9C9C9;
    
    @media (max-width: ${FOURTH_BREAKPOINT}) {
        height: 70%
    };
`;

const ProductDetails = styled.div`
    padding: 10px 5px;
    height: auto;
    text-align: center;
    text-transform: uppercase;
    
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    align-items: center;
    
    @media (max-width: ${FOURTH_BREAKPOINT}) {
        height: 30%;
        padding: 0;
        justify-content: center;
    };
`;

const Category = styled.p`
    font-size: 11.4px;
    color: #363636;
    margin: 0;
    padding: 0;
`;

const Title = styled.p`
    font-weight: 600;
    font-size: 16px;
    color: #303030;
    text-decoration: none;
    border-bottom: 0 !important;
    margin: 5px 0;
    padding: 0;
`;

const Price = styled.p`
    font-weight: 600;
    font-size: 14px;
    color: #303030;
    margin: 0;
    padding: 0;
`;
