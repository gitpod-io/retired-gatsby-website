import React from 'react'

import { Link } from 'gatsby'
import styled from '@emotion/styled'
import { colors, borders } from '../../styles/variables'

const StyledReachOut = styled.section`
  border: ${borders.light2};
  padding: 0 2rem 5rem;
  max-width: 450px;
  margin: 0 auto 10rem;
  text-align: center;
  border-radius: 3px;

  h3 {
    margin-top: 0;
    font-weight: 600;
  }

  svg {
    fill: #b5b5b5;
    height: 2.9rem;
    transition: all 0.2s;
  }

  div {
    margin-top: 2rem;
  }

  a {
    &:not(:last-of-type) {
      margin-right: 2rem;
    }

    &:hover,
    &:focus {
      color: ${colors.link};

      svg {
        fill: ${colors.link};
      }

      .mail {
        stroke: ${colors.link};
      }
    }
  }
`

const ReachOut = () => (
  <StyledReachOut>
    <h3>Still Have Questions?</h3>
    <p>Please reach out. We’re happy to answer them.</p>
    <div>
      <a href="https://community.gitpod.io/" target="_blank" rel="noopener" title="Community">
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
          <title>Discourse</title>
          <path d="M12.103 0C18.666 0 24 5.485 24 11.997c0 6.51-5.33 11.99-11.9 11.99L0 24V11.79C0 5.28 5.532 0 12.103 0zm.116 4.563a7.395 7.395 0 00-6.337 3.57 7.247 7.247 0 00-.148 7.22L4.4 19.61l4.794-1.074a7.424 7.424 0 008.136-1.39 7.256 7.256 0 001.737-7.997 7.375 7.375 0 00-6.84-4.585h-.008z" />
        </svg>
      </a>
      <Link to="/contact/" title="Contact">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="32.118"
          height="20.916"
          viewBox="0 0 32.118 20.916"
          className="mail"
          stroke="#b5b5b5"
        >
          <title>Mail</title>
          <path
            fillRule="evenodd"
            d="M2.137 2.086a1.252 1.252 0 00-.392.912v14.92a1.243 1.243 0 001.249 1.253h26.131a1.25 1.25 0 001.249-1.253V3a1.253 1.253 0 00-.39-.914L16.059 14.192 2.137 2.086zM2.994.5A2.489 2.489 0 00.5 2.982v14.952a2.482 2.482 0 002.494 2.482h26.13a2.489 2.489 0 002.494-2.482V2.982A2.482 2.482 0 0029.124.5zm13.065 12.074L28.506 1.745H3.612l12.447 10.829z"
          />
        </svg>
      </Link>
    </div>
  </StyledReachOut>
)

export default ReachOut
