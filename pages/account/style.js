import styled from 'styled-components'
import {THIRD_BREAKPOINT} from "../../constants";

export const Wrapper = styled.section`
    display: flex;
    align-items: flex-start;
    justify-content: space-between;
    width: 100%;
    height: auto;
    
    @media (max-width: ${THIRD_BREAKPOINT}){
        flex-direction: column;
    };
`;

export const MainColumn = styled.div`
    box-sizing: border-box;
    margin: 0;
    box-shadow: 0px 2px 23px rgba(0, 0, 0, 0.065925);
    border-radius: 2px;
    height: 100%;
    padding: 10px;
    height: 100%;
    width: 70%;
    margin-left: 10px;
    padding-bottom: 30px;
    
    @media (max-width: ${THIRD_BREAKPOINT}){
        width: 100%;
        margin: 0;
        margin-top: 10px;
    };
`;


export const ColHeading = styled.h5`
    color: black;
    padding: 5px 0;
    width: 100%;
    margin: 0;
    font-weight: 500;
`;

export const RightColHeading = styled(ColHeading)`
    text-align: left;
    text-transform: capitalize;
`;

export const LeftColHeading = styled(ColHeading)`
    text-align: right;
    text-transform: uppercase;
    
    @media (max-width: ${THIRD_BREAKPOINT}){
        text-align: left
    };
`;

export const FormGroup = styled.div`
    width: 100%;
    box-sizing: border-box;
    margin: 0;
    display: flex;
    padding: 0;
    
    @media (max-width: ${THIRD_BREAKPOINT}){
        flex-direction: column
    };
`;

export const FormRow = styled.div`
    width: 100%;
    box-sizing: border-box;
    margin: 10px;
    
    @media (max-width: ${THIRD_BREAKPOINT}){
    width: auto ;
    };
`;

export const Input = styled.input`
    width: 100%;
    height: 40px;
    padding-left: 5px;
    background: #F1F1F1;
    border: 0.5px solid #9B9B9B;
    box-sizing: border-box;
    font-size: 1.1em;
`;

export const Label = styled.label`
    color: black;
    font-size: 14px;
    margin-bottom: 10px;
    text-transform: capitalize;
    display: block   
`;

export const Button = styled.button`
    padding: 15px 40px;
    border: 0;
    color:  ${({color}) => color};
    background: ${({background}) => background};
    border-radius: 2px;
    font-size: 16px;
    font-weight: 600px;
    cursor: pointer
`;

export const HR = styled.hr`
    border: 1px solid #E9E9E9;
`;

export default () => null