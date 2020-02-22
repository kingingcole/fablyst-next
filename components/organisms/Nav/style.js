import styled from 'styled-components'
import Link from "../../atoms/Link";
import Logo from '../../../assets/basket.svg';
import {SECOND_BREAKPOINT, THIRD_BREAKPOINT} from "../../../constants";
import bagLogo from '../../../assets/basket.svg';

export const NavBar = styled.nav`
    margin: 0;
    padding: 10px 6%;
    background: white;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-between;
    border-bottom: 1px solid #fbf3f317;
    position: fixed;
    background: white;
    width: 100%;
    box-sizing: border-box;
    z-index: 100;
    top: 0;
    left: 0;
    
    @media (max-width: ${SECOND_BREAKPOINT}) {
        padding: 10px 20px
    };
`;

export const TopNav = styled.div`
    display: flex;
    align-items: center;
    width: 100%;
    justify-content: space-between;
    padding: 10px 0;
`;

export const BottomNav = styled.ul`
    list-style-type: none;
    display: flex;
    align-items: center;
    justify-content: space-between;
    width: 100%;
    padding: 0;
    transition: display 1s;
    
    @media (max-width: ${THIRD_BREAKPOINT}) {
        flex-direction: column;
        position: fixed;
        width: 100%;
        transition: all 0.2s;
        left: ${props => props.isOpen ? '0' : '-1000px'};
        padding-left: 20px;
        margin-left: 0;
        z-index: 100;
        top: 60px;
        background: white;
        align-items: flex-start;
        height: 230px;
        justify-content: space-around;
        display: flex;
        margin: 0;
        border-radius: 4px
        
    };
`;


export const NavLink = styled(Link)`
    text-transform: uppercase;
    text-decoration: none;
    font-size: 15px;
    font-weight: 500;
    cursor: pointer;
    font-weight: 600;
`;

export const SaleLink = styled(NavLink)`
    color: #DF0052;
`;

export const BagLogo = styled(bagLogo)`
    height: auto;
    width: 19px;
`;

export const CartIconWrapper = styled.div`
    display: flex;
    margin: 0;
`;

export const CartBadge = styled.div`
    width: 15px;
    height: 15px;
    margin: 0;
    font-size: 9px;
    box-sizing: border-box;
    background: #DF0052;
    color: white;
    display: flex;
    justify-content: center;
    align-items: center;
    border-radius: 50%;
    position: relative;
    left: -10px
`;

