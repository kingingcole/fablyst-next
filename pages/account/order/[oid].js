import {useRouter} from 'next/router'
import Layout from '../../../components/Layout'
import {Wrapper, LeftCol, MainColumn, Input, Label, FormGroup, HR, RightColHeading, FormRow, Button} from "../style";
import OrdersColumn from '../../../components/organisms/OrdersColumn'
import styled from 'styled-components'
import {SECOND_BREAKPOINT, FOURTH_BREAKPOINT} from "../../../constants";


export default () => {
    const router = useRouter();
    const orderId = router.query.oid;
    const getShopifyOrderID = () => `gid://shopify/Order/${orderId}`;

    const sampleData = {
        image: 'https://via.placeholder.com/40',
        title: 'Lorem Ipsum Doler Amet',
        color: 'Navy',
        size: 42,
        price: 43.67,
        quantity: 1
    }

    const data = new Array(4).fill(sampleData);

    return (
        <Layout>
            <Wrapper>
                <OrdersColumn/>
                <MainColumn>
                   <Table>
                       <Thead>
                            <HeadTRow>
                                <OrderNumber>Order No: {orderId}</OrderNumber>
                                <Td>Price</Td>
                                <Td>Quantity</Td>
                                <Td>Total Price</Td>
                            </HeadTRow>
                       </Thead>
                       <tbody>
                       {
                           data.map(d => {
                               return(
                                   <TRow key={d.title}>
                                       <OrderDetails>
                                           <Image src={d.image}/>
                                           <ProductTitle>{d.title}</ProductTitle>
                                       </OrderDetails>
                                       <Td>{d.price}</Td>
                                       <Td>{d.quantity}</Td>
                                       <Td>{d.price * d.quantity}</Td>
                                   </TRow>
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

const Table = styled.table`
    width: 100%;
    border-spacing: 0;
    border-collapse: collapse;

`;

const Thead = styled.thead`
    font-size: 14.11px; 
    height: 200px
`;

const HeadTRow = styled.tr`
    height: 30px
`;

const OrderNumber = styled.td`
    font-weight: 500;
    width: 50%;
`;

const Td = styled.td`text-align: center; font-weight: 500; font-size: 14.11px`;

const TRow = styled.tr`
    height: 80px;
`;

const OrderDetails = styled.td`
    display: flex;
    align-items: center;
    
    @media (max-width: ${FOURTH_BREAKPOINT}){
        display: table-cell
    };
`;

const Image = styled.img`
    height: 70px;
    width: 50px;
    background: #f5f5f5;
    
    @media (max-width: ${FOURTH_BREAKPOINT}){
        display: none
    };

`;

const ProductTitle = styled.p`
    margin: 0;
    margin-left: 10px;
    width: 100%;
    font-size: 15px;
    
    @media (max-width: ${FOURTH_BREAKPOINT}){
        margin: 0;
        margin-right: 10px
    };
`;


