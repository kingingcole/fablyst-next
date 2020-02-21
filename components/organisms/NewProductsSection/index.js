import React, {Fragment, useState} from 'react';
import NewProductCard from '../../molecules/NewProductCard'
import {Container} from './style'
import CategoryHeading from '../../atoms/CategoryHeading'

import img1 from '../../../assets/photo-of-nike-shoes-1598505.jpg'
import img2 from '../../../assets/person-wearing-gray-hoodie.jpg'

import gql from 'graphql-tag'
import {useQuery} from '@apollo/react-hooks';
import withData from '../../../lib/apollo'

const QUERY = gql`
{
  collectionByHandle(handle: "staff-picks") {
    title
    products(first: 2, sortKey: RELEVANCE) {
      edges {
        node {
          title
          productType
          priceRange {
            minVariantPrice {
              amount
              currencyCode
            }
          }
          handle
          images(first: 1) {
            edges {
              node {
                transformedSrc(maxWidth: 500, maxHeight: 500, preferredContentType: PNG)
                altText
                originalSrc
              }
            }
          }
        }
      }
    }
  }
}

`;

const NewProductsSection = () => {

    const {data, loading, error} = useQuery(QUERY);
    error && console.log(error.message);

    let product1, product2;
    if (data) {
        product1 = data.collectionByHandle.products.edges[0].node;
        product2 = data.collectionByHandle.products.edges[1].node;
    }

    return (
        <Fragment>
            {loading && <p style={{textAlign: 'center', width:'100%'}}>Loading staff-picked products...</p>}
            {error && <p style={{textAlign: 'center', width:'100%'}}>An error occured</p>}
            {data &&
            <>
                <hr/>
                < CategoryHeading largeText={`staff picks`} smallText={data.collectionByHandle.title}/>
                <Container>
                    <NewProductCard
                        margin={`0px 10px 0px 0px`}
                        category={product1.productType}
                        title={product1.title}
                        price={product1.priceRange.minVariantPrice.amount}
                        productImage={product1.images.edges[0].node.transformedSrc}
                        currencyCode={product1.priceRange.minVariantPrice.currencyCode}
                        handle={product1.handle}
                    />
                    <NewProductCard
                        margin={`0px 0px 0px 10px`}
                        category={product2.productType}
                        title={product2.title}
                        price={product2.priceRange.minVariantPrice.amount}
                        productImage={product2.images.edges[0].node.transformedSrc}
                        currencyCode={product2.priceRange.minVariantPrice.currencyCode}
                        handle={product2.handle}
                    />
                </Container>
            </>
            }
        </Fragment>
    )
};

export default withData(NewProductsSection)