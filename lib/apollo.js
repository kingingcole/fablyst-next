import { withData } from 'next-apollo'
import { HttpLink } from 'apollo-link-http'
import { InMemoryCache } from 'apollo-cache-inmemory';

// can also be a function that accepts a `context` object (SSR only) and returns a config

const cache = new InMemoryCache();

const config = {
    link: new HttpLink({ // Additional fetch() options like `credentials` or `headers`
        uri: `https://nygal.myshopify.com/api/graphql`, // Server URL
        headers: {
            'X-Shopify-Storefront-Access-Token': 'ccf2960a2fbac289a0647e349bd0df38',
            'Accept': 'application/json',
            'Content-Type': 'application/graphql'
        },
    }),
    cache
};

const isLoggedIn = typeof localStorage === 'undefined' ? '' : !!localStorage.getItem("token");

cache.writeData({
    data: {
        isLoggedIn,
        cartItems: []
    }
});

export default withData(config)
