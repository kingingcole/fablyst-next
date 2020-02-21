import React, {useState} from 'react'
import {Form, Input, Label, InputGroup, SubmitButton, CheckBox, ErrorMsg} from "./style";
import {useMutation, useApolloClient} from '@apollo/react-hooks';
import gql from 'graphql-tag';
import withData from '../../lib/apollo'
import { useRouter } from 'next/router'


const SIGN_IN = gql`
  mutation customerAccessTokenCreate($input: CustomerAccessTokenCreateInput!) {
    customerAccessTokenCreate(input: $input) {
      customerUserErrors {
        code
        field
        message
      }
      customerAccessToken {
        accessToken
        expiresAt
      }
    }
  }
`;

const SignIn = () => {
    const client = useApolloClient();
    const router = useRouter()

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [d, setD] = useState(false); //another state variable created to manage button active state
    const [errorMessage, setErrorMessage] = useState('');
    const [showErrorMessage, setShowErrorMessage] = useState(false);

    let disableButton = () => {
        if ((email.length <= 0 || password.length <= 0) || d === true) return true;
        return false;
    };

    let variables = {
        "input": {
            "email": email,
            "password": password
        }
    };

    const [signIn, {data, called}] = useMutation(SIGN_IN,
        {
            onError: (err) => handleError(err),
            onCompleted: (data) => handleLoginSuccess(data)
        }
    );

    const handleSubmit = e => {
        e.preventDefault();
        setErrorMessage('');
        setShowErrorMessage(false);
        setD(true);

        //handle signin
        signIn({variables});
    };

    const handleError = (err) => {
        setD(false);
        console.log(err);
        setErrorMessage('An error occurred. Please check your network and try again');
        setShowErrorMessage(true);

        //todo handle more errors
    };

    const handleLoginSuccess = (data) => {
        console.log(data)
        if (data.customerAccessTokenCreate.customerUserErrors.length) {
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
                <Label htmlFor={`email`}>your E-Mail address</Label>
                <Input type={`email`} id={`email`} onChange={(e) => setEmail(e.target.value)}/>
            </InputGroup>
            <InputGroup>
                <Label htmlFor={`password`}>your password</Label>
                <Input type={`password`} id={`password`} onChange={(e) => setPassword(e.target.value)}/>
            </InputGroup>
            <div style={{
                display: 'flex',
                justifyContent: 'space-between',
                width: '100%',
                marginBottom: '10px',
                alignItems: 'center'
            }}>
                <span style={{fontSize: '14px'}}>I forgot my password</span>
                <div style={{display: 'flex', alignItems: 'center'}}><input type={`checkbox`} id={`checkbox`}/> <Label
                    htmlFor='checkbox' style={{textAlign: 'right', margin: '0px'}}>Remember me</Label></div>
            </div>
            <SubmitButton disabled={disableButton()} disableButton={disableButton()}>sign in</SubmitButton>
        </Form>
    )
};

export default withData(SignIn)