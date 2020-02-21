import styled from 'styled-components'
import {SECOND_BREAKPOINT} from "../../../constants";

export const Container = styled.section`
    display: flex;
    margin: 20px 0;
    height: auto;
    width: 100%;
    
    @media (max-width: ${SECOND_BREAKPOINT}) {
        display: none
    }
`;