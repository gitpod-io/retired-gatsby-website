import React from 'react'

import styled from '@emotion/styled'
import { borders, sizes } from '../../styles/variables'

const StyledFeature = styled.div`
    display: flex;
    align-items: center;
    flex: 0 0 45%;
    max-width: 60rem;
    margin: 0 auto;
    margin-bottom: 5rem;
    margin-top: 5rem;

    @media(max-width: ${sizes.breakpoints.lg}) {
        flex-direction: column;
        text-align: center;
    }

    div {
        @media(min-width: ${sizes.breakpoints.lg}) {
            border-left: ${borders.bold};
            margin-left: 3rem;
            padding-left: 3rem;
        }
    }

    img {
        max-width: 10rem;
        max-height: 12rem;

        @media(min-width: ${sizes.breakpoints.lg}) {
            flex: 0 0 15%;
        }
        
        @media(max-width: ${sizes.breakpoints.lg}) {
            height: 10rem;
            margin-bottom: 4rem;
        }
    }
`

export interface FeatureProps {
    title: string
    text: string
    img: string
}

const Feature = ({ title, text, img }: FeatureProps) => (
    <StyledFeature>
        <img src={img} alt={title}/>
        <div>
            <h3>{title}</h3>
            <p>{text}</p>
        </div>
    </StyledFeature>
)

export default Feature
