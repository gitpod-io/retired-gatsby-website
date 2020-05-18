import React from 'react'

import styled from '@emotion/styled'
import { colors, shadows, sizes } from '../../styles/variables'

const StyledFeatureBox = styled.div`
    position: relative;
    padding: 1rem .6rem;
    text-align: center;
    background: var(--white);
    box-shadow: ${shadows.light};
    border-radius: 2rem;
    height: 120px;

    @media(max-width: 980px) {
       height: 100px;
    }

    h3 {
        font-weight: 400;
        font-size: 1.7rem;

        @media(max-width: 980px) {
            font-size: 1.5rem;
        }
    }

    img {
        height: 3.3rem;
        display: block;
        margin: .5rem auto 1rem;

        @media(max-width: ${sizes.breakpoints.sm}) {
            height: 3rem;
        }

        @media(max-width: 980px) {
            height: 2.4rem;
        }
    }

    &:hover {
        background-color: var(--offWhite);
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
