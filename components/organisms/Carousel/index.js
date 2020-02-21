import React from 'react'
import Card from '../../molecules/CarouselCard'
import {Container} from './style'

import gql from 'graphql-tag'
import withData from '../../../lib/apollo'
import { useQuery } from '@apollo/react-hooks';


const QUERY = gql`
{ 
  collectionByHandle(handle: "sweaters") {
    title
    products(first: 3) {
      edges {
        node {
          title
          id
          productType
          handle
          images(first: 1) {
            edges {
              node {
                transformedSrc(maxWidth: 200, maxHeight: 200, preferredContentType: PNG)
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
const Carousel = () => {


    const {data, loading, error} = useQuery(QUERY);
    // if(data) console.log(data)
    // if(loading) console.log('loading')


    return(
        <Container>
            {data && data.collectionByHandle.products.edges.map(({node}, i) => {
                return (<Card key={node.id} handle={node.handle} image={node.images.edges[0].node.transformedSrc} description={node.title} category={node.productType} id={`0${i+1}`}/>)
            })}
        </Container>
    )
};

export default withData(Carousel)