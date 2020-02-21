import React, {useState} from 'react'
import Layout from '../../components/Layout'
import RecommendedProductsSection from '../../components/organisms/RecommendedProductsSection'
import ProductDetailsSection from '../../components/organisms/ProductDetailsSection'

import gql from 'graphql-tag'
import withData from '../../lib/apollo'
import {useQuery} from '@apollo/react-hooks';

import {useRouter} from 'next/router'


const GET_PRODUCT = gql`
  query getProduct($handle: String!) {
    productByHandle(handle: $handle) {
        images(first: 10) {
          edges {
            node {
              id
              transformedSrc(preferredContentType: PNG, maxWidth: 600, maxHeight: 1000)
            }
          }
        }
        title
        descriptionHtml
        productType
        collections(first: 1) {
          edges {
            node {
              handle
            }
          }
        }
        variants(first: 40) {
          edges {
            node {
              id
              availableForSale
              compareAtPrice
              price
              image {
                transformedSrc(maxWidth: 100, maxHeight: 100)
              }
              selectedOptions {
                name
                value
              }
            }
          }
        }
        options {
          name
          values
        }
        priceRange {
          minVariantPrice {
            currencyCode
          }
        }
    }
  }
`;

const ProductDetail = () => {
    const router = useRouter();
    const handle = router.query.pid;

    const {loading, data, error} = useQuery(GET_PRODUCT, {variables: { handle }});
    // data && console.log(data);
    error && console.log(error.message);

    return (
        <Layout>
            {error && <p style={{textAlign: 'center', width: '100%', margin:'30px 0'}}>An error occured. Please try again or check your connection.</p>}
            {loading && <p style={{textAlign: 'center', width: '100%', margin:'30px 0'}}>Loading product details...</p>}
            {data &&
            <>
                <ProductDetailsSection product={data.productByHandle}/>
                <RecommendedProductsSection handle={data.productByHandle.collections.edges[0].node.handle}/>
            </>
            }
        </Layout>
    )
};

export default withData(ProductDetail)
