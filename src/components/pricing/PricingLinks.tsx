import React from 'react'

import styled from '@emotion/styled'
import { borders } from '../../styles/variables'

const StyledPricingLinks = styled.section`
    max-width: 850px;
    display: flex;
    align-items: center;
    margin: 0 auto;

    @media(max-width: 720px) {
        flex-direction: column;
        text-align: center;
        max-width: 550px;   
    }

    img {
        flex: 1;
        height: 12rem;

        @media(max-width: 720px) {
            max-width: 10rem;
            margin-bottom: 2rem;
        }
    }
    
    div {
        flex: 0 0 75%;
        padding-left: 4rem;
        border-left: ${borders.bold};

        @media(max-width: 720px) {
            border-left: none;
            padding-left: 0;   
        }
    }

    h2 {
        margin-bottom: 5rem;
    }

    h3 {
        font-size: 110%;
        margin-bottom: .5rem;
    }

`

export interface PricingLinksProps {
    img: JSX.Element
    title: JSX.Element
    text: JSX.Element
    links: JSX.Element
}

const PricingLinks = ({ img, title, text, links }: PricingLinksProps) => (
    <div className="row">
        <StyledPricingLinks>
            { img }
            <div>
                <h2>{title}</h2>
                <p>
                   {text} 
                </p>
            <span className="btn-wrapper">
                {links}
            </span>
            </div>
        </StyledPricingLinks>
    </div>
)

export default PricingLinks
