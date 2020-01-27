import React from 'react'

import styled from '@emotion/styled'
import { Link } from 'gatsby'
import { colors, shadows, sizes } from '../styles/variables'

const StyledPricingBox = styled.div<{transform?: string, background?: boolean, hideButton?: boolean, banner?: string}>`
    position: relative;
    margin-bottom: 3rem;
    padding: 3rem 4rem;
    min-height: 50rem;
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
        min-height: 54rem;
        margin-bottom: 5rem;
    }

    @media(max-width: ${sizes.breakpoints.lg}) {
        padding: 3rem 4rem;
    }

    @media(max-width: ${sizes.breakpoints.md}) {
        min-width: 30rem;
        padding: 2rem 3rem;

        margin-top: ${({banner}) => banner ? '7rem': ''};
    }

    @media(max-width: 320px) {
        min-width: 25rem;
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

        span {
            font-size: 80%;
            font-weight: 400;
        }
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

        @media(max-width: ${sizes.breakpoints.md}) {
            padding: 0 2rem;
        }

        @media(max-width: 320px) {
            padding: 0;
        }
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

    .btn, .text {
        position: absolute;
        bottom: 2rem;
        left: 50%;
        transform: translateX(-50%);
    }

    .text {
        width: 100%;
        opacity: .7;
    }

    .is-hidden {
        display: ${({hideButton}) => hideButton ? 'none': '' };
    }

    .banner {
        position: absolute;
        left: 0;
        bottom: 100%;
        width: 100%;
        box-shadow: ${shadows.light};

        p {
            width: 20ch;
            margin: 0 auto;
            padding: .8rem 0;
            color: #EAA42F;
            font-size: 90%;
            font-weight: 600;
        }
    }

    .blue-on-hover {
        color: ${colors.text};
        
        &:hover {
            background: ${colors.link};
            color: ${colors.white};
        }
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
    btn?: JSX.Element
    text?: string
    banner?: string
}

const PricingBox: React.SFC<PricingBoxProps> = ({ title, img, price, duration, feature, features, btnText, transform, background, link, hideButton, btn, text, banner }) => (
    <StyledPricingBox transform={transform} background={background} hideButton={hideButton} banner={banner}>
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
        <Link to={link || '/#get-started'} className={`btn is-hidden ${background ? 'blue-on-hover' : ''}`}>{btnText ? btnText : 'Start for Free'}</Link>
        { btn ? btn : null }
        { text ? <p className="text">{text}</p> : null }
        { banner ? <div className="banner"><p>{banner}</p></div> : null }
    </StyledPricingBox>
)

export default PricingBox
