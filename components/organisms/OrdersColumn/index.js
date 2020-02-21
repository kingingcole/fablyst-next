import styled from 'styled-components'
import {LeftColHeading, HR} from '../../../pages/account/style'
import Link from '../../atoms/Link'
import {useState} from 'react';
import {Container, SettingsMenuContainer, InnerWrapper, List, MenuHeading, MenuWrapper, PersonalInfoMenuContainer} from './style'

import ArrowUp from '../../../assets/arrow-up.svg'
import ArrowDown from '../../../assets/arrow-down.svg'


const OrdersColumn = () => {

    const [showPersonalInfoMenu, setShowPersonalInfoMenu] = useState(false);
    const [showSettingsMenu, setShowSettingsMenu] = useState(false);

    const handleShowPersonalInfoMenu = () => setShowPersonalInfoMenu(!showPersonalInfoMenu); //toggle showPersonalInfoMenu current value
    const handleshowSettingsMenu = () => setShowSettingsMenu(!showSettingsMenu); //toggle showSettingsMenu current value

    return (
        <Container>
            <LeftColHeading>ORDERS</LeftColHeading>
            <HR/>
            <InnerWrapper>
                <MenuWrapper>
                    <MenuHeading onClick={handleShowPersonalInfoMenu}>
                        <p style={{margin: '0px', padding: '0px'}}>Personal Info</p>
                        {showPersonalInfoMenu === true ? <ArrowUp /> : <ArrowDown />}
                    </MenuHeading>
                    <PersonalInfoMenuContainer showPersonalInfoMenu={showPersonalInfoMenu}>
                        <List>
                            <Link href={'/account/orders'}>Orders</Link>
                        </List>
                        <List>
                            <Link href={'/account/pending'}>Pending</Link>
                        </List>
                        <List>
                            <Link href={'/account/tracking'}>Tracking</Link>
                        </List>
                    </PersonalInfoMenuContainer>
                </MenuWrapper>

                <MenuWrapper>
                    <MenuHeading onClick={handleshowSettingsMenu}>
                        <p style={{margin: '0px', padding: '0px'}}>Settings</p>
                        {showSettingsMenu === true ? <ArrowUp /> : <ArrowDown />}
                    </MenuHeading>
                    <SettingsMenuContainer showSettingsMenu={showSettingsMenu}>
                        <List>
                            <Link href={'/account/profile'}>Profile</Link>
                        </List>
                        <List>
                            <Link href={'/account/payment'}>Payment</Link>
                        </List>
                        <br/>
                        <List>
                            <Link href={'logout'}>Logout</Link>
                        </List>
                    </SettingsMenuContainer>
                </MenuWrapper>
            </InnerWrapper>
        </Container>
    )
};

export default OrdersColumn
