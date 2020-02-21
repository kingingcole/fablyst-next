import React,{Fragment, useState} from 'react'
import CategoryHeading from "../../atoms/CategoryHeading";
import {Container} from './style'
import PopularProductCard from '../../molecules/PopularProductCard'

import gql from 'graphql-tag'
import { useQuery } from '@apollo/react-hooks';
import withData from '../../../lib/apollo'

const QUERY = gql`
{
  collectionByHandle(handle: "sales") {
    title
    products(first: 3, sortKey: RELEVANCE) {
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
          handle
          images(first: 1) {
            edges {
              node {
                transformedSrc(maxWidth: 500, maxHeight: 1000, preferredContentType: PNG)
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


const PopularProductsSection = () => {

    const {data, loading, error} = useQuery(QUERY);
    error && console.log(error);


    return (
        <Fragment>
            <hr/>
            <CategoryHeading largeText={`popular products`} smallText={data && data.collectionByHandle.title}/>
            <Container>
                {loading && <p style={{textAlign: 'center', width:'100%'}}>Loading popular products...</p>}
                {error && <p style={{textAlign: 'center', width:'100%'}}>An error occured</p>}
                { data && data.collectionByHandle.products.edges.map(({node}) => {
                    return <PopularProductCard key={node.id} image={node.images.edges[0].node.transformedSrc}
                                               handle={node.handle}
                                               title={node.title} price={node.priceRange.minVariantPrice.amount}
                                               currencyCode={node.priceRange.minVariantPrice.currencyCode}/>
                }) }
            </Container>
        </Fragment>
    )
};

export default withData(PopularProductsSection)
