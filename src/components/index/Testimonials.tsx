// @ts-nocheck
import React, { useRef, useState, useEffect } from 'react'

import styled from '@emotion/styled'
import { sizes, colors } from '../../styles/variables'
import Testimonial, { TestimonialProps } from './Testimonial'
import { testimonials } from '../../contents'

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
    transition: all 0.3s;

    &-container {
        padding-bottom: 4rem;
        overflow-x: scroll;
    }

    & > * {
      flex: 0 0 32%;

      &:not(:last-child) {
        margin-right: 1.333%;
      }
    }
  }

  .dots {
    display: flex;
    justify-content: center;
    padding: 4rem 0 5rem;

    @media(max-width: 740px) {
        padding-top: 3rem;
    }

    @media(max-width: 440px) {
        padding-top: 2.5rem;
    }
  }

  .dot {
    height: 1.5rem;
    width: 1.5rem;
    background: ${colors.offWhite4};
    border: none;
    border-radius: 50%;
    transition: all .2s;

    &:hover,
    &:focus {
        background: ${colors.lightGrey};
    }

    &:not(:last-child) {
      margin-right: 1.5rem;
    }
  }
`

const Testimonials: React.SFC<{}> = () => {
    const [currentCycle, setCurrentCycle] = useState<number>(0)
    const tweetsRef = useRef<HTMLDivElement>(null)
    const tweetsContainerRef = useRef<HTMLDivElement>(null)
    const cycles = Math.ceil(testimonials.length / 3)

    useEffect(() => {
        const tweetsContainer = tweetsContainerRef.current
        const dots = document.querySelectorAll('.dot')
        const cycleWidth = tweetsContainer?.scrollWidth / cycles

        tweetsContainer.addEventListener('scroll', (e) => {
            const currentScrollPosition = tweetsContainer?.scrollLeft
            setCurrentCycle(cycles - Math.floor((tweetsContainer?.scrollWidth - currentScrollPosition) / cycleWidth))
        })
    })

    const switchTweets = (to: number) => {
        const tweetsContainer = tweetsContainerRef.current
        const cycleWidth = tweetsContainer?.scrollWidth / cycles
        tweetsContainer.scroll({ left: parseFloat(cycleWidth * to), behavior: 'smooth' })

        // Older method which regards the actuals tweets and the space between them and not the width of .tweets
        
        // const tweets = tweetsRef.current
        // const firstTweet = tweets?.firstChild
        // const spacing = getComputedStyle(firstTweet)['margin-right']
        // const transform = firstTweet.offsetWidth * 3 + parseFloat(spacing.substring(0, spacing.length - 2)) * 2.8
    }

    return (
        <StyledTestimonials>
            <section className="testimonials">
                <div className="row">
                    <h3>
                        Used by 200,000+ <strong>Developers & Businesses</strong>
                    </h3>
                    <div className="tweets-container" ref={tweetsContainerRef}>
                        <div className="tweets" ref={tweetsRef}>
                            {testimonials.map((t) => (
                                <Testimonial key={t.name} {...t} />
                            ))}
                        </div>
                    </div>
                    <div className="dots">
                        {[...Array(cycles).keys()].map((d) => {
                            return (
                                <button
                                    className="dot"
                                    key={d}
                                    onClick={() => {
                                        setCurrentCycle(d)
                                        switchTweets(d)
                                    }}
                                    style={currentCycle === d ? { background: colors.lightGrey } : {}}
                                    title={`Switch to ${d + 1}th set of tweets.`}
                                >
                                    &nbsp;
                                </button>
                            )
                        })}
                    </div>
                </div>
            </section>
        </StyledTestimonials>
    )
}

export default Testimonials
