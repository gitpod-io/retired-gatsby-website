import React from 'react'

import styled from '@emotion/styled'
import { colors, shadows, sizes } from '../styles/variables'

const StyledFeature = styled.div`
    width: 32%;
    max-width: 38rem;
    min-width: 28rem;
    padding: 3rem;
    margin-bottom: 3rem;
    background: ${colors.white};
    box-shadow: ${shadows.light};

    @media(min-width: ${sizes.breakpoints.md}) {
        width: 32%;
    }

    @media(max-width: ${sizes.breakpoints.md}) {
        &:not(:last-child) {
            margin-bottom: 5rem;
        }
    }

    .title {
        text-align: center;
    }

    .read-more {
        margin-top: 6rem;
    }
`

interface FeatureProps {
    title: string
    paragraphs: string[]
    more?: JSX.Element
}

const Feature: React.SFC<FeatureProps> = ({title, paragraphs, more}) => (
    <StyledFeature className="feature">
        <h3 className="title">{title}</h3>
        { paragraphs.map((p, i) => <p key={i}>{p}</p>) }
        { more ? more : null }
    </StyledFeature>
)

export default Feature
