import React from 'react'

import styled from '@emotion/styled'
import { colors, shadows } from '../styles/variables'

const StyledFeatureBox = styled.div`
    padding: 1.5rem .8rem;
    text-align: center;
    background: ${colors.white};
    box-shadow: ${shadows.light};
    border-radius: 2rem;

    h3 {
        font-weight: 400;
        font-size: 2rem;
    }

    img {
        height: 4rem;
        display: block;
        margin: 1rem auto;
    }
`

interface FeatureBoxProps {
    alt: string
    img: string
    text: string
}

const FeatureBox: React.SFC<FeatureBoxProps> = ({ alt, img, text }) => (
    <StyledFeatureBox>
        <img alt={alt} src={img}/>
        <h3>{text}</h3>
    </StyledFeatureBox>
)

export default FeatureBox
