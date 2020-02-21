import React from 'react';
import styled from 'styled-components'
import Button from '../atoms/Button'
import {FIRST_BREAKPOINT, SECOND_BREAKPOINT, THIRD_BREAKPOINT} from "../../constants";
import Link from '../atoms/Link'

const NewProductCard = ({margin, title, category, description, price, productImage, currencyCode, handle}) => {
    return (
        <Card margin={margin}>
            <ProductImage src={productImage}/>
            <ProductDetails>
                <Link href={'/product/[pid]'} as={`/product/${handle}`}>
                    <Title>{title}</Title>
                </Link>
                <Category>{category}</Category>
                <Price>{`${currencyCode} ${price}`}</Price>
                <Button color={`black`} background={`white`} borderColor={`black`} href={`/product/[pid]`} as={`/product/${handle}`}>shop now</Button>
            </ProductDetails>
        </Card>
    )
};

export default NewProductCard

const Card = styled.div`
    border: 1px solid #D9D9D9;
    padding: 10px;
    background: white;
    box-sizing: border-box;
    display: flex;
    align-items: center;
    width: 50%;
    margin: ${props => props.margin};
    height: 300px;
    
    @media (max-width: ${FIRST_BREAKPOINT}) {
        padding-right: 5px;
    };
    
    @media (max-width: ${SECOND_BREAKPOINT}) {
        margin: 10px 0;
        width: 100%;
        max-width: 660px;
        height: 220px
    };

`;

const ProductImage = styled.img`
    height: 100%;
    width: 50%;
    background: #c3c3c3;
`;

const ProductDetails = styled.div`
    color: #545454;
    font-weight: 500;
    text-align: left;
    margin-left: 20px;
    width: 50%;
    height: 100%;
    
    @media (max-width: ${FIRST_BREAKPOINT}) {
        margin-left: 6.6px;
    };
    
    @media (max-width: ${SECOND_BREAKPOINT}) {
        margin-left: 15px;
    };

`;

const Title = styled.h6`
    font-style: normal;
    font-size: 22px;
    margin: 0;
    text-transform: capitalize;
    
    @media (max-width: ${SECOND_BREAKPOINT}) {
        font-size: 16px
    };

`;

const Category = styled.p`
    font-size: 14px;
    margin: 0;
    text-transform: capitalize;
    
    @media (max-width: ${SECOND_BREAKPOINT}) {
        font-size: 14px
    };

`;

const Description = styled.p`
    font-size: 14px;
    margin: 8px 0;
    text-transform: capitalize;
    
    @media (max-width: ${THIRD_BREAKPOINT}) {
        display: none
    };

`;

const Price = styled.p`
    font-weight: 600;
    font-size: 17px;
    margin-bottom: 20px;
    margin-top: 10px;
    
    @media (max-width: ${SECOND_BREAKPOINT}) {
        font-size: 14px
    };
    
    @media (max-width: ${THIRD_BREAKPOINT}) {
        margin-top: 10px
    };

`;