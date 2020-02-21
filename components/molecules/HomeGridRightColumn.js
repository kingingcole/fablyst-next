import React from 'react'
import styled from 'styled-components'
import Button from '../atoms/Button'
import {FIRST_BREAKPOINT, THIRD_BREAKPOINT} from "../../constants";
import {SECOND_BREAKPOINT} from "../../constants";
import banner1 from '../../assets/adult-beautiful-elegant-wear.jpg'
import banner2 from '../../assets/persons-wearing-sneakers.jpg'
import banner3 from '../../assets/woman-in-blue-denim.jpg'


const HGRC = () => {
    return (
        <ColumnContainer>
            <TopRow>
                <TopRowLeftColumn>
                    <LargeText style={{textAlign: 'center', lineHeight: '40px'}}>online <br/>exclusive</LargeText>
                    <Button href="/" background={`transparent`} color={`white`} hidePadding={true}>shop now</Button>
                </TopRowLeftColumn>
                <TopRowRightColumn>
                    <LargeText>spring 2019</LargeText>
                    <Button href="/" background={`transparent`} color={`white`} hidePadding={true}>shop now</Button>
                </TopRowRightColumn>
            </TopRow>
            <BottomRow>
                <LargeText>style new <br/>for all occassions</LargeText>
                <Button href="/" background={`transparent`} color={`white`} hidePadding={true}>shop now</Button>
            </BottomRow>
        </ColumnContainer>
    )
};

export default HGRC

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
    margin-right: 0;
    
    @media (max-width: ${FIRST_BREAKPOINT}) {
        margin-left: 5px;
    };
    
    @media (max-width: ${THIRD_BREAKPOINT}) {
        width: 100%;
        margin: 0
    };
`;

const Row = styled.div`
    box-sizing: border-box;
    height: 50%;
    width: 100%;
    padding: 0 40px;
    display: flex;
`;

const TopRow = styled(Row)`
    margin-bottom: 10px;
    display: flex;
    align-items: center;
    justify-contents: space-between;
    padding: 0;
    
    @media (max-width: ${FIRST_BREAKPOINT}) {
        margin-bottom: 5px;
    };
    
    @media (max-width: ${SECOND_BREAKPOINT}) {
        flex-direction: column;
    };
    
    @media (max-width: ${THIRD_BREAKPOINT}) {
        width: 100%;
    };
`;

const TopRowLeftColumn = styled.div`
    background: linear-gradient( rgba(0, 0, 0, 0.3), rgba(0, 0, 0, 0.2) ), url(${banner1}) center;
    color: white;
    box-sizing: border-box;
    width: 50%;
    height: 100%;
    margin-right: 10px;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    
    @media (max-width: ${FIRST_BREAKPOINT}) {
        margin-right: 5px;
        padding-bottom: 10px
    };
    
    @media (max-width: ${SECOND_BREAKPOINT}) {
        width: 100%;
        margin: 0 0 5px 0;
    };
    
    @media (max-width: ${THIRD_BREAKPOINT}) {
        width: 100%;
        height: 130px
    };
`;

const TopRowRightColumn = styled.div`
    background: linear-gradient( rgba(0, 0, 0, 0.3), rgba(0, 0, 0, 0.2) ), url(${banner3}) center;
    color: white;
    box-sizing: border-box;
    width: 50%;
    height: 100%;
    margin-left: 10px;
    display: flex;
    align-items: center;
    justify-content: flex-end;
    flex-direction: column;
    padding: 0;
    padding-bottom: 30px;
    
    @media (max-width: ${FIRST_BREAKPOINT}) {
        margin-left: 5px;
    };
    
    @media (max-width: ${SECOND_BREAKPOINT}) {
        width: 100%;
        margin: 5px 0 0 0;
    };
    
    @media (max-width: ${THIRD_BREAKPOINT}) {
        width: 100%;
        height: 130px
    };
\`;
`;

const BottomRow = styled(Row)`
    background: linear-gradient( rgba(0, 0, 0, 0.3), rgba(0, 0, 0, 0.2) ), url(${banner2}) center;
    color: white;
    margin-top: 10px;
    align-items: flex-start;
    justify-content: center;
    flex-direction: column;
    
    @media (max-width: ${FIRST_BREAKPOINT}) {
        margin-top: 5px;
        align-items: center;
    };
    
    @media (max-width: ${THIRD_BREAKPOINT}) {
        width: 100%;
        height: 130px
    };
`;

const LargeText = styled.h2`
    font-weight: bold;
    font-size: 27px;
    line-height: 52px;
    text-transform: uppercase;
    text-align: left;
    margin: 10px 0;
    padding: 0;
    
    @media (max-width: ${FIRST_BREAKPOINT}) {
        font-size: 23px;
        line-height: 30px
    };
    
    @media (max-width: ${THIRD_BREAKPOINT}) {
        text-align: center;
        font-size: 20px;
        line-height: 25px
    };

`;

const SmallText = styled.p`
    font-size: 32px;
    line-height: 77px;
    text-align: left;
    margin: 10px 0
`;