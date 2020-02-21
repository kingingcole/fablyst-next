import Layout from '../../components/Layout'
import {Wrapper, LeftCol, MainColumn, Input, Label, FormGroup, HR, RightColHeading, FormRow, Button} from "./style";
import OrdersColumn from '../../components/organisms/OrdersColumn'

const Profile = () => {
    return (
        <Layout>
            <Wrapper>
                <OrdersColumn />
                <MainColumn>
                    <RightColHeading>edit your profile</RightColHeading>
                    <HR/>
                    <FormGroup>
                        <FormRow>
                            <Label htmlFor="first_name">First Name</Label>
                            <Input type="text" id="first_name"/>
                        </FormRow>
                        <FormRow>
                            <Label htmlFor="last_name">Last Name</Label>
                            <Input type="text" id="last_name"/>
                        </FormRow>
                    </FormGroup>

                    <FormGroup>
                        <FormRow>
                            <Label htmlFor="email">email address</Label>
                            <Input type="email" id="email"/>
                        </FormRow>
                        <FormRow>
                            <Label htmlFor="password">password</Label>
                            <Input type="password" id="password"/>
                        </FormRow>
                    </FormGroup>

                    <FormGroup>
                        <FormRow>
                            <Label htmlFor="address">address</Label>
                            <Input type="text" id="address"/>
                        </FormRow>
                        <FormRow>
                            <Label htmlFor="city">city</Label>
                            <Input type="text" id="city"/>
                        </FormRow>
                    </FormGroup>

                    <FormGroup>
                        <FormRow>
                            <Label htmlFor="zip">zip</Label>
                            <Input type="text" id="zip"/>
                        </FormRow>
                        <FormRow>
                            <Label htmlFor="country">country</Label>
                            <Input type="text" id="country"/>
                        </FormRow>
                    </FormGroup>

                    <div style={{marginTop: '30px', display: 'flex', padding: '0px 20px', justifyContent: 'space-between', alignItems: 'center'}}>
                        <div style={{width: '50%'}}>
                            <input type="checkbox" id="checkbox"/> <label style={{fontSize: '14px'}} htmlFor="checkbox">Receive promotional emails from egeo</label>
                        </div>
                        <div style={{width: '50%', textAlign: 'right'}}>
                            <Button background='transparent' color='black'>Cancel</Button>
                            <Button background='#DF0052' color="white">SAVE</Button>
                        </div>
                    </div>
                </MainColumn>
            </Wrapper>
        </Layout>
    )
};

export default Profile