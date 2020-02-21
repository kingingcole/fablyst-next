import styled from 'styled-components'
import {FIRST_BREAKPOINT, SECOND_BREAKPOINT} from "../../../constants";


export const Container = styled.section`
    display: flex;
    box-sizing: border-box;
    height: auto;
    width: 100%;
    height: auto;
    margin: 0;
    margin-bottom: 70px;
    
    @media (max-width: ${SECOND_BREAKPOINT}) {
        flex-direction: column;
        align-items: center
    };

`;