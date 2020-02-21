import styled from 'styled-components'
import {THIRD_BREAKPOINT} from "../../../constants";

export const Container = styled.section` 
    margin: 0;
    display: flex;
    align-items: center;
    justify-content: space-between;
    margin-bottom: 70px;
    flex-wrap: wrap;
    
    @media (max-width: ${THIRD_BREAKPOINT}) {
        flex-direction: column
    };
`;