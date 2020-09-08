import React from 'react'

import styled from '@emotion/styled'
import { borders, sizes } from '../styles/variables'

const StyledFeatureItem = styled.div`
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
        @media(min-width: calc(${sizes.breakpoints.lg} + 1px)) {
            border-left: ${borders.bold};
            margin-left: 3rem;
            padding-left: 3rem;
        }
    }

    p {
        max-width: 320px;
    }

    img {
        max-width: 10rem;
        max-height: 12rem;

        @media(min-width: calc(${sizes.breakpoints.lg} + 1px)) {
            flex: 0 0 15%;
        }

        @media(max-width: ${sizes.breakpoints.lg}) {
            height: 10rem;
            margin-bottom: 4rem;
        }
    }
`

export interface FeatureItemProps {
    title: string
    text: string
    img: string
    alt?: string
}

const FeatureItem = ({ title, text, img, alt }: FeatureItemProps) => (
    <StyledFeatureItem>
        <img src={img} alt={alt ? alt : title}/>
        <div>
            <h3>{title}</h3>
            <p>{text}</p>
        </div>
    </StyledFeatureItem>
)

export default FeatureItem
