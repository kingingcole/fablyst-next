import styled from 'styled-components'


export const Container = styled.section`
    padding-bottom: 20px;
`;

export const Form = styled.form`
    max-width: 400px;
    margin: auto;
`;

export const Input = styled.input`
    width: 100%;
    height: 40px;
    padding: 10px;
    border: 0.5px solid #9B9B9B;
    box-sizing: border-box;
`;

export const Label = styled.label`
    font-size: 14px;
    color: black;
    text-transform: capitalize;
    text-align: left;
    width: 100%;
    display: block;
    margin-bottom: 10px
`;

export const FinePrint = styled.p`
    font-size: 11px;
    color: black;
    text-align: left;
    width: 100%;
    margin: 3px 0 0 0 
`;

export const InputGroup = styled.div`
    margin-bottom: 20px
`;

export const SubmitButton = styled.button`
    width: 100%;
    padding: auto;
    height: 40px;
    font-size: 14px;
    font-weight: 500;
    border: 0;
    background: ${props => props.disableButton === true ? '#c3c3c3' : '#DF0052'};
    text-transform: uppercase;
    color: white;
    cursor:  ${props => props.disableButton === true ? 'not-allowed' : 'pointer'};
    transition: 0.4s all
`;

export const ErrorMsg = styled.p`
    color: red;
    display: ${({show}) => show===true ? 'block' : 'none' };
    margin-bottom: 10px;
    font-size: 14px;
`;

export const FormOptionsContainer = styled(Form)`
    display: flex;
    margin-bottom: 20px
`;

export const FormOption = styled.button`
    color: ${props => props.isHighlighted ? '#DF0052' : 'black'};
    font-size: 15px;
    text-align: left;
    border: 0;
    text-transform: uppercase;
    background: #EDEDED;
    margin-right: 20px;
    padding: 10px;
    cursor: pointer;
    font-weight: 500;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center
`;

export default () => null;
