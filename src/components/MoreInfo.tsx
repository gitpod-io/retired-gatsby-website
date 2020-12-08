import React from 'react'

import styled from '@emotion/styled'
import { borders, sizes } from '../styles/variables'
import { Link } from 'gatsby'
import MapGrey from '../resources/map-grey.svg'

const StyledMoreInfo = styled.div<{negativeSpaceTop?: string}>`
    @media(min-width: calc(${sizes.breakpoints.md} + 1px)) {
        margin-top: ${({negativeSpaceTop}) => negativeSpaceTop };
    }   
`

const StyledPricingLinks = styled.section`
  max-width: 850px;
  display: flex;
  align-items: center;
  margin: 0 auto;

  @media (max-width: ${sizes.breakpoints.md}) {
    padding-bottom: 8rem;
  }

  @media (max-width: 720px) {
    flex-direction: column;
    text-align: center;
    max-width: 550px;

    .btn-wrapper {
      justify-content: center;
    }
  }

  img {
    flex: 1;
    height: 12rem;

    @media (max-width: 720px) {
      max-width: 10rem;
      margin-bottom: 2rem;
    }
  }

  div {
    flex: 0 0 75%;
    padding-left: 4rem;
    border-left: ${borders.bold};

    @media (max-width: 720px) {
      border-left: none;
      padding-left: 0;
    }
  }

  h2 {
    margin-bottom: 5rem;
  }

  h3 {
    font-size: 110%;
    margin-bottom: 0.5rem;
  }
`

export interface PricingLinksProps {
  img?: JSX.Element
  title?: JSX.Element
  text?: JSX.Element
  links?: JSX.Element
  backgroundShouldBeWhite?: boolean
  negativeSpaceTop?: string
}

const PricingLinks = ({ img, title, text, links, backgroundShouldBeWhite, negativeSpaceTop }: PricingLinksProps) => {
  let Img = img
  let Title = title
  let Text = text
  let Links = links
  if (!(img && title && text && links)) {
    Img = <img src={MapGrey} alt="Explore Gitpod" />
    Title = (
      <>
        <strong>Explore</strong> Gitpod
      </>
    )
    Text = <>Learn about collaboration, workspace sharing, reproducible snapshots, supported language features, and much more.</>
    Links = (
      <>
        <Link to="/features/" className="btn btn--cta">
          See Features
        </Link>
        <Link to="/blog/" className="btn">
          See Blog
        </Link>
      </>
    )
  }
  return (
    <StyledMoreInfo
      className="pattern-bg"
      style={{ marginBottom: backgroundShouldBeWhite ? '' : '10rem', background: backgroundShouldBeWhite ? 'none' : ''}}
      negativeSpaceTop={negativeSpaceTop}
    >
      <div className="row">
        <StyledPricingLinks>
          {Img}
          <div>
            <h2>{Title}</h2>
            <p>{Text}</p>
            <span className="btn-wrapper">{Links}</span>
          </div>
        </StyledPricingLinks>
      </div>
    </StyledMoreInfo>
  )
}

export default PricingLinks
