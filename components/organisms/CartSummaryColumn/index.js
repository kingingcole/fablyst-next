import {Container, Heading, Input, PromoCodeForm, Button, Label, CartPriceSection, PriceInfo, PriceText, Price, TotalPriceText, TotalPrice} from './style'

const CartSummary = () => {
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
                    <Price>$30.88</Price>
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
                    <TotalPrice>$30.88</TotalPrice>
                </PriceInfo>
            </CartPriceSection>
            <Button width='100%' background="#DF0052" color="white" borderColor='#DF0052' hoverBackground="#c11755" hoverBorderColor='#c11755'>CHECKOUT</Button>
        </Container>
    )
}

export default CartSummary