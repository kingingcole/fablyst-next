import styled from 'styled-components'
import ErrorImg from '../assets/error.svg';
import FablystLogo from '../components/atoms/FablystLogo'
import Layout from '../components/Layout'
import Button from '../components/atoms/Button'
import {FOURTH_BREAKPOINT} from '../constants'

function Error({ statusCode }) {
    return (
        <Layout>
            {statusCode === 404 ? (

                <Container>
                    <ErrorImage/>
                    <ErrorInfo>
                        <FablystLogo/>
                        <Heading>404 page not found</Heading>
                        <Desc>The page you are looking for might have been removed
                            had its name changed or is temporarily unavailable.</Desc>
                        <Button href="/" background="#DF0052" color="white">GO TO HOMEPAGE</Button>
                    </ErrorInfo>
                </Container>
            ) : (
                <p>An error occured</p>
            )}
        </Layout>
    )
}

Error.getInitialProps = ({ res, err }) => {
    const statusCode = res ? res.statusCode : err ? err.statusCode : 404;
    return { statusCode }
};

export default Error

const Container = styled.div`
    height: 100%;
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    padding-bottom: 20px;

    @media (max-width: ${FOURTH_BREAKPOINT}) {
        flex-direction: column;
    };
`;

const ErrorImage = styled(ErrorImg)`
    height: 400px;
    width: 200px;

    @media (max-width: ${FOURTH_BREAKPOINT}) {
        display: none;
    };
`;

const ErrorInfo = styled.div`
    text-align: left;
    max-width: 300px;
    height: auto
`;

const Heading = styled.h3`
    font-weight: 500;
    font-size: 29px;
    text-transform: uppercase;
    margin: 0;
    margin-top: 20px;
    line-height: 1.3em
`;

const Desc = styled.p`
    font-size: 13px;
    margin-bottom: 26px
`;