import React from 'react'

import styled from '@emotion/styled'
import TweetEmbed from 'react-tweet-embed'
import { sizes } from '../styles/variables';

const StyledTestimonials = styled.div`

    min-height: 60rem;

    /* ------------------------------------------- */
    /* ----- Section Testimonials ----- */
    /* ------------------------------------------- */

    h2 {
        margin-bottom: 1rem;
    }

    .tweets {
        display: flex;
        overflow-x: scroll;
        align-items: center;

        @media(min-width: ${sizes.breakpoints.md}) {
            padding-left: calc((100% - ${sizes.grid.maxWidth})/2);
        }

        & > div {
            &:first-of-type {
                @media(max-width: ${sizes.breakpoints.lg}) {
                    padding-left: 7rem;
                }

                @media(max-width: ${sizes.breakpoints.md}) {
                    padding-left: 4rem;
                }

                @media(max-width: ${sizes.breakpoints.sm}) {
                    padding-left: 1rem;
                }
            }
        }
    }

    .tweet {
        max-width: 100%;

        &:not(:last-of-type) {
            margin-right: 3rem;
        }
    }

`

const twitterOptions = { theme: 'light', dnt: true, cards: 'hidden' };

const tweets = [
    '1102215129696010240',
    '1191710936605831169',
    '1167463499779338243',
    '1131239314346729482',
    '1117695539540365312',
    '1115274432958930946',
    '1116152894548582402',
    '1159698330764611584',
    '1188910483698372608',
    '1117141675745402881',
    '1120015913024139265',
]

const Testimonials: React.SFC<{}> = () => (
    <StyledTestimonials className="grey-container">
        <section className="testimonials">
                <div className="row">
                    <h2>Don’t just Take Our Word for It</h2>
                </div>
                <div className="tweets">
                    {
                        tweets.map(
                            (t, i) =>
                            <TweetEmbed
                                key={i}
                                className="tweet"
                                id={t}
                                options={twitterOptions}
                            />
                        )
                    }
                </div>
        </section>
    </StyledTestimonials>
)

export default Testimonials
