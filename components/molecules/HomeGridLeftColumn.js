import React from 'react'
import styled from 'styled-components'
import Button from '../atoms/Button'
import banner from '../../assets/woman-holding-pink-tulips.jpg'

import {FIRST_BREAKPOINT, THIRD_BREAKPOINT} from "../../constants";
import {SECOND_BREAKPOINT} from "../../constants";

const HGLC = () => {
    return (
        <ColumnContainer>
            <LargeText>all new! <br/> spring things</LargeText>
            <SmallText>Save up to 30% off</SmallText>
            <Button href="/" background={`transparent`} color={`white`} hidePadding={true}>shop now</Button>
        </ColumnContainer>
    )
};

export default HGLC

const ColumnContainer = styled.div`
    box-sizing: border-box;
    width: 50%;
    margin: 10px;
    height: 100%; 
    color: white;
    display: flex;
    align-items: flex-start;
    justify-content: center;
    flex-direction: column;
    background: linear-gradient( rgba(0, 0, 0, 0.3), rgba(0, 0, 0, 0.2) ), url(${banner}) center;
    margin-left: 0;
    padding: 0 40px;
    
    @media (max-width: ${FIRST_BREAKPOINT}) {
        margin-right: 5px;
        padding: 0 20px
    };
    
    @media (max-width: ${FIRST_BREAKPOINT}) {
        width: 75%;
    };
    
    @media (max-width: ${THIRD_BREAKPOINT}) {
        width: 100%;
        padding: 20px;
        margin: 20px 0
    };
`;

const LargeText = styled.h2`
    font-weight: bold;
    font-size: 62px;
    line-height: 77px;
    text-transform: uppercase;
    text-align: left;
    margin: 0;
    margin-bottom: 10px;
    padding: 0;
    
    @media (max-width: ${FIRST_BREAKPOINT}) {
        font-size: 50px;
        line-height: 65px;
    };
    
    @media (max-width: ${SECOND_BREAKPOINT}) {
        font-size: 40px;
        line-height: 50px;
    }
`;

const SmallText = styled.p`
    font-size: 32px;
    line-height: 77px;
    text-align: left;
    margin: 10px 0;
    
    @media (max-width: ${FIRST_BREAKPOINT}) {
        font-size: 28px;
        line-height: 65px;
    };
    
    @media (max-width: ${SECOND_BREAKPOINT}) {
        font-size: 22px;
        line-height: 50px;
    }
`;

