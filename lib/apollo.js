import { withData } from 'next-apollo'
import { HttpLink } from 'apollo-link-http'
import { InMemoryCache } from 'apollo-cache-inmemory';
import gql from 'graphql-tag';


// can also be a function that accepts a `context` object (SSR only) and returns a config

const cache = new InMemoryCache();

const isLoggedIn = typeof localStorage === 'undefined' ? '' : !!localStorage.getItem("token");
const cartItems = typeof localStorage === 'undefined' ? [] : JSON.parse(localStorage.getItem('cartItems'));

cache.writeData({
    data: {
        isLoggedIn,
        cartItems: cartItems === null ? [] : cartItems //set items to null if no cart item is found in localStorage
    }
});

const config = {
    link: new HttpLink({ // Additional fetch() options like `credentials` or `headers`
        uri: `https://nygal.myshopify.com/api/graphql`, // Server URL
        headers: {
            'X-Shopify-Storefront-Access-Token': 'ccf2960a2fbac289a0647e349bd0df38',
            'Accept': 'application/json',
            'Content-Type': 'application/graphql'
        },
    }),
    cache,
    resolvers: {
        Mutation: {
            addToCart: ( obj, args, context ) => {
                const query = gql`
                 query GET_PREVIOUS_ITEMS{
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
                const { cache } = context;
                const previousItems = cache.readQuery({ query });
                const { variantId, quantity, title, category, price, image, handle } = args;
                const newItem = {
                    variantId,
                    quantity,
                    title,
                    category,
                    price,
                    image,
                    handle,
                    __typename: 'CartItem'
                };
                const data = {cartItems: [...previousItems.cartItems, newItem]};
                console.log(data)
                cache.writeQuery({query, data});
                localStorage.setItem('cartItems', JSON.stringify([...previousItems.cartItems, newItem]));
                return newItem
            },
            removeCartItem: (obj, {variantId}, { cache }) => {
                const query = gql`
                 query GET_PREVIOUS_ITEMS{
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
                console.log(variantId)
                const previousItems = cache.readQuery({ query });
                console.log('previous cart items', previousItems.cartItems)
                const newItems = previousItems.cartItems.filter(item => item.variantId !== variantId);
                console.log('new cart itms', newItems)
                localStorage.setItem('cartItems', JSON.stringify(newItems))
                const data = {cartItems: []};
                console.log('data', data)
                cache.writeData({data});
            },
        }
    }
};



export default withData(config)


//[
//             {
//                 variantId: 'gghfs22rwr52',
//                 quantity: 3,
//                 title: 'Lorem ipsum',
//                 category: 'Women wear',
//                 price: 23.55,
//                 image: 'https://cdn.shopify.com/s/files/1/2683/0628/products/Sky_Blue_Cable_Knit_Chunky_Oversized_Pullover_Sweater_4_100x100.jpg?v=1574134342',
//                 __typename: 'CartItem'
//             },
//             {
//                 variantId: 'gghfs22rwr52',
//                 quantity: 6,
//                 title: 'Plaid skirts',
//                 category: 'Women wear',
//                 price: 55.85,
//                 image: 'https://cdn.shopify.com/s/files/1/2683/0628/products/Sky_Blue_Cable_Knit_Chunky_Oversized_Pullover_Sweater_4_100x100.jpg?v=1574134342',
//                 __typename: 'CartItem'
//             },
//             {
//                 variantId: 'gghfs22rwr52',
//                 quantity: 6,
//                 title: 'Plaid skirts',
//                 category: 'Women wear',
//                 price: 55.85,
//                 image: 'https://cdn.shopify.com/s/files/1/2683/0628/products/Sky_Blue_Cable_Knit_Chunky_Oversized_Pullover_Sweater_4_100x100.jpg?v=1574134342',
//                 __typename: 'CartItem'
//             }]