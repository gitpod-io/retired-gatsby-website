import React from 'react'

import styled from '@emotion/styled'
import link from './Link'

const StyledBanner = styled.header`
  /* ------------------------------------------- */
  /* ----- Banner ----- */
  /* ------------------------------------------- */

  display: flex;
  justify-content: space-between;
  align-items: stretch;
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

  .banner__text {
    flex: 0 0 55%;
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


  .img-container {
    display: block;
    flex: 0 0 30%;
    
    @media (min-width: 961px) {
      margin-left: 3rem;
    }

    @media (max-width: 960px) {
      height: 20rem;
      width: 100%;
      height: 100%;
      max-width: 30rem;
      margin: 5rem 0;
    }

    @media (max-width: 500px) {
        max-width: 22rem;
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
            <div className="img-container">
                {img}
            </div>
        </StyledBanner>
    </div>
)

export default Banner
