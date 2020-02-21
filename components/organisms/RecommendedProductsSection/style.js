import styled from 'styled-components'
import {FIRST_BREAKPOINT, FOURTH_BREAKPOINT} from "../../../constants";

export const Container = styled.section`
    display: flex;
    width: 100%;
    box-sizing: border-box;
    justify-content: space-between;
    
    @media (max-width: ${FIRST_BREAKPOINT}){
        flex-direction: column;
    };
`;

export const Row = styled.div`
    display: flex;
    width: 50%;
    margin: 0;
    box-sizing: border-box; 
    justify-content: space-between;
    
    @media (max-width: ${FIRST_BREAKPOINT}){
        width: 100%;
        margin-bottom: 20px
    }; 
    
    @media (max-width: ${FOURTH_BREAKPOINT}) {
        flex-direction: column;
        width: 100%
    };
`;