import React from 'react'

import styled from '@emotion/styled'
import { sizes } from '../../styles/variables'
import { StaticQuery, graphql } from 'gatsby'
import Img from 'gatsby-image'

const StyledSaveHours = styled.section`
  max-width: 750px;
  margin: 0 auto;
  text-align: center;

  @media (min-width: calc(${sizes.breakpoints.md} + 1px)) {
    padding-bottom: 2rem;
  }

  @media (max-width: ${sizes.breakpoints.md}) {
    max-width: 600px;
  }

  @media (max-width: 640px) {
    max-width: 400px;
  }

  h2 {
    margin-bottom: 5rem;
  }

  .img-container {
    display: inline-block;
    width: 18rem;
    margin-bottom: 5rem;

    @media (max-width: ${sizes.breakpoints.md}) {
      margin-bottom: 3rem;
    }

    @media (max-width: 640px) {
      width: 16rem;
      margin-bottom: 4rem;
    }
  }

  .gatsby-image-wrapper {
      width: 100%;
      height: 25rem;

      @media(max-width: 400px) {
        height: 22rem;
      }
  }

  p {
    max-width: 450px;
    margin-left: auto;
    margin-right: auto;
  }
`

const SaveHours = () => (
  <StaticQuery
    query={graphql`
      query {
        file(relativePath: { eq: "rocket-launch.png" }) {
          childImageSharp {
            fluid(traceSVG: { color: "#0b2144" }) {
                tracedSVG
                src
            }
          }
        }
      }
    `}
    render={(data) => (
      <div className="row">
        <StyledSaveHours>
          <div className="img-container">
            <Img fixed={data.file.childImageSharp.fluid} alt="Rocket Launch" />
          </div>
          <div className="text">
            <h2>
              <strong>Fast & Powerful.</strong> Streamline Your Development Workflow.
            </h2>
            <p>
              Get fresh, task-based dev environments for any issue, branch and merge/pull request. Enter true GitOps and experience a new
              level of productivity.
            </p>
          </div>
        </StyledSaveHours>
      </div>
    )}
/>)

export default SaveHours
