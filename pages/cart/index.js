import Layout from '../../components/Layout'
import {Dropdown, Container, CartDetails, Table, Thead, HeadTRow, ProductHeading, Td, TRow, ItemDetails, Image, ProductTitle, ProductCategory, RemoveButton} from './style'
import CartSummary from '../../components/organisms/CartSummaryColumn'
import React, {useState} from "react";
import RemoveIcon from '../../assets/icn_delete.svg'
import Link from '../../components/atoms/Link'

import withData from '../../lib/apollo'
import gql from "graphql-tag";
import { useQuery, useMutation } from "@apollo/react-hooks";


const FETCH_CART_ITEMS = gql`
  query fetchCartItems {
    cartItems @client {
        variantId
        quantity
        title
        category
        price
        image
        handle
    }
  }
`;

const REMOVE_ITEM_FROM_CART = gql`
    mutation removeItemFromCart($variantId: Str!) {
        removeCartItem(variantId: $variantId) @client 
    }
`;


const Cart = () => {

    const {data, error, loading} = useQuery(FETCH_CART_ITEMS);
    const [removeFromCart] = useMutation(REMOVE_ITEM_FROM_CART, {refetchQueries:[FETCH_CART_ITEMS]});
    const [cartItems, setCartItems] = useState()

    // data && console.log(data);
    // error && console.log(error);

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
                                        options.push(<option value={i} key={i}>{i}</option>)
                                    }
                                    const [quantity, setQuantity] = useState(d.quantity);
                                    return (
                                        <TRow key={Math.random()}>
                                            <ItemDetails>
                                                <RemoveButton onClick={() => removeFromCart({ variables: {variantId: d.variantId} })}><RemoveIcon/></RemoveButton>
                                                <Image src={d.image}/>
                                                <div>
                                                    <ProductCategory>{d.category}</ProductCategory>
                                                    <Link href={`/product/[pid]`} as={`/product/${d.handle}`}><ProductTitle>{d.title}</ProductTitle></Link>
                                                </div>
                                            </ItemDetails>
                                            <Td>{d.price}</Td>
                                            <Td>
                                                {d.quantity}
                                            </Td>
                                            <Td>{(d.price * quantity).toFixed(2)}</Td>
                                        </TRow>
                                    )
                                })}
                                </tbody>
                            </Table>
                        </CartDetails>
                        <CartSummary products={data.cartItems} subTotal={calculateSubTotal()}/>
                    </>
                }
            </Container>
        </Layout>
    )
};

export default withData(Cart)