import React from 'react'
import {Container} from "./style";
import Layout from '../../components/Layout'
import { useQuery } from '@apollo/react-hooks';
import { gql } from 'apollo-boost';
import withData from '../../lib/apollo'

import Hero from '../../components/organisms/HeroSection'
import Carousel from '../../components/organisms/Carousel'
import Subscribe from '../../components/molecules/Subscribe'
import HomeGrid from '../../components/organisms/HomeGrid'
import NewProductsSection from '../../components/organisms/NewProductsSection'
import PopularProductsSection from '../../components/organisms/PopularProductsSection'
import HomeImageBanner from '../../components/molecules/HomeImageBanner'

const SHOP_INFO = gql`
  {
  shop {
    name
    primaryDomain {
      url
      host
    }
  }
}
`;

const Home = () => {
    // const {loading, error, data} = useQuery(SHOP_INFO);
    // if (loading) return <p>loading...</p>;
    // if (error) console.log(error);

    return (
        <Layout>
            <Container>
                <Hero/>
                <Carousel/>
                <Subscribe/>
                <HomeGrid/>
                <NewProductsSection/>
                <PopularProductsSection/>
                <HomeImageBanner/>
            </Container>
        </Layout>

    )
};

export default withData(Home)
