import React from 'react'

import styled from '@emotion/styled'
import FeatureBox from './FeatureBox'
import { features } from '../../contents/features'
import { sizes } from '../../styles/variables'
import { StaticQuery, graphql } from 'gatsby'
import Img from 'gatsby-image'

const Styled = styled.div`
  .intro {
    padding: 8rem 0 12rem;

    .ice-stick {
      display: block;
      width: 10rem;
      margin: 0 auto;
    }

    .gatsby-image-wrapper {
        height: 20rem;
    }

    h1 {
      text-align: center;
    }

    .features {
      display: grid;
      grid-gap: 2rem;
      grid-template-columns: repeat(5, 1fr);
      justify-items: center;
      align-items: center;
      margin-top: 4rem;
      position: relative;
      max-width: 900px;
      margin: 6rem auto 0;

      @media (max-width: ${sizes.breakpoints.lg}) {
        grid-template-columns: repeat(5, 1fr);
      }

      @media (max-width: 1000px) {
        grid-template-columns: repeat(4, 1fr);
      }

      @media (max-width: 620px) {
        grid-template-columns: repeat(3, 1fr);
      }

      @media (max-width: 500px) {
        display: none;
      }

      & > div {
        min-width: 14rem;
        min-height: 16rem;

        @media (min-width: 1001px) {
          min-width: 17rem;
        }
      }
    }
  }
`

const Intro = () => (
  <StaticQuery
    query={graphql`
      query {
        file(relativePath: { eq: "ice-cream.png" }) {
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
        <Styled>
          <section className="intro pattern">
            <Img 
                fluid={data.file.childImageSharp.fluid} 
                alt="Ice Stick"
                className="ice-stick"
            />
            <h1>Features</h1>
            <div className="features">
              {features.map((f, i) => (
                <FeatureBox key={i} alt={f.alt} img={f.icon} text={f.iconTitle} path={f.id} />
              ))}
            </div>
          </section>
        </Styled>
      </div>
    )}
  />
)

export default Intro
