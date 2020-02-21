import React, {Fragment} from 'react'
import {Container} from "./style";
import Navbar from '../organisms/Nav'
import Footer from '../organisms/Footer'

const Index = ({children}) => {
    return (
        <Fragment>
            <Navbar />
            <Container>
                {children}
            </Container>
            <Footer />
        </Fragment>
    )
};


export default Index