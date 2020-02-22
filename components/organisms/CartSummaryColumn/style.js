import styled from 'styled-components'
import {THIRD_BREAKPOINT} from '../../../constants'

export const Container = styled.div`
    width: 30%;
    height: auto;
    box-shadow: 0px 2px 23px rgba(0, 0, 0, 0.065925);
    border-radius: 2px;
    padding: 15px;
    box-sizing: border-box;
    margin-left: 10px;
    padding-top: 0;
    
    @media (max-width: ${THIRD_BREAKPOINT}){
        width: 100%;
        margin: 0;
        margin-top: 10px
    };
`

export const Heading = styled.h4`
    font-weight: 600;
    font-size: 16px;
    text-align: right;
    text-transform: uppercase;
    padding: 15px 0;
    margin: 0;
    border-bottom: 1px solid #E9E9E9;
    
    @media (max-width: ${THIRD_BREAKPOINT}){
        text-align: left
    };
`;

export const PromoCodeForm = styled.form`
    width: 100%;
    box-sizing: border-box;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    margin-top: 10px;
    padding-bottom: 40px;
`;

export const Label = styled.label`
    font-size: 14px;
`;

export const Input = styled.input`
    border: 1px solid #000000;
    box-sizing: border-box;
    border-radius: 2px;
    width: 100%;
    height: 40px;
    padding: 0 10px
`;

export const Button = styled.button`
    background: ${({background}) => background};
    height: 40px;
    padding: auto;
    width: ${({width}) => width};
    border: ${({borderColor}) => `1px solid ${borderColor}`};
    border-radius: 2px;
    cursor: pointer;
    font-weight: 600;
    color: ${({color}) => color};
    margin-top: 10px;
    
    &:hover{
        color: white; 
        background: ${({hoverBackground}) => hoverBackground || 'black'};
        border-color: ${({hoverBorderColor}) => hoverBorderColor || 'black'}
    }
`;

export const CartPriceSection = styled.div`
    height: auto;
    border-bottom: 1px solid #E9E9E9;
    padding: 15px 10px;
    max-width: 300px;
    margin: auto;
`;

export const PriceInfo = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
    margin-bottom: 10px
    
`;

export const PriceText = styled.p`
    font-weight: normal;
    font-size: 15px;
    line-height: 15px;
    font-weight: normal;
`;

export const TotalPriceText = styled(PriceText)`
    font-weight: 600
`;

export const Price = styled.p`
    font-weight: 600;
`;

export const TotalPrice = styled(Price)`
    color: #DF0052;
    font-size: 18px
`;

export default () => null