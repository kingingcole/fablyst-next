import React, {Fragment, useState} from 'react';
import Link from 'next/link'
import {Container, Row} from './style'
import RecommendedProductCard from '../../molecules/RecommendedProductCard'
import CategoryHeading from '../../atoms/CategoryHeading'

import gql from 'graphql-tag'
import withData from '../../../lib/apollo'
import {useQuery} from '@apollo/react-hooks';
import Layout from "../../../pages/product/[pid]";


const GET_RECOMMENDED_PRODUCTS = gql`
  query getRecommendedProducts($handle: String!) {
      collectionByHandle(handle: $handle) {
        title
        products(first: 6, sortKey: RELEVANCE) {
          edges {
            node {
              id
              title
              priceRange {
                minVariantPrice {
                  amount
                  currencyCode
                }
              }
              productType
              handle
              images(first: 1) {
                edges {
                  node {
                    transformedSrc(maxWidth: 500, maxHeight: 400, preferredContentType: PNG)
                    altText
                  }
                }
              }
            }
          }
        }
      }
  }
`;

const RecommendedProductsSection = ({ handle }) => {
    // console.log(handle);

    const {loading, data, error} = useQuery(GET_RECOMMENDED_PRODUCTS, {variables: { handle }});
    error && console.log(error);

    return (
        // each ROW component needs 3 (three) products
        <Fragment>
            <hr/>
            <CategoryHeading largeText={`Recommended products`}/>
            <Container>
                <Row>
                    {error && <p style={{textAlign: 'center', width: '100%', margin:'30px 0'}}>An error occured. Please try again or check your connection.</p>}
                    {loading && <p style={{textAlign: 'center', width: '100%', margin:'30px 0'}}>Loading product details...</p>}
                    {data && data.collectionByHandle.products.edges.slice(0, 3).map(({node}) => {
                        return (
                            <RecommendedProductCard
                                key={node.id}
                                category={node.productType}
                                title={node.title}
                                price={`${node.priceRange.minVariantPrice.currencyCode} ${node.priceRange.minVariantPrice.amount}`}
                                handle={node.handle}
                                productImage={node.images.edges[0].node.transformedSrc}
                            />
                        )
                    })}
                </Row>

                <Row>
                    {data && data.collectionByHandle.products.edges.slice(3).map(({node}) => {
                        return (
                            <RecommendedProductCard
                                key={node.id}
                                category={node.productType}
                                title={node.title}
                                price={`${node.priceRange.minVariantPrice.currencyCode} ${node.priceRange.minVariantPrice.amount}`}
                                handle={node.handle}
                                productImage={node.images.edges[0].node.transformedSrc}
                            />
                        )
                    })}
                </Row>
            </Container>
        </Fragment>
    )
};

export default withData(RecommendedProductsSection)