import NextLink from 'next/link'
import styled from 'styled-components'
import { useRouter } from 'next/router'


const Link = ({href, as, children}) => {

    const router = useRouter();
    const color = router.pathname === href ? '#DF0052' : 'black';

    return (
        <NextLink href={href} as={as} passHref>
            <A color={color}>{children}</A>
        </NextLink>
    )
};

const A = styled.a`
    color: ${({color}) => color};
    text-decoration: none;
    font-weight: 500;
    text-transform: uppercase;
    &:hover{color: #DF0052};
`;

export default Link