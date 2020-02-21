import styled from 'styled-components'
import {SECOND_BREAKPOINT, THIRD_BREAKPOINT} from "../../../constants";

export const Grid = styled.section`
    height: 600px;
    box-sizing: border-box;
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: space-between;
    margin: 20px 0;
    margin-bottom: 70px;
    
    @media (max-width: ${SECOND_BREAKPOINT}) {
        height: 500px
    };
    
    @media (max-width: ${THIRD_BREAKPOINT}) {
        flex-direction: column;
        height: auto;
    };
`;