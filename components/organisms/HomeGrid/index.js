import React from 'react'
import {Grid} from './style'
import HGLC from '../../molecules/HomeGridLeftColumn'
import HGRC from '../../molecules/HomeGridRightColumn'

const HomeGrid = () => {
    return (
        <Grid>
            <HGLC />
            <HGRC />
        </Grid>
    )
};

export default HomeGrid