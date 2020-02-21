import React from 'react'
import styled from 'styled-components'
import FeatherIcon from 'feather-icons-react';

//responsiveness
import {FIRST_BREAKPOINT, SECOND_BREAKPOINT, THIRD_BREAKPOINT} from '../../../constants'

const Search = () => {
    return (
        <SearchInputContainer>
            <Input type={`text`} placeholder={`search...`}/>
            <SearchBtn>
                <SearchIcon icon={`search`} />
            </SearchBtn>
        </SearchInputContainer>
    )
};

export default Search

const SearchInputContainer = styled.div`
    width: 60%;
    display: flex;
    background: red;
    
    @media (max-width: ${FIRST_BREAKPOINT}) {
        width: 50%;
    };
    
    @media (max-width: ${SECOND_BREAKPOINT}) {
        width: 40%;
    };
    
    @media (max-width: ${THIRD_BREAKPOINT}) {
        display: none
    };
`;

const Input = styled.input`
    padding: 0 7px;
    height: 40px;
    border: 1px solid #D8D8D8;
    width: 90%;
    box-shadow: -1px 2px 8px rgba(0, 0, 0, 0.0803612);
    border-radius: 2px;
    margin-left: 0;
    
    @media (max-width: ${SECOND_BREAKPOINT}) {
        height: 36px;
        width: 80%
    };
`;

const SearchBtn = styled.div`
  background: black;
  height: 42px;
  width: 10%;
  display: flex;
  align-items: center;
  justify-content: center;
  box-shadow: -1px 2px 8px rgba(0, 0, 0, 0.0803612);
    
    @media (max-width: ${SECOND_BREAKPOINT}) {
        height: 38px;
        width: 20%
    };
`;

const SearchIcon = styled(FeatherIcon)`
    color: white;
    height: auto;
    width: 22px
`
