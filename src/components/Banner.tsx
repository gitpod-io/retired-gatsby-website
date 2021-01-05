import React from 'react'

import styled from '@emotion/styled'
import link from './Link'

const StyledBanner = styled.header`
  /* ------------------------------------------- */
  /* ----- Banner ----- */
  /* ------------------------------------------- */

  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 14rem 0 10rem;

  @media (max-width: 960px) {
    flex-direction: column-reverse;
    padding: 5rem 0;
  }

  @media (max-width: 960px) {
    flex-direction: column-reverse;
    padding: 1rem 0 5rem;
  }

  @media (max-width: 640px) {
    text-align: center;
  }

  .para {
    margin-top: 3rem;

    @media (min-width: 961px) {
      max-width: 50rem;
    }
  }

  .btn {
    margin: 5rem 2rem 2rem 0;

    @media (max-width: 960px) {
      margin-top: 3rem;
    }
  }

  p + .btn {
    margin-top: 3rem;
  }

  object,
  img {
    display: block;
    height: 35rem;

    @media (min-width: 961px) {
      margin-left: 3rem;
    }

    @media (max-width: 960px) {
      height: 20rem;
      margin: 5rem 0;
    }
  }
`

interface BannerProps {
  subtitle: string
  title: JSX.Element
  paragraph?: string | JSX.Element
  linkPath: string
  linkText: string
  img: JSX.Element
}

const Banner: React.SFC<BannerProps> = ({ subtitle, title, paragraph, linkPath, linkText, img, children }) => (
  <div className="row pattern">
    <StyledBanner role="banner" className="banner">
      <div className="banner__text">
        <header>
            <p className="sub h3">{subtitle}</p>
            {title}
        </header>
        {paragraph ? <p className="para">{paragraph}</p> : null}
        {link(linkPath, linkText, '', true, false)}
        {children}
      </div>
      {img}
    </StyledBanner>
  </div>
)

export default Banner
