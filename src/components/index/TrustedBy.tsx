import React from 'react'

import styled from '@emotion/styled'
import { sizes } from '../../styles/variables'

const StyledTrustedBy = styled.section`
  padding: 3rem 0;

  h3 {
    text-align: center;
    font-weight: 400;
  }

  h2 {
    text-align: center;
  }

  .logos {
    display: flex;
    flex-wrap: wrap;
    justify-content: center;

    @media (max-width: 540px) {
      display: grid;
      grid-template-columns: repeat(auto-fit, minmax(120px, 1fr));
    }

    a {
      flex-basis: calc(14% - 2.2rem);
      display: flex;
      border: 2px solid transparent;
      justify-content: center;
      margin: 1.2rem;

      img {
        height: 100%;
      }
    }
  }

  .grey-logo {
    filter: grayscale(100%) contrast(0%) brightness(116%);
    -webkit-filter: grayscale(100%) contrast(0%) brightness(116%);
  }

  .fcc {
    filter: grayscale(100%) contrast(0%);
    -webkit-filter: grayscale(100%) contrast(0%);
    width: 13rem;

    @media (max-width: ${sizes.breakpoints.md}) {
      width: 12rem;
    }

    @media (max-width: ${sizes.breakpoints.md}) {
      width: 11rem;
    }
  }

  .dwave-logo {
    transform: scale(1.2);
    filter: grayscale(100%) contrast(0%) brightness(112%);
    -webkit-filter: grayscale(100%) contrast(0%) brightness(112%);
  }

  .four-geeks {
    transform: scale(0.9);
  }

  .gatsby-logo {
    filter: grayscale(100%) opacity(47%);
    -webkit-filter: grayscale(100%) opacity(47%);
  }

  .vue-logo {
    filter: grayscale(100%) opacity(62%);
    -webkit-filter: grayscale(100%) opacity(62%);
  }
`

const StyledBrandImage = styled.img<{ transform?: string }>`
    width: 9.5rem;

    @media(max-width: ${sizes.breakpoints.lg}) {
        width: 9rem;
    }

    @media(max-width: ${sizes.breakpoints.md}) {
        width: 7rem;
    }

    @media(min-width: calc(${sizes.breakpoints.lg} + 1px)) {
        transform: ${({ transform }) => (transform ? transform : 'none')};
    }
`

interface Brand {
  alt: string
  url: string
  svg: string
  transform?: string
  className?: string
}

interface TrustedByProps {
  brands: Brand[]
}

const TrustedBy = ({ brands }: TrustedByProps) => (
  <StyledTrustedBy>
    <div className="row">
      <h3>
        Trusted by <strong>Visionary Teams</strong>
      </h3>
      <div className="logos">
        {brands.map((b: Brand) => (
          <a href={b.url} target="_blank" className="trustedBy">
            <StyledBrandImage src={b.svg} alt={b.alt} transform={b.transform} className={b.className} />
          </a>
        ))}
      </div>
    </div>
  </StyledTrustedBy>
)

export default TrustedBy
