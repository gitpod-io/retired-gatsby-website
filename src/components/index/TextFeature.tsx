import React from 'react'

import styled from '@emotion/styled'
import { colors, borders } from '../../styles/variables'
import TextFeatureBg from '../../resources/textcard-bg.png'

const StyledTextFeature = styled.section`
    padding: 8rem 0;
    text-align: center;
    background: url(${TextFeatureBg});
    background-size: cover;

    h2 + p {
        margin: 0;
    }

    .text {
        max-width: 600px;
        margin: auto;
        padding: 6rem;
        background: ${colors.white};
        border: ${borders.light};
        border-radius: 3px;

        @media(max-width: 500px) {
            padding: 5rem 2rem;
        }
    }

    img {
        display: inline-block;
        height: 8rem;
        margin-bottom: 4rem;
    }
`

interface TextFeatureProps {
    path: any
    alt: string
    title: string
    text: string | JSX.Element
}

const TextFeature = ({ path, alt, title, text }: TextFeatureProps) => (
    <StyledTextFeature>
        <div className="row">
            <div className="text">
                <img src={path} alt={alt} />
                <h2><strong>{title}</strong></h2>
                <p>{text}</p>
            </div>
        </div>
    </StyledTextFeature>
)

export default TextFeature
