import styled from 'styled-components'
import {THIRD_BREAKPOINT} from "../../../constants";

export const Container = styled.div`
    box-sizing: border-box;
    margin: 0;
    box-shadow: 0px 2px 23px rgba(0, 0, 0, 0.065925);
    border-radius: 2px;
    height: 100%;
    padding: 10px;
    height: 100%;
    width: 30%;
    margin-right: 10px;
    
    @media (max-width: ${THIRD_BREAKPOINT}){
        width: 100%;
        margin: 0
    };
`;

export const InnerWrapper = styled.div`
    display: flex;
    align-items: flex-start;
    flex-direction: column;
`;

export const MenuWrapper = styled.div`
    width: 100%;
    margin-bottom: 15px;
`;

export const MenuContainer = styled.ul`
    margin-left: 20px;
    margin-bottom: 20px;
    padding: 0;
    list-style-type: none;
    transition: height 4s;
    overflow: hidden;
`;

export const PersonalInfoMenuContainer = styled(MenuContainer)`
    height: ${({showPersonalInfoMenu}) => showPersonalInfoMenu === true ? 'auto' : '0px'};
    display: ${({showPersonalInfoMenu}) => showPersonalInfoMenu === true ? '' : 'none'}; 
`;

export const SettingsMenuContainer = styled(MenuContainer)`
    height: ${({showSettingsMenu}) => showSettingsMenu === true ? 'auto' : '0px'};
    display: ${({showSettingsMenu}) => showSettingsMenu === true ? '' : 'none'}; 
`;

export const List = styled.li`
    link-style-type: none;
    margin: 0px 0px 7px 0;
    font-size: 16px
`;

export const MenuHeading = styled.div`
    margin: 0;
    padding: 0;
    display: flex;
    justify-content: space-between;
    align-items: center;
    width: 100%;
    cursor: pointer;
`;