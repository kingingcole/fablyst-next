import {Container, Heading, Input, PromoCodeForm, Button, Label, CartPriceSection, PriceInfo, PriceText, Price, TotalPriceText, TotalPrice} from './style'

import withData from '../../../lib/apollo'
import gql from "graphql-tag";
import { useQuery, useMutation } from "@apollo/react-hooks";


const CREATE_CHECKOUT = gql`
mutation checkoutCreate($input: CheckoutCreateInput!) {
  checkoutCreate(input: $input) {
    checkout {
      id
      webUrl
    }
    checkoutUserErrors {
      code
      field
      message
    }
  }
}
`;

const CartSummary = ({subTotal, products}) => {
    let shippingPrice = 0;
    let discount = 0;
    let total = (subTotal + shippingPrice) - discount;

    const [checkout, {data}] = useMutation(CREATE_CHECKOUT);
    let lineItems = [];
    products.map(p => {
        lineItems.push({
            variantId: p.variantId,
            quantity: p.quantity
        })
    });

    const createCheckout = () => {
        console.log(lineItems);
        let variables = {
            "input": {
                lineItems
            }
        }
        checkout({variables});
    };


    if (data) {
        console.log(data);
        window.location.href = data.checkoutCreate.checkout.webUrl
    };

    return (
        <Container>
            <Heading>summary</Heading>
            <Label htmlFor="promo-code">Do you have a promo code?</Label>
            <PromoCodeForm>
                <Input required type="text" id="promo-code"/>
                <Button width={`50%`} background="white" color="black" borderColor='black'>APPLY</Button>
            </PromoCodeForm>
            <CartPriceSection>
                <PriceInfo>
                    <PriceText>Cart Subtotal:</PriceText>
                    <Price>{subTotal}</Price>
                </PriceInfo>
                <PriceInfo>
                    <PriceText>Shipping and handling:</PriceText>
                    <Price>-</Price>
                </PriceInfo>
                <PriceInfo>
                    <PriceText>Discount:</PriceText>
                    <Price>-</Price>
                </PriceInfo>
                <PriceInfo>
                    <TotalPriceText>Cart Total:</TotalPriceText>
                    <TotalPrice>{total}</TotalPrice>
                </PriceInfo>
            </CartPriceSection>
            <Button onClick={() => createCheckout()} width='100%' background="#DF0052" color="white" borderColor='#DF0052' hoverBackground="#c11755" hoverBorderColor='#c11755'>CHECKOUT</Button>
        </Container>
    )
}

export default withData(CartSummary)