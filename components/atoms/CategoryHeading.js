import React from 'react';
import styled from 'styled-components'
import {THIRD_BREAKPOINT, FOURTH_BREAKPOINT} from "../../constants";

const CategoryHeading = ({largeText, smallText}) => {
    return (
        <Container smallText={smallText}>
            <LargeText>{largeText}</LargeText>
            {smallText && <SmallText>{smallText}</SmallText>}
        </Container>
    )
};

export default CategoryHeading

const Container = styled.div`
    padding: 10px;
    width: 300px;
    max-width: 400px;
    margin: 0 auto;
    position: relative;
    background: white;
    top: ${ ({smallText}) => smallText ? '-40px' : '-35px'};
    display: block;
    text-align: center;

    @media (max-width: ${THIRD_BREAKPOINT}) {
        max-width: 200px;
        top: ${ ({smallText}) => smallText ? '-40px' : '-32px'};
    };
`;

const LargeText = styled.h4`   
    font-weight: bold;
    font-size: 20px;
    color: #363636;
    text-transform: uppercase;
    margin: 0;

    @media (max-width: ${THIRD_BREAKPOINT}) {
        font-size: 15px;
    };
`;

const SmallText = styled.p`
    font-weight: normal;
    font-size: 16px;
    color: #9F9F9F;
    margin: 0;

    @media (max-width: ${FOURTH_BREAKPOINT}) {
        font-size: 14px;
    };
`;