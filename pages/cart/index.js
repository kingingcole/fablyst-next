import Layout from '../../components/Layout'
import {Dropdown, Container, CartDetails, Table, Thead, HeadTRow, ProductHeading, Td, TRow, ItemDetails, Image, ProductTitle, ProductCategory, RemoveButton} from './style'
import CartSummary from '../../components/organisms/CartSummaryColumn'
import React from "react";

import withData from '../../lib/apollo'
import gql from "graphql-tag";
import { useQuery } from "@apollo/react-hooks";


const FETCH_CART_ITEMS = gql`
  query fetchCartItems {
    cartItems @client {
        variantId
        quantity
        title
        category
        price
        image
    }
  }
`;

const Cart = () => {

    const {data, error, loading} = useQuery(FETCH_CART_ITEMS);

    data && console.log(data);
    error && console.log(error);

    const calculateSubTotal = () => {
      let subTotal = 0;
      if (data.cartItems.length >= 1){
          let {cartItems} = data;
          cartItems.map(item => subTotal = subTotal + (item.price * item.quantity))
          return subTotal
      }
      return subTotal
    };


    return (
        <Layout>
            <Container>
                {loading && <p style={{textAlign: 'center', width:'100%'}}>Loading cart...</p>}
                {error && <p style={{textAlign: 'center', width:'100%'}}>An error occured. Please try again</p>}
                {data.cartItems.length < 1 && <p style={{textAlign: 'center', width:'100%', margin: '10px 0'}}>You have no item in cart</p>}
                {
                    data && data.cartItems.length >= 1 &&
                    <>
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
                                {data.cartItems.map(d => {

                                    const options = [];
                                    for (let i = 1; i <= 10 ; i++){
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
                                                <Dropdown defaultValue={d.quantity}>
                                                    {options}
                                                </Dropdown>
                                            </Td>
                                            <Td>{ d.price * d.quantity}</Td>
                                        </TRow>
                                    )
                                })}
                                </tbody>
                            </Table>
                        </CartDetails>
                        <CartSummary subTotal={calculateSubTotal()}/>
                    </>
                }
            </Container>
        </Layout>
    )
};

export default withData(Cart)