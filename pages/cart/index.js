import Layout from '../../components/Layout'
import {Dropdown, Container, CartDetails, Table, Thead, HeadTRow, ProductHeading, Td, TRow, ItemDetails, Image, ProductTitle, ProductCategory, RemoveButton} from './style'
import CartSummary from '../../components/organisms/CartSummaryColumn'
import React from "react";

export default () => {

    const sampleData = {
        image: 'https://via.placeholder.com/40',
        title: 'Lorem Ipsum Doler Amet',
        color: 'Navy',
        size: 42,
        price: 43.67,
        quantityAvailable: 4,
        category: 'women'
    };

    const data = new Array(4).fill(sampleData);
    return (
        <Layout>
            <Container>
                <CartDetails>
                    <Table>
                        <Thead>
                        <HeadTRow>
                            <ProductHeading>PRODUCT</ProductHeading>
                                <Td>PRICE</Td>
                                <Td>QUANTITY</Td>
                                <Td>TOTAL</Td>
                        </HeadTRow>
                        </Thead>
                        <tbody>
                        {data && data.map(d => {

                            const options = [];
                            for (let i = 1; i <= d.quantityAvailable; i++){
                                options.push(<option value={i}>{i}</option>)
                            }
                           return (
                               <TRow key={Math.random()}>
                                   <ItemDetails>
                                       <RemoveButton>X</RemoveButton>
                                       <Image src={d.image}/>
                                       <div>
                                           <ProductCategory>{d.category}</ProductCategory>
                                           <ProductTitle>{d.title}</ProductTitle>
                                       </div>
                                   </ItemDetails>
                                   <Td>{d.price}</Td>
                                   <Td>
                                       <Dropdown>
                                           {options}
                                       </Dropdown>
                                   </Td>
                                   <Td>{d.price}</Td>
                               </TRow>
                           )
                        })}
                        </tbody>
                    </Table>
                </CartDetails>
                <CartSummary/>
            </Container>
        </Layout>
    )
}