import React from 'react'
import styled from 'styled-components'
import Button from '../atoms/Button'
import {FOURTH_BREAKPOINT, THIRD_BREAKPOINT} from "../../constants";
import Link from 'next/link'

const HeroText = () => {
    return (
        <Container>
            <SmallText>Classic yet cool. Made for you.</SmallText>
            <LargeText>we know denim</LargeText>
            <Button color={`white`} background={`black`} borderColor={`black`} href='/home'>Shop now</Button>
        </Container>
    )
};

export default HeroText

const Container = styled.div`
    text-align: right;
    position: relative;
    top: 90px;

    @media (max-width: ${THIRD_BREAKPOINT}) {
        top: 130px

    };
`;

const LargeText = styled.h1`
    text-transform: uppercase;
    margin: 10px 0;
    color: #382802;
    font-weight: 600;
    font-size: 48px;
    line-height: 56px;
    max-width: 300px;
    margin-left: auto;
    margin-bottom: 25px;

    @media (max-width: ${THIRD_BREAKPOINT}) {
        font-size: 35px;
        margin-top: 3px;

    };

    @media (max-width: ${FOURTH_BREAKPOINT}) {
        font-size: 30px;
        line-height: 40px
    };
`;

const SmallText = styled.h6`
    font-style: italic;
    margin: 0
`;