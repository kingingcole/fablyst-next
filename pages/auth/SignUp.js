import React, {useState, useEffect} from 'react'
import {Form, Input, Label, InputGroup, SubmitButton, CheckBox, FinePrint, ErrorMsg} from "./style";

import {useMutation} from '@apollo/react-hooks';
import gql from 'graphql-tag';
import withData from '../../lib/apollo'
import { useRouter } from 'next/router'



const CREATE_USER = gql`
  mutation customerCreate($input: CustomerCreateInput!) {
    customerCreate(input: $input) {
      userErrors {
        field
        message
      }
      customer {
        id
        email
      }
    }
  }
`;

const SignUp = () => {

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');
    const [firstName, setFirstName] = useState('');
    const [lastName, setLastname] = useState('');

    const [d, setD] = useState(false); //another state variable created to manage button active state
    const [errorMessage, setErrorMessage] = useState('');
    const [showErrorMessage, setShowErrorMessage] = useState(false);

    let disableButton = () => {
        if ((email.length <= 0 || password.length <= 0 || password !== confirmPassword || lastName.length <= 0 || firstName.length <= 0) || d === true) return true;
        return false;
    };

    let variables = {
        "input": {
            "email": email,
            "password": password,
            "firstName": firstName,
            "lastName": lastName,
        }
    };
    const [createUser, {data, loading, error, called}] = useMutation(CREATE_USER,
        {
            onError: (err) => handleError(err),
            onCompleted: (data) => handleLoginSuccess(data)
        }
    );

    const handleSubmit = e => {
        e.preventDefault();
        setD(true);

        //handle signup
        createUser({variables});
    };

    const handleError = (err) => {
        setD(false);
        console.log(err);
        setErrorMessage('An error occurred. Please check your network and try again');
        setShowErrorMessage(true);

        //todo handle more errors
    };

    const handleSignUpSuccess = (data) => {
        console.log(data)
        if (data.customerAccessTokenCreate.userErrors.length) {
            setShowErrorMessage(true)
            setErrorMessage('Username or password is incorrect.')
        } else {
            client.writeData({ data: { isLoggedIn: true } });
            window.localStorage.setItem('token', data.customerAccessTokenCreate.customerAccessToken.accessToken)
            router.push('/')
        }
    };


    return (
        <Form onSubmit={handleSubmit}>
            <ErrorMsg show={showErrorMessage}>{errorMessage}</ErrorMsg>
            <InputGroup>
                <Label htmlFor={`email`}>your E-Mail address *</Label>
                <Input type={`email`} id={`email`} onChange={(e) => setEmail(e.target.value)} required/>
            </InputGroup>
            <InputGroup>
                <Label htmlFor={`password`}>create password *</Label>
                <Input type={`password`} id={`password`} onChange={(e) => setPassword(e.target.value)} required/>
                <FinePrint>Password must be 8-20 characters, including: at least one capital letter, at least one small
                    letter, one number and one special character - ! @ # $ % ^ & * ( ) _ +</FinePrint>
            </InputGroup>
            <InputGroup>
                <Label htmlFor={`confirm_password`}>confirm password *</Label>
                <Input type={`password`} id={`confirm_password`} onChange={(e) => setConfirmPassword(e.target.value)}
                       required/>
            </InputGroup>
            <InputGroup>
                <Label htmlFor={`first_name`}>first name *</Label>
                <Input type={`text`} id={`first_name`} onChange={(e) => setFirstName(e.target.value)} required/>
            </InputGroup>
            <InputGroup>
                <Label htmlFor={`surname`}>last name *</Label>
                <Input type={`text`} id={`surname`} onChange={(e) => setLastname(e.target.value)} required/>
            </InputGroup>
            <SubmitButton disable={disableButton()} disableButton={disableButton()}>save</SubmitButton>
        </Form>
    )
};

export default withData(SignUp)