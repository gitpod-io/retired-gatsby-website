import React from 'react'

import { Link } from 'gatsby'
import styled from '@emotion/styled'
import { colors } from '../../styles/variables'

const Styled = styled.section`
  padding-bottom: 0;

  .start {
    text-align: center;

    .h3 {
      font-weight: 400;
      margin: 3rem 0;

      span {
        font-weight: 600;
        color: ${colors.link};
      }
    }
  }
`

const StartForFree = () => (
  <Styled>
    <div className="row">
      <section className="start">
        <Link to="/#get-started" className="btn btn--cta btn--big">
          Start for Free
        </Link>
        <h2 className="h3">
          Prefix any GitLab, GitHub or Bitbucket URL with <span>gitpod.io/#</span>
        </h2>
      </section>
    </div>
  </Styled>
)

export default StartForFree
