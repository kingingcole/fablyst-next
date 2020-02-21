import React from 'react'
import styled from 'styled-components'
import Link from "next/link";
import {SECOND_BREAKPOINT} from "../../constants";


const Button = ({color, borderColor, background, children, hidePadding, fontSize, href, padding, as}) => {
    return (
        <Link href={href} as={as} passHref>
            <Btn color={color} borderColor={borderColor} background={background} hidePadding={hidePadding}
                 fontSize={fontSize} padding={padding}>{children}</Btn>
        </Link>
    )
};

export default Button

const Btn = styled.a`
    text-transform: uppercase;
    border-radius: 2px;
    color: ${props => props.color};
    background: ${props => props.background};
    border: ${props => props.borderColor ? `1px solid ${props.borderColor}` : ''};
    padding: ${props => props.hidePadding ? '' : props.padding ? props.padding : '10px 20px'};
    cursor: pointer;
    text-decoration: none;
    font-weight: 500;
    font-size: ${props => props.fontSize ? props.fontSize : '16px'};
    box-sizing: border-box;
    margin: 0;
    
    @media (max-width: ${SECOND_BREAKPOINT}) {
    font-size: 12px;
    }
`;