import React, {useState} from 'react'
import {NavBar, TopNav, BottomNav, NavLink, SaleLink, BagLogo, CartBadge, CartIconWrapper} from './style'
import Search from './search'
import styled from 'styled-components'
import {THIRD_BREAKPOINT} from "../../../constants";
import FeatherIcon from "feather-icons-react";
import Link from "../../atoms/Link";
import FablystLogo from '../../atoms/FablystLogo'
import gql from "graphql-tag";
import { useQuery } from "@apollo/react-hooks";
import withData from '../../../lib/apollo'

const IS_LOGGED_IN = gql`
  query IsUserLoggedIn {
    isLoggedIn @client
  }
`;

const FETCH_CART_ITEMS = gql`
  query fetchCartItems {
    cartItems @client {
        variantId
        quantity
        title
        category
        price
        image
        handle
    }
  }
`;

const AuthLink = () => {
    const { data } = useQuery(IS_LOGGED_IN);
    return data.isLoggedIn ? (
        <NavLink href={'/account/profile'}>My account</NavLink>
    ) : (
        <NavLink href={'/auth'}>Sign in/Sign up</NavLink>
    );
};


const CartIcon = () => {
    const { data } = useQuery(FETCH_CART_ITEMS);
    const l = data.cartItems.length

    return (
        <CartIconWrapper>
            <BagLogo style={{marginLeft: '10px'}}/>
            <CartBadge>{l}</CartBadge>
        </CartIconWrapper>
    )
}


const Navbar = () => {

    const [isOpen, setIsOpen] = useState(false);

    const handleMenuOpen = () => {
        if (isOpen) {
            setIsOpen(false);
        }else{
            setIsOpen(true)
        }
    };

    const icon = isOpen ? 'x' : 'menu';
    const menuText = isOpen ? 'CLOSE' : 'MENU';

    return (
        <NavBar>
            <TopNav>
                <Link href="/"><FablystLogo/></Link>
                <Search/>
                <Misc>
                    <AuthLink/>
                    <Link href="/cart"><CartIcon /></Link>
                </Misc>
                <MenuButton onClick={handleMenuOpen}>
                    <FeatherIcon icon={icon}
                                 size={`20`}
                    /> <MenuText>{menuText}</MenuText>
                </MenuButton>
            </TopNav>
            <BottomNav isOpen={isOpen}>
                    <NavLink href={`/new`}>New</NavLink>
                    <NavLink href={`/women`}>Women</NavLink>
                    <NavLink href={`/men`}>Men</NavLink>
                    <NavLink href={`/kids`}>Kids</NavLink>
                    <NavLink href={`/accessories`}>Accessories</NavLink>
                    <NavLink href={`/sale`}>Sale</NavLink>
            </BottomNav>
        </NavBar>
    )
};


const MenuButton = styled.div`
    display: none;
    cursor: pointer;
    
    @media (max-width: ${THIRD_BREAKPOINT}) {
        display: flex;
        align-items: center
    };
`;

const MenuText = styled.span`
    font-size: 10px;
    margin-left: 5px
`;

const Misc = styled.div`
    display: flex; 
    align-items: center;
    @media (max-width: ${THIRD_BREAKPOINT}) {
        display: none
    };
`;


export default withData(Navbar)