import Layout from '../../components/Layout'
import styled from 'styled-components'
import { useRouter } from 'next/router'
import { useApolloClient } from "@apollo/react-hooks";
import withData from '../../lib/apollo'

const LogOut = () => {
    const router = useRouter();
    const client = useApolloClient();

    const handleLogout = (e) => {
        client.writeData({ data: { isLoggedIn: false } });
        localStorage.clear();
        router.push('/');
    };

    const handleCancleLogout = () => {
        router.push('/');
        console.log(window.history)
    };

    return (
        <Layout>
            <Container>
                <p>Are you sure yo want to log out?</p>
                <ButtonsContainer>
                    <Button onClick={handleCancleLogout} background='#f4f4f4' color="black" href='/account/profile'>Cancel</Button>
                    <Button onClick={handleLogout} background="#DF0052" color="white" href='/'>Yes</Button>
                </ButtonsContainer>
            </Container>
        </Layout>
    )
};

const Container = styled.div`
    text-align: center;
    max-width: 300px;
    margin: auto;
    padding: 40px 0
`;

const ButtonsContainer = styled.div`
    display: flex;
    justify-content: space-around;
    width: 100%;
    margin: auto;
    margin-top: 20px;
`;

const Button = styled.button`
    border: 0px;
    padding: 10px 30px;
    font-size: 1em;
    font-weight: 500;
    cursor: pointer;
    background: ${({background}) => background};
    color: ${({color}) => color};
`;

export default withData(LogOut)