import React, {useState} from 'react'
import {Container} from "./style";
import Layout from '../../components/Layout'
import SignIn from './SignIn'
import SignUp from './SignUp'
import {FormOptionsContainer, FormOption} from "./style";


const Auth = () => {

    const [formToShow, setFormToShow] = useState('sign_in');

    const handleShowForm = (form) => {
        setFormToShow(form)
    };

    return (
        <Layout>
            <Container>
                <FormOptionsContainer>
                    <FormOption onClick={(e) => handleShowForm('sign_in')} isHighlighted={formToShow==='sign_in'} type={`button`}>Sign In</FormOption>
                    <FormOption onClick={(e) => handleShowForm('sign_up')} isHighlighted={formToShow==='sign_up'} type={`button`}>Create account</FormOption>
                </FormOptionsContainer>
                {formToShow === 'sign_in' ? <SignIn/> : <SignUp/>}
            </Container>
        </Layout>
    )
};

export default Auth