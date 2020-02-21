import logo from '../../assets/logo.png'
import React from 'react';
import styled from 'styled-components'

const FablystLogo = ({width}) => {
    return <LogoWrapper src={logo} width={width}/>
};

export default FablystLogo

const LogoWrapper = styled.img`
    height: 100%;
    width: ${props => props.width ? props.width : '120px'};
    display: block;
`;
