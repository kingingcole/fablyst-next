import React from 'react';
import {Container} from './style'
import Subscribe from './Subscribe'
import FooterLinksSection from './FooterLinksSection'
import Features from './Features'


const Footer = () => {
    return (
        <Container>
            <Features />
            <Subscribe/>
            <FooterLinksSection />
        </Container>
    )
};

export default Footer