import React from 'react'

import styled from '@emotion/styled'
import TweetEmbed from 'react-tweet-embed'

const StyledTestimonials = styled.div`
    /* ------------------------------------------- */
    /* ----- Section Testimonials ----- */
    /* ------------------------------------------- */

    h2 {
        margin-bottom: 3rem;
    }

    .tweets {
        display: flex;
        padding: 0 3rem;
        align-items: center;
        overflow-x: auto;
        scroll-padding: 0 50%;
        scroll-snap-type: x;
    }

    .tweet {
        scroll-snap-align: center;
        max-width: 100%;

        &:not(:last-of-type) {
            margin-right: 3rem;
        }
    }

`

const twitterOptions = { theme: 'light', dnt: true, cards: 'hidden' };

const Testimonials: React.SFC<{}> = () => (
    <StyledTestimonials className="grey-container">
        <section className="testimonials">
                <div className="row">
                    <h2>Don’t just Take Our Word for It</h2>
                </div>
                <div className="tweets">
                    <TweetEmbed className="tweet" id='1167463499779338243' options={twitterOptions} />
                    <TweetEmbed className="tweet" id='1131239314346729482' options={twitterOptions} />
                    <TweetEmbed className="tweet" id='1117695539540365312' options={twitterOptions} />
                    <TweetEmbed className="tweet" id='1115274432958930946' options={twitterOptions} />
                    <TweetEmbed className="tweet" id='1191710936605831169' options={twitterOptions} />
                    <TweetEmbed className="tweet" id='1116152894548582402' options={twitterOptions} />
                    <TweetEmbed className="tweet" id='1159698330764611584' options={twitterOptions} />

                </div>
        </section>
    </StyledTestimonials>
)

export default Testimonials
