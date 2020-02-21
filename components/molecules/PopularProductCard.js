import React from 'react';
import styled from 'styled-components'
import Button from '../atoms/Button'
import {FIRST_BREAKPOINT, FOURTH_BREAKPOINT, THIRD_BREAKPOINT} from "../../constants";
import {SECOND_BREAKPOINT} from "../../constants";
import Link from "../atoms/Link";

const PopularProductCard = ({title, price, image, currencyCode, handle}) => {
    return (
        <Card>
            <ProductImage src={image} alt={handle}/>
            <ProductDetails>
                <Link href={'/product/[pid]'} as={`/product/${handle}`}>
                    <Title>{title}</Title>
                </Link>
                <Price>{`${currencyCode} ${price}`}</Price>
                <Button href={`/product/[pid]`} as={`/product/${handle}`} borderColor={`black`} background={`black`} color={`white`}>shop now</Button>
            </ProductDetails>
        </Card>
    )
};
export default PopularProductCard

const Card = styled.div`
    height: 600px;
    width: 32%; //this allows a little margin between them
    box-sizing: border-box;
    box-shadow: 0px 2px 23px rgba(0, 0, 0, 0.065925);
    border-radius: 2px;
    
    @media (max-width: ${FIRST_BREAKPOINT}) {
        height: 500px
    };
    
    @media (max-width: ${SECOND_BREAKPOINT}) {
        height: 400px
    };
    
    @media (max-width: ${THIRD_BREAKPOINT}) {
        width: 100%;
        max-width: 350px;
        margin: 10px 0;
        height: 600px
    };

    @media (max-width: ${FOURTH_BREAKPOINT}) {
        height: 550px
    };

`;

const ProductImage = styled.img`
    width: 100%;
    height: 70%;
    margin: 0;
    background: #C9C9C9;
    
    @media (max-width: ${FIRST_BREAKPOINT}) {
        height: 60%;
    };
    
    @media (max-width: ${THIRD_BREAKPOINT}) {
        height: 70%;
    };
`;


const ProductDetails = styled.div`
    height: auto;
    margin: 0;
    padding: 30px 0;
    text-align: center;;
    
    @media (max-width: ${FIRST_BREAKPOINT}) {
        padding-top: 10px;
    }

`;

const Title = styled.h6`
    font-size: 17px;
    margin: 0px;
    text-transform: capitalize;
`;

const Price = styled.p`
    font-size: 14.7px;
    margin: 10px 0;
    font-weight: 500;
    margin-bottom: 30px
`;