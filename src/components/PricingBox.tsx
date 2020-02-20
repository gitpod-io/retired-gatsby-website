import React from 'react'

import styled from '@emotion/styled'
import { Link } from 'gatsby'
import { colors, shadows, sizes } from '../styles/variables'
import IconTick from '../resources/icon-tick.svg'

interface StyledPricingBoxProps {
    transform?: string 
    background?: boolean 
    hideButton?: boolean 
    banner?: string
    bannerColor?: string  
    backgroundColor?: string
    btnBackground?: boolean 
}

const StyledPricingBox = styled.div<StyledPricingBoxProps>`
    position: relative;
    margin-bottom: 3rem;
    padding: 3rem 2.8rem;
    font-size: 95%;
    min-height: 48rem;
    min-width: 20rem;
    max-width: 22.5rem;
    width: 20%;
    text-align: center;
    color: ${({ background }) => background ? colors.white : null };
    background: ${({ background }) => background ? 'url("https://www.gitpod.io/galaxy.jpg")' : colors.white };
    background-size: ${({ background }) => background ? 'cover' : null };
    background-position: ${({ background }) => background ? 'left' : null };
    box-shadow: ${shadows.light};
    background-color: ${({ backgroundColor }) => backgroundColor ? backgroundColor : null };

    @media(min-width: ${sizes.breakpoints.md}) {
        z-index: ${({transform}) => transform ? '1' : null };
    }

    @media(min-width: ${sizes.breakpoints.lg}) {
        transform: ${({ transform }) => transform ? transform : null};
    }

    @media(max-width: ${sizes.breakpoints.lg}) {
        min-height: 50rem;
        padding: 3rem 2rem;
        margin-bottom: 5rem;
    }

    @media(max-width: 907px) {
        min-width: 25rem;
    }

    @media(max-width: ${sizes.breakpoints.md}) {
        min-height: 45rem;
        min-width: 30rem;
        padding: 2rem 3rem;
        margin-top: ${({banner}) => banner ? '4rem': ''};
    }

    @media(max-width: ${sizes.breakpoints.sm}) {
        min-width: 25rem;
        min-height: auto;
    }

    @media(max-width: 320px) {
        min-width: 25rem;
    }

    > * {
        color: inherit;
    }

    h4 {
        font-size: 1.8rem;
    }

    img, object {
        display: inline-block;
        margin: 3rem 0 1rem;
        height: 8rem;
        width: 8rem;

        @media(max-width: ${sizes.breakpoints.md}) {
            margin: 1.5rem 0 1rem;
        }
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
        font-size: 1.3rem;
        font-weight: 600;
        margin: .8rem 0 1.5rem;
    }

    .feature {
        margin-top: 8rem;
    }

    ul {
        list-style: initial;
        list-style-image: url(${IconTick});
        margin-left: 10px;
        margin-right: -8px;

        @media(max-width: 907px) {
            margin-left: 30px;
            margin-right: 10px;
        }

        @media(max-width: ${sizes.breakpoints.md}) {
            padding: 0 2rem;
            margin: 0 1rem;
        }

         @media(max-width: ${sizes.breakpoints.sm}) {
            padding: 0 1rem;
            margin: 0;
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
        @media(min-width: ${sizes.breakpoints.sm}) {
            position: absolute;
            left: 50%;
            bottom: 2rem;
            transform: translateX(-50%);

        }

        @media(max-width: ${sizes.breakpoints.sm}) {
            margin: 3rem 0 1rem;
        }

        @media(min-width: ${sizes.breakpoints.lg}) {
            bottom: ${({transform}) => transform ? '3rem' : '2rem'};
        }
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
        background: ${colors.offWhite2};

        p {
            width: 20ch;
            margin: 0 auto;
            padding: .8rem 0;
            color: ${({bannerColor}) => bannerColor ? bannerColor : ''};
            font-size: 90%;
            font-weight: 600;
        }
    }

    .blue-on-hover {
        color: ${colors.text};
        border: 2px solid #fff;
        
        &:hover {
            color: ${colors.white};
            border: 2px solid ${colors.lightBlue};
        }
    }

    .btn {
        background: ${({btnBackground}) => btnBackground ? colors.link : ''};
        color: ${({btnBackground}) => btnBackground ? colors.white : ''};
        border-color: ${({btnBackground}) => btnBackground ? colors.link : ''};

        &:hover {
            background: ${({btnBackground}) => btnBackground ? colors.lightBlue : ''};
            border-color: ${({btnBackground}) => btnBackground ? colors.lightBlue : ''};
        }
    }   

    &:first-of-type {
        @media(max-width: 907px) {
            order: 5;
        }

        @media(max-width: ${sizes.breakpoints.md}) {
            order: 0;
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
    btnBackground?: boolean 
    link?: string
    hideButton?: true 
    btn?: JSX.Element
    text?: string
    banner?: string,
    bannerColor?: string,
    backgroundColor?: string 
}

const PricingBox: React.SFC<PricingBoxProps> = ({
    title, 
    img, 
    price, 
    duration, 
    feature, 
    features, 
    btnText, 
    btnBackground,
    transform, 
    background, 
    link, 
    hideButton,
    btn,
    text,
    banner,
    bannerColor,
    backgroundColor
}) => (
    <StyledPricingBox 
        transform={transform} 
        background={background} 
        hideButton={hideButton} 
        banner={banner}
        bannerColor={bannerColor}
        backgroundColor={backgroundColor}
        btnBackground={btnBackground}
    >
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
