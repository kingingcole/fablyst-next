import styled from 'styled-components'
import {FOURTH_BREAKPOINT, THIRD_BREAKPOINT} from "../../constants";

export const Container = styled.div`
    width: 100%;
    box-sizing: border-box;
    display: flex;
    align-items: flex-start;
    justify-content: space-between;
    height: auto;
    
    @media (max-width: ${THIRD_BREAKPOINT}){
        flex-direction: column;
    };
`;

export const CartDetails = styled.div`
    width: 70%;
    box-sizing: border-box;
    height: auto;
    box-shadow: 0px 2px 23px rgba(0, 0, 0, 0.065925);
    border-radius: 2px;
    padding: 10px;
    padding-top: 0px;
    margin-right: 10px;
    
    @media (max-width: ${THIRD_BREAKPOINT}){
        width: 100%;
        margin: 0;
        margin-bottom: 10px
    };
`;

export const Table = styled.table`
    width: 100%;
    border-spacing: 0;
    border-collapse: collapse;

`;

export const Thead = styled.thead`
    font-size: 16px; 
    height: 200px
`;

export const HeadTRow = styled.tr`
    height: 52px;
    border-bottom: 1px solid #E9E9E9;
`;

export const ProductHeading = styled.td`
    font-weight: 500;
    width: 50%;
`;

export const Td = styled.td`
    text-align: right;
    font-weight: 500;
    padding: 0;
    font-size: 14.11px;
    
    @media (max-width: ${THIRD_BREAKPOINT}){
        font-size: 12.3px;
    };
`;

export const TRow = styled.tr`
    height: 80px;
`;

export const ItemDetails = styled.td`
    display: flex;
    align-items: center;
`;

export const Image = styled.img`
    height: 70px;
    width: 50px;
    background: #f5f5f5;
    margin-right: 5px;
    
    @media (max-width: ${FOURTH_BREAKPOINT}){
        display: none
    };

`;

export const ProductCategory = styled.small`
    text-transform: uppercase;
    font-size: 11px;
    color: #9B9B9B
`;

export const ProductTitle = styled.p`
    margin: 0;
    width: 100%;
    font-size: 15px;
    font-weight: 500;
    
    @media (max-width: ${FOURTH_BREAKPOINT}){
        margin: 0;
        margin-right: 10px
    };
`;

export const RemoveButton = styled.p`
    margin: 0;
    padding: 0;
    font-size: 10px;
    height: 15px;
    width: 15px;
    background: #D5D5D5;
    display: flex;
    align-items: center;
    justify-content: center;
    color: white;
    border-radius: 50%;
    margin-right: 5px;
    &:hover{background: black}
`;

export const Dropdown = styled.select`
    background: #EDECEC;
    padding: 8px 15px;
    border: none;
    margin-right: 10px;
    cursor: pointer;
    
    @media (max-width: ${THIRD_BREAKPOINT}){
        padding: 8px;
    };
`;

export default () => null