import React from 'react'

import styled from '@emotion/styled'
import { Link } from 'gatsby'
import { colors, shadows, sizes } from '../styles/variables'

const StyledPricingBox = styled.div<{transform?: string, background?: boolean, hideButton?: boolean}>`
    position: relative;
    margin-bottom: 3rem;
    padding: 3rem 4rem;
    min-height: ${({hideButton}) => hideButton ? 'auto' : '50rem'};
    min-width: 25rem;
    width: 24%;
    text-align: center;
    color: ${({ background }) => background ? colors.white : null };
    background: ${({ background }) => background ? 'url("https://www.gitpod.io/galaxy.jpg")' : colors.white };
    background-size: ${({ background }) => background ? 'cover' : null };
    background-position: ${({ background }) => background ? 'left' : null };
    box-shadow: ${shadows.light};

    @media(min-width: ${sizes.breakpoints.lg}) {
        transform: ${({transform}) => transform ? transform : null };
        z-index: ${({transform}) => transform ? '1' : null };
    }

    @media(max-width: ${sizes.breakpoints.lg}) {
        transform: scale(1.04);
        min-height:  ${({hideButton}) => hideButton ? 'auto' : '54rem'};
        margin-bottom: 5rem;
    }

    @media(max-width: ${sizes.breakpoints.lg}) {
        padding: 3rem 4rem;
    }

    @media(max-width: ${sizes.breakpoints.md}) {
        padding: 2rem 3rem;
    }

    > * {
        color: inherit;
    }

    img, object {
        display: inline-block;
        margin: 3rem 0 1rem;
        height: 8rem;
        width: 8rem;
    }

    .price {
        font-size: 2.1rem;
        font-weight: 600;
    }

    .duration {
        font-size: 1.5rem;
        margin: .8rem 0 1.5rem;
    }

    .feature {
        margin-top: 8rem;
    }

    ul {
        list-style: initial;
        margin-left: 10px;
        margin-right: -8px;
    }

    li {
        font-size: 1.5rem;
        text-align: left;
        font-size: 85%;

        &:not(:last-child) {
            margin-bottom: .8rem;
        }
    }

    @media(min-width: ${sizes.breakpoints.lg}) {
        .span {
            display: flex;
            justify-content: space-between;
        }
    }

    .btn {
        display: ${({hideButton}) => hideButton ? 'none': '' };
        position: absolute;
        bottom: 2rem;
        left: 50%;
        transform: translateX(-50%);
    }
`

export interface PricingBoxProps {
    title: string
    img: JSX.Element
    price?: string | JSX.Element
    duration?: string
    feature?: string | JSX.Element
    features?: (string | JSX.Element)[]
    transform?: string
    background?: boolean
    btnText?: string
    link?: string
    hideButton?: true 
}

const PricingBox: React.SFC<PricingBoxProps> = ({ title, img, price, duration, feature, features, btnText, transform, background, link, hideButton }) => (
    <StyledPricingBox transform={transform} background={background} hideButton={hideButton}>
        <h4>{title}</h4>
        { img }
        { price ? <div className="price">{price}</div> : null }
        { duration ? <div className="duration">{duration}</div> : null }
        { feature ? <div className="feature">{feature}</div> : null }
        { features && features.length ?
            <ul>
                { features.map((f, i) => <li key={i}>{f}</li>) }
            </ul>
        : null }
        <Link to={link || '/#get-started'} className="btn" style={background ? {color: colors.textDark} : {}}>{btnText ? btnText : 'Start for Free'}</Link>
    </StyledPricingBox>
)

export default PricingBox
