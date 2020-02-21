import styled from 'styled-components'
import {THIRD_BREAKPOINT, FOURTH_BREAKPOINT} from "../../../constants";
import banner from '../../../assets/smiling-woman.jpg'

export const HeroSection = styled.section` 
    background: linear-gradient( rgba(0, 0, 0, 0), rgba(0, 0, 0, 0.2) ), url(${banner}) center no-repeat;
    background-size: cover;
    height: 500px;
    width: 100%;
    border-bottom-right-radius: 200px;
    margin: 0 0 20px 0;
    padding-right: 60px;
    box-sizing: border-box;

    @media (max-width: ${THIRD_BREAKPOINT}) {
        height: 400px;
        border-radius: 0;
        padding-right: 30px
    };

    @media (max-width: ${FOURTH_BREAKPOINT}) {
        padding-right: 20px
    };
`;