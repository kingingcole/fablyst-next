import React from 'react'
import styled from 'styled-components'
import {THIRD_BREAKPOINT} from "../../../constants";

const Subscribe = () => {

    const handleSubmit = function (){}; //handle email submit
    const handleChange = function (){}; //handle input change

    return(
        <Container id="subscribe">
            <Text>Sign up to recieve 15% off your first order</Text>
            <Form onSubmit={handleSubmit}>
                <Input type={`email`} onChange={handleChange}/>
                <ButtonsContainer>
                <Button color={`#DF0052`} borderColor={`#DF0052`}>Women</Button>
                <Button color={`#000000`} borderColor={`#000000`}>Men</Button>
                </ButtonsContainer>
            </Form>
        </Container>
    )
};
export default Subscribe


const Container = styled.section`
    margin: 0;
    padding: 30px 6%;
    box-sizing: border-box;
    display: flex;
    align-items: center;
    justify-content: space-between;
    background: #EDEDED;
    
    @media (max-width: 970px) {
        flex-direction: column;
    }
`;

const Text = styled.p` 
    font-weight: 500;
    font-size: 20px;
    line-height: 30px;
    color: #000;
    padding: 0;
    margin: 0
`;

const Form = styled.form`
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    display: flex;
    align-items: center;
    justify-content: space-between;
    width: 55%;
    
    @media (max-width: 970px) {
        margin-top: 20px;
        width: 70%;
    };
    
    @media (max-width: 800px) {
      width: 90%
    };
    
    @media (max-width: 450px) {
        flex-direction: column
    };
`;

const Input = styled.input`
    padding: 10px;
    border: 2px solid #B3B3B3;
    box-sizing: border-box;
    border-radius: 2px;
    width: 70%;
    
    @media (max-width: 1090px) {
      width: 65%
    };
    
    @media (max-width: 800px) {
      width: 70%
    };
    
    @media (max-width: 450px) {
        width: 90%;
        margin-bottom: 13px
    };
    
`;

const Button = styled.button`
    padding: 10px 20px;
    font-weight: 600;
    color: ${props => props.color};
    border: 2px solid ${props => props.borderColor};
    background: transparent;
    text-transform: uppercase;
    cursor: pointer
`;

const ButtonsContainer = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
    width: 180px
`;