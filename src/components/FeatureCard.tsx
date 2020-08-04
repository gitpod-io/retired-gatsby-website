import React, { useState } from 'react'

import styled from '@emotion/styled'
import { sizes } from '../styles/variables'
import Pattern from '../resources/pattern-2.jpg'
import IconTick from '../resources/icon-tick.svg'

const Styled = styled.div<{ direction?: string; flexDirectionColumnForImgContainer?: boolean }>`
  display: flex;
  justify-content: space-between;
  position: relative;

  &:not(:last-child) {
    margin-bottom: 18rem;
  }

  @media (max-width: ${sizes.breakpoints.sm}) {
    text-align: center;
  }

  [id] {
    position: absolute;
    top: -25vh;
  }

  @media (max-width: 1140px) {
    flex-direction: column;
    max-width: 740px;
  }

  h2 + p {
    margin: 0;
  }

  &:nth-of-type(2n) {
    @media (min-width: 1141px) {
      flex-direction: row-reverse;
    }

    @media (min-width: 1141px) {
      .why-gitpod__img-container {
        padding-left: 8rem;
        &::before {
          left: 0;
        }

        &:hover::before {
          transform: translateX(-5rem);
        }
      }
    }
  }

  .text {
    display: flex;
    flex-direction: column;
    justify-content: center;
    min-width: 28rem;

    @media (min-width: 1141px) {
      flex: 0 0 38%;
    }

    @media (max-width: 1150px) {
      padding: 0 4rem;
    }

    @media (max-width: ${sizes.breakpoints.md}) {
      padding: 0 2rem;
    }

    @media (max-width: ${sizes.breakpoints.sm}) {
      padding: 0 1rem;
    }
  }

  img {
    width: 100%;
    max-height: 440px;

    @media (max-width: 1140px) {
      max-height: 400px;
    }

    @media (max-width: 500px) {
      max-height: 300px;
    }
  }

  .img-container {
    display: flex;
    flex-direction: ${({ flexDirectionColumnForImgContainer }) => (flexDirectionColumnForImgContainer ? 'column' : '')};
    justify-content: center;
    align-items: ${({ flexDirectionColumnForImgContainer }) => (flexDirectionColumnForImgContainer ? '' : 'center')};
    width: 100%;
    position: relative;

    &::before {
      content: '';
      position: absolute;
      display: block;
      height: 100%;
      width: 100%;
      background: url(${Pattern});
      background-size: cover;
      background-repeat: repeat;
      z-index: -1;
      opacity: 0.1;
      border-radius: 3px;
    }

    @media (min-width: 1141px) {
      padding-right: ${({ direction }) => (direction === 'right' ? '8rem' : '')};
      padding-left: ${({ direction }) => (!(direction === 'right') ? '8rem' : '')};
      min-height: 520px;
      max-height: 500px;
      flex: 0 0 52%;

      &::before {
        left: ${({ direction }) => (direction === 'right' ? '' : 0)};
        right: ${({ direction }) => (!(direction === 'right') ? '' : 0)};
        width: 60vw;
      }
    }

    @media (max-width: 1140px) {
      min-height: 240px;
      padding: 5rem;
      margin-bottom: 2.5rem;

      &::before {
        left: 0;
        right: 0;
      }
    }

    @media (max-width: 560px) {
      padding: 3rem;
    }

    @media (max-width: 450px) {
      padding: 2rem;
    }
  }

  @keyframes slideInLeft {
    100% {
      transform: translateX(5rem);
    }
  }

  @keyframes slideInRight {
    100% {
      transform: translateX(-5rem);
    }
  }

  .in-view::before {
    @media (min-width: 1141px) {
      animation: ${({ direction }) => (direction === 'right' ? 'slideInLeft' : 'slideInRight')} 0.6s cubic-bezier(0.16, 1, 0.3, 1) 1 normal
        forwards;
    }
  }

  .buttons {
    margin-top: 4rem;
  }

  ul {
    margin-top: 5rem;
    font-size: 1.9rem;

    @media (max-width: 500px) {
      font-size: 1.6rem;
    }

    @media (max-width: 320px) {
      font-size: 1.5rem;
    }

    @media (max-width: 290px) {
      font-size: 1.4rem;
    }
  }

  li {
    display: flex;
    &::before {
      content: url(${IconTick});
      transform: scale(1.4);
      display: block;
      margin: 0 2rem 0 1rem;
      left: -0.5rem;

      @media (max-width: 500px) {
        margin: 0 1rem 0 0;
      }
    }
  }

  img {
    border-radius: 3px;
  }
`

export interface FeatureCardProps {
  src?: string
  alt?: string
  Graphic?: any
  title: string | JSX.Element
  text: string | JSX.Element
  direction?: string
  id?: string
  featuresList?: string[]
  Buttons?: any
}

const FeatureCard = ({ src, alt, Graphic, title, text, direction, id, featuresList, Buttons }: FeatureCardProps) => {
  const [renderedGraphic, setRenderedGraphic] = useState<string>('')

  return (
    <Styled className="row" direction={direction} flexDirectionColumnForImgContainer={featuresList && featuresList.length ? true : false}>
      <div className="img-container in-view">
        {Graphic ? <Graphic renderedGraphic={renderedGraphic} /> : null}
        {src ? <img src={src} alt={alt} style={featuresList && featuresList.length ? { transform: 'scale(.9)' } : {}} /> : null}
        {featuresList && featuresList.length ? (
          <ul>
            {featuresList.map((feat, i) => (
              <li key={i + feat}>{feat}</li>
            ))}
          </ul>
        ) : null}
      </div>
      <div className="text">
        <h2>{title}</h2>
        {text}
        {Buttons ? <Buttons setRenderedGraphic={setRenderedGraphic} /> : null}
      </div>
      {id && <div id={id} />}
    </Styled>
  )
}

export default FeatureCard
