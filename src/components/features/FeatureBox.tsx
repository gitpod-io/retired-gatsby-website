import React from 'react'

import styled from '@emotion/styled'
import { colors, shadows } from '../../styles/variables'

const StyledFeatureBox = styled.div`
    min-width: 20rem;
    padding: 1.5rem .8rem;
    text-align: center;
    background: ${colors.white};
    box-shadow: ${shadows.light};
    border-radius: 2rem;
    height: 150px;
    position:relative;

    h3 {
        font-weight: 400;
        font-size: 2rem;
    }

    img {
        height: 4rem;
        display: block;
        margin: 1rem auto;
    }

    &:hover {
        background-color: ${colors.offWhite};
    }
`

interface FeatureBoxProps {
    alt: string
    img: string
    text: string | JSX.Element
    path: string
}

const FeatureBox: React.SFC<FeatureBoxProps> = ({ img, text, path, alt }) => (
    <StyledFeatureBox>
        <a href={`#${path}`}>
            <div>
                <img src={img} alt={alt} />
            </div>
            <div>
                <h3>{text}</h3>
            </div>
        </a>
    </StyledFeatureBox>
)

export default FeatureBox
