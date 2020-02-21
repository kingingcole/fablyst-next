import Layout from '../../components/Layout'
import {Wrapper, LeftCol, MainColumn, Input, Label, FormGroup, HR, RightColHeading, FormRow} from "./style";
import OrdersColumn from '../../components/organisms/OrdersColumn'
import styled from 'styled-components'
import Button from '../../components/atoms/Button'
import ArrowRight from '../../assets/arrow-right.svg'
import Link from 'next/link'

import {SECOND_BREAKPOINT, FOURTH_BREAKPOINT} from "../../constants";

export default () => {

    const d = {
        id: '04944737721',
        image: "https://via.placeholder.com/40",
        orderCount: 3,
        description: function () {
            return `${this.orderCount} ${this.orderCount > 1 ? 'products' : 'product'} in your order`
        },
        orderNumber: '000546456',
        status: 'completed',
        price: 34.44,
        url: '/',
    };

    const data = new Array(4).fill(d);

    return (
        <Layout>
            <Wrapper>
                <OrdersColumn/>
                <MainColumn>
                    <div style={{display: 'flex', justifyContent: 'space-between', alignItems: 'center'}}>
                        <RightColHeading style={{width: '50%'}}>total orders: {data.length}</RightColHeading>
                        <div style={{textAlign: 'right'}}>
                            <span style={{fontSize: '14.11px'}}>Sort by date: </span>
                            <Dropdown>
                                <option value="30">Last 30 Days</option>
                                <option value="60">Last 60 Days</option>
                                <option value="90">Last 90 Days</option>
                            </Dropdown>
                        </div>
                    </div>
                    <HR/>
                    <Table>
                        <tbody>
                        {
                            data && data.map(d => {
                                return (
                                    <Link href="/account/order/[oid]" as={`order/${d.id}`} key={Math.random()} passHref>
                                        <TRow>
                                            <ImagePreview><img style={{height: '100%', width: '100%'}} src={d.image}
                                                               alt=""/></ImagePreview>
                                            <Description>
                                                <DescriptionText style={{
                                                    fontWeight: '500',
                                                    marginBottom: '5px'
                                                }}>{d.description()}</DescriptionText>
                                                <small>Order No: {d.orderNumber}</small>
                                            </Description>
                                            <Completed status={d.status}>{d.status}</Completed>
                                            <Price>${d.price}</Price>
                                            <DetailButton><Button color='black' padding="5px" fontSize="14px" href='/order/[oid]'
                                                                  borderColor='black'>Detail <ArrowRight/></Button></DetailButton>
                                        </TRow>
                                    </Link>
                                )
                            })
                        }
                        </tbody>
                    </Table>
                </MainColumn>
            </Wrapper>
        </Layout>
    )
}

const Dropdown = styled.select`
    display: inline;
    background: #F5F5F5;
    padding: 5px;
    border: 0;
    outline: 0;
`;

const Table = styled.table`
    width: 100%;
    border-spacing: 0;
    border-collapse: collapse;

`;

const TRow = styled.tr`
    height: 100px;
    cursor: pointer;
    
    &:hover{background: #f3f3f3}
`;

const ImagePreview = styled.td`
    width: 7%;
    height: 70px;
    
    @media (max-width: ${SECOND_BREAKPOINT}){
        display: none
    };
`;

const Description = styled.td`
    padding: 0px 10px;
    margin: 0
`;

const DescriptionText = styled.p`
    font-size: 16px;
    
    @media (max-width: ${FOURTH_BREAKPOINT}){
        display: none
    };

`;

const Completed = styled.td`
    text-align: center;
    width: 15%;
    color: ${({status}) => status === 'completed' ? '#5ABA31' : '#4A90E2'};
    font-size: 15px;
    
    @media (max-width: ${SECOND_BREAKPOINT}){
    width: 20%;
    };
    
    @media (max-width: ${FOURTH_BREAKPOINT}){
    width: 25%;
    };
`;

const Price = styled.td`
    text-align: center;
    width: 15%;
    font-size: 15px;
    
    @media (max-width: ${SECOND_BREAKPOINT}){
    width: 20%;
    };
    
    @media (max-width: ${FOURTH_BREAKPOINT}){
    width: 25%;
    };
`;

const DetailButton = styled.td`
    text-align: center;
    width: 15%;
    font-size: 1em;
    
    @media (max-width: ${SECOND_BREAKPOINT}){
        display: none
    };
`;