import React from 'react'
import styled from 'styled-components'
import Button from '../atoms/Button'
import {THIRD_BREAKPOINT} from "../../constants";

const Subscribe = () => {
    return (
        <Container>
            <Text>Sign up for news and get 20% off</Text>
            <Button borderColor='black' background='white' color='black' href="#subscribe">get started</Button>
        </Container>
    )
};

export default Subscribe

const Container = styled.div`
   width: 100%;
   background: #F3F3F3;
   border-radius: 5px;
   display: flex;
   justify-content: space-between;
   align-items: center;
   padding: 10px 30px;
   box-sizing: border-box;
    
    @media (max-width: ${THIRD_BREAKPOINT}) {
        padding: 10px 10px;
    };
    
    @media (max-width: 354px) {
        display: none
    };
`;

const Text = styled.p`
    color: black;  
    font-size: 20px;
    line-height: 25px;
    
    @media (max-width: ${THIRD_BREAKPOINT}) {
        width: 60%;
        text-align: left;
        font-size: 14px
    };
`;