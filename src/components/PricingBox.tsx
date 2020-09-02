import React from 'react'

import styled from '@emotion/styled'
import { colors, sizes } from '../styles/variables'
import IconTick from '../resources/icon-tick.svg'

interface StyledPricingBoxProps {
  transform?: string
  background?: boolean
  hideButton?: boolean
  banner?: string
  bannerColor?: string
  btnBackground?: boolean
  isTitleOutside?: boolean
}

const StyledPricingBox = styled.div<StyledPricingBoxProps>`
    position: relative;
    margin: 2rem 1rem;
    padding: 3rem 2.8rem;
    font-size: 95%;
    min-height: ${({ isTitleOutside }) => (isTitleOutside ? '42rem' : '48rem')};
    min-width: 20rem;
    max-width: 26rem;
    width: 25%;
    text-align: center;
    color: ${({ background }) => (background ? colors.white : null)};
    background: ${({ background }) => (background ? 'url("https://www.gitpod.io/galaxy.jpg")' : colors.white)};
    background-size: ${({ background }) => (background ? 'cover' : null)};
    background-position: ${({ background }) => (background ? 'left' : null)};
    border: 1px solid ${colors.offWhite2};
    background-color: ${colors.offWhite};
    border-radius: 3px;
    margin-top: ${({ isTitleOutside }) => (isTitleOutside ? '6rem' : '2rem')};
    z-index: ${({ isTitleOutside }) => (isTitleOutside ? '1000' : 'none')};;

    @media(min-width: calc(${sizes.breakpoints.md} + 1px)) {
        z-index: ${({ transform }) => (transform ? '1' : null)};
    }

    @media(min-width: calc(${sizes.breakpoints.lg} + 1px)) {
        transform: ${({ transform }) => (transform ? transform : null)};
    }

    @media(max-width: ${sizes.breakpoints.lg}) {
        min-height: 50rem;
        padding: 3rem 2rem;
        margin-bottom: 5rem;
        min-height: ${({ isTitleOutside }) => (isTitleOutside ? '41rem' : '51rem')};
    }

    @media(max-width: 1096px) {
        min-width: 25rem;
    }

    @media(max-width: 860px) {
        margin-top: ${({ banner }) => (banner ? '4rem' : '')};
    }

    @media(max-width: ${sizes.breakpoints.md}) {
        min-height: ${({ isTitleOutside }) => (isTitleOutside ? '40rem' : '49rem')};
        min-width: 30rem;
        padding: 2rem 3rem;
    }

    @media(max-width: ${sizes.breakpoints.sm}) {
        min-width: 25rem;
        min-height: auto;
    }

    @media(max-width: 320px) {
        min-width: 25rem;
    }

    > *:not(h4) {
        color: inherit;
    }

    h4 {
        font-size: 1.8rem;
        margin: ${({ isTitleOutside }) => (isTitleOutside ? '-7rem 0 6rem' : '')}
    }

    img, object {
        display: inline-block;
        margin: 3rem 0 1rem;
        height: 8rem;
        width: 8rem;

        display: ${({ isTitleOutside }) => (isTitleOutside ? 'none' : '')};

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
        display: inline-block;
    }

    li {
        position: relative;
        display: block;
        font-size: 1.5rem;
        text-align: left;
        font-size: 85%;
        padding-left: 1rem;

        &::before {
            content: url(${IconTick});
            position: absolute;
            left: -.5rem;
        }

        &:not(:last-child) {
            margin-bottom: .7rem;
        }
    }

    .info {
        font-size: 95%;
        border-top: 1px solid #ddd;
        padding-top: 1rem;
    }

    @media(min-width: calc(${sizes.breakpoints.lg} + 1px)) {
        .span {
            display: flex;
            justify-content: space-between;
        }
    }

    .links-container {
        display: flex;
        flex-direction: column;
        justify-content: space-between;
        align-items: center;
        z-index: 1999999999;
        
        @media(min-width: calc(${sizes.breakpoints.sm} + 1px)) {
            position: absolute;
            left: 50%;
            width: 100%;
            bottom: 1rem;
            transform: translateX(-50%);
        }

        @media(max-width: ${sizes.breakpoints.sm}) {
            margin: 3rem 0 1rem;
        }

        @media(min-width: calc(${sizes.breakpoints.lg} + 1px)) {
            bottom: ${({ transform }) => (transform ? '2rem' : '1.5rem')};
        }
    }

    .text {
        width: 100%;
        opacity: .7;
        font-size: 90%;
        
        @media(min-width: calc(${sizes.breakpoints.sm} + 1px)) {
            padding: 0 1.5rem;
        }
    }

    .is-hidden {
        display: ${({ hideButton }) => (hideButton ? 'none' : '')};
    }

    .banner {
        position: absolute;
        left: 0;
        bottom: 100%;
        width: 100%;
        background: ${colors.offWhite2};
        border-top-left-radius: 3px;
        border-top-right-radius: 3px;

        p {
            width: 20ch;
            margin: 0 auto;
            padding: .8rem 0;
            color: ${({ bannerColor }) => (bannerColor ? bannerColor : '')};
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
        background: ${({ btnBackground }) => (btnBackground ? colors.link : '')};
        color: ${({ btnBackground }) => (btnBackground ? colors.white : '')};
        border-color: ${({ btnBackground }) => (btnBackground ? colors.link : '')};

        &:hover {
            background: ${({ btnBackground }) => (btnBackground ? colors.lightBlue : '')};
            border-color: ${({ btnBackground }) => (btnBackground ? colors.lightBlue : '')};
        }
    }

    .sub-action {
        font-size: 90%;
        margin-top: .5rem;
        padding-bottom: 0;
    }

    .spacer {
        height: 2.5rem;
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
  banner?: string
  bannerColor?: string
  subAction?: JSX.Element
  isTitleOutside?: boolean
  info?: string
  areFeaturesBold?: boolean
  boldFeaturesCount?: number
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
  subAction,
  isTitleOutside,
  info,
  areFeaturesBold,
  boldFeaturesCount = 0
}) => (
  <StyledPricingBox
    transform={transform}
    background={background}
    hideButton={hideButton}
    banner={banner}
    bannerColor={bannerColor}
    btnBackground={btnBackground}
    isTitleOutside={isTitleOutside}
  >
    <h4>{title}</h4>
    {img ? img : null}
    {price ? <div className="price">{price}</div> : null}
    {duration ? <div className="duration">{duration}</div> : null}
    {feature ? <div className="feature">{feature}</div> : null}
    {features && features.length ? (
      <ul>
        {features.map((f, i) => (
          <li style={i < boldFeaturesCount && areFeaturesBold ? { fontWeight: 600 } : {}} key={i}>
            {f}
          </li>
        ))}
      </ul>
    ) : null}
    {info ? <p className="info">{info}</p> : null}
    <div className="links-container">
      <a href={link || '/#get-started'} className={`btn is-hidden ${background ? 'blue-on-hover' : ''}`}>
        {btnText ? btnText : 'Start for Free'}
      </a>
      <br />
      {text ? <p className="text">{text}</p> : null}
      {btn ? btn : null}
      {subAction ? subAction : <div aria-hidden="true" className="spacer"></div>}
    </div>
    {banner ? (
      <div className="banner">
        <p>{banner}</p>
      </div>
    ) : null}
  </StyledPricingBox>
)

export default PricingBox
