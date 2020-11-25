import React from 'react'

import styled from '@emotion/styled'
import TweetEmbed from 'react-tweet-embed'
import { sizes } from '../../styles/variables'

const StyledTestimonials = styled.div`
  min-height: 60rem;
  margin: 8rem 0 10rem;

  @media (max-width: ${sizes.breakpoints.sm}) {
    text-align: center;
  }

  /* ------------------------------------------- */
  /* ----- Section Testimonials ----- */
  /* ------------------------------------------- */

  h3 {
    margin-bottom: 3rem;
    text-align: center;
  }

  .tweets {
    display: flex;
    overflow-x: scroll;
    align-items: center;

    @media (min-width: calc(${sizes.breakpoints.md} + 1px)) {
      padding-left: calc((100% - ${sizes.grid.maxWidth}) / 2);
    }

    & > div {
      &:first-of-type {
        @media (max-width: ${sizes.breakpoints.lg}) {
          padding-left: 7rem;
        }

        @media (max-width: ${sizes.breakpoints.md}) {
          padding-left: 4rem;
        }

        @media (max-width: ${sizes.breakpoints.sm}) {
          padding-left: 1rem;
        }
      }
    }
  }

  .tweet {
    min-width: 400px;

    @media (max-width: 440px) {
      min-width: 95%;
    }

    &:not(:last-of-type) {
      margin-right: 3rem;
    }
  }
`

const twitterOptions = { theme: 'light', dnt: true, cards: 'hidden' }

const tweets = [
  '1115274432958930946',
  '1102215129696010240',
  '1167463499779338243',
  '1191710936605831169',
  '1131239314346729482',
  '1217728632887611397',
  '1117695539540365312',
  '1116152894548582402',
  '1159698330764611584',
  '1117141675745402881',
  '1120015913024139265',
  '1221093493214310400',
  '1215700809104740354'
]

const Testimonials: React.SFC<{}> = () => (
  <StyledTestimonials>
    <section className="testimonials">
      <div className="row">
        <h3>
          Used by 200,000+ <strong>Developers & Businesses</strong>
        </h3>
      </div>
      <div className="tweets">
        {tweets.map((t, i) => (
          <TweetEmbed key={i} className="tweet" id={t} options={twitterOptions} />
        ))}
        <TweetEmbed className="tweet" id="1215707492740739072" options={{ ...twitterOptions, conversation: 'none' }} />
      </div>
    </section>
  </StyledTestimonials>
)

export default Testimonials
