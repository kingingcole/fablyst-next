import React from 'react';
import styled from 'styled-components'
import Link from 'next/link'
import {SaleLink} from '../Nav/style'
import FablystLogo from '../../atoms/FablystLogo'
import FeatherIcon from 'feather-icons-react';


import AMEX from '../../../assets/american express.svg';
import Discover from '../../../assets/discover.svg';
import MasterCard from '../../../assets/mastercard.svg';
import PayPal from '../../../assets/paypal.svg';
import Visa from '../../../assets/visa.svg';

import {SECOND_BREAKPOINT, THIRD_BREAKPOINT} from "../../../constants";

const FooterLinksSection = () => {
    return (
        <Container>
            {/*<Logo width={`100px`}/>*/}

            <Misc>
                <LinksContainer>
                    <LinksHeading>navigate</LinksHeading>
                    <Link href={`/`}><FooterLink>Women</FooterLink></Link>
                    <Link href={`/`}><FooterLink>Men</FooterLink></Link>
                    <Link href={`/`}><FooterLink>Kids & Babies</FooterLink></Link>
                    <Link href={`/`}><FooterLink>Accessories</FooterLink></Link>
                    <Link href={`/`}><FooterLink>Home</FooterLink></Link>
                    <SaleLink href='/'>sale</SaleLink>
                </LinksContainer>
                <LinksContainer>
                    <LinksHeading>information</LinksHeading>
                    <Link href={`/`}><FooterLink>about us</FooterLink></Link>
                    <Link href={`/`}><FooterLink>delivery information</FooterLink></Link>
                    <Link href={`/`}><FooterLink>returns</FooterLink></Link>
                    <Link href={`/`}><FooterLink>privacy & policy</FooterLink></Link>
                    <Link href={`/`}><FooterLink>terms & conditions</FooterLink></Link>
                    <Link href={`/`}><FooterLink>privacy & policy</FooterLink></Link>
                </LinksContainer>
            </Misc>


            <Misc>
                <LinksContainer>
                    <LinksHeading>customer service</LinksHeading>
                    <Link href={`/`}><FooterLink>customer service</FooterLink></Link>
                    <Link href={`/`}><FooterLink>email sign-up</FooterLink></Link>
                    <Link href={`/`}><FooterLink>size charts</FooterLink></Link>
                    <Link href={`/`}><FooterLink>cookie preference</FooterLink></Link>
                    <Link href={`/`}><FooterLink>site index</FooterLink></Link>
                </LinksContainer>
                <LinksContainer>
                    <LinksHeading>follow us</LinksHeading>
                    <SocialLinksWrapper>
                        <SocialLink href={`https://facebook.com`}><FeatherIcon icon="facebook"
                                                                               size={`18`}/></SocialLink>
                        <SocialLink href={`https://twitter.com`}><FeatherIcon icon="twitter" size={`18`}/></SocialLink>
                        <SocialLink href={`https://instagram.com`}><FeatherIcon icon="instagram"
                                                                                size={`18`}/></SocialLink>
                        <SocialLink href={`https://youtube.com`}><FeatherIcon icon="youtube" size={`18`}/></SocialLink>
                    </SocialLinksWrapper>
                    <br/>
                    <LinksHeading>payment methods</LinksHeading>
                    <PaymentMethodsWrapper>
                        <Visa/>
                        <MasterCard/>
                        <AMEX/>
                        <PayPal/>
                        <Discover/>
                    </PaymentMethodsWrapper>
                </LinksContainer>
            </Misc>

        </Container>
    )
};

export default FooterLinksSection

const Container = styled.section`
    padding: 30px 3%;
    display: flex;
    align-items: flex-start;
    justify-content: space-around;
    flex-wrap:wrap;
    
    @media (max-width: ${SECOND_BREAKPOINT}) {
        justify-content: center;
    };
    
    @media (max-width: ${THIRD_BREAKPOINT}) {
    justify-content: flex-start;
    flex-direction: column
    };
`;

const LinksContainer = styled.ul`
    display: flex;
    flex-direction: column;
    align-items: space-between;
    text-align: left;
    margin: 0;
    margin-bottom: 30px;
`;

const LinksHeading = styled.p`
    font-weight: bold;
    font-size: 15px;
    line-height: 19px;
    text-transform: uppercase;
    margin: 0 0 13px 0;
`;

const FooterLink = styled.a`
    font-weight: normal;
    font-size: 13px;
    line-height: 22px;
    color: black;
    text-decoration: none;
    text-transform: capitalize;
`;

const SocialLinksWrapper = styled.div`
    display: flex;
    align-items: center;
    justify-content: flex-start;
    width: 70%;
`;

const SocialLink = styled.a`
    color: black;
    width: 27px;
    height: 27px;
    border-radius: 50%;
    font-size: 1px;
    margin-right: 10px
`;

const PaymentMethodsWrapper = styled(SocialLinksWrapper)`
    justify-content: space-between;
    flex-wrap: wrap;
`;

const Logo = styled(FablystLogo)`
    display: hidden; 
    @media (max-width: ${THIRD_BREAKPOINT}) {
        display: none !important;
        width: 10px
    };
`;

//for responsiveness purposes
//holds two LinksContainers each
const Misc = styled.div`
    display: flex;
    width: 33%;
    justify-content: space-between;
    
    @media (max-width: ${SECOND_BREAKPOINT}) {
        flex-direction: column;
    };

    @media (max-width: ${THIRD_BREAKPOINT}) {
        width: 100%
    };
`;
