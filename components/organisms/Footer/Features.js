import React from 'react'
import styled from 'styled-components'

import CallUs from '../../../assets/icn_callUs.svg';
import Chat from '../../../assets/icn_chat.svg';
import GiftCards from '../../../assets/icn_giftCards.svg';
import Shipping from '../../../assets/icn_Shipping.svg';

import {FIRST_BREAKPOINT, THIRD_BREAKPOINT} from "../../../constants";

const Features = () => {
    return(
        <Container>
            <FeatureBlock>
                <Shipping />
                <FeatureDetails>
                    <FeatureTitle>free shipping</FeatureTitle>
                    <FeatureDescription>When you spend $50+</FeatureDescription>
                </FeatureDetails>
            </FeatureBlock>

            <FeatureBlock>
                <CallUs />
                <FeatureDetails>
                    <FeatureTitle>call us anytime</FeatureTitle>
                    <FeatureDescription>+123 4567 89</FeatureDescription>
                </FeatureDetails>
            </FeatureBlock>

            <FeatureBlock>
                <Chat />
                <FeatureDetails>
                    <FeatureTitle>chat with us</FeatureTitle>
                    <FeatureDescription>We offer 24-hour chat support</FeatureDescription>
                </FeatureDetails>
            </FeatureBlock>

            <FeatureBlock>
                <GiftCards />
                <FeatureDetails>
                    <FeatureTitle>gift cards</FeatureTitle>
                    <FeatureDescription>For your loved ones, in any amount</FeatureDescription>
                </FeatureDetails>
            </FeatureBlock>
        </Container>
    )
};

export default Features

const Container = styled.section`
    margin: 0;
    padding: 30px 6%;
    box-sizing: border-box;
    display: flex;
    align-items: center;
    justify-content: space-between;
    background: #F9F9F9;

    @media (max-width: ${THIRD_BREAKPOINT}) {
        display: none !important;
    };
`;

const FeatureBlock = styled.div`
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    display: flex;
    align-items: center;
    justify-content: space-around;
    text-align: left;
    width: 100%;
    
    @media (max-width: ${FIRST_BREAKPOINT}) {
        flex-direction: column;
        text-align: center;
    }

`;

const FeatureDetails = styled.div`
    width: 70%;
    font-size: 20px;
    
    @media (max-width: ${FIRST_BREAKPOINT}) {
        margin-top: 20px
    }
`;

const FeatureTitle = styled.h6`
    margin: 0;
    padding: 0;
    font-weight: bold;
    text-transform: uppercase
`;

const FeatureDescription = styled.h6`
    margin: 0;
    padding: 0;
    font-weight: 500;
`;
