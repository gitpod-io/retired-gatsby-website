import React from 'react'

import styled from '@emotion/styled'
import TweetEmbed from 'react-tweet-embed'
import { sizes } from '../../styles/variables';

const StyledTestimonials = styled.div`
    min-height: 60rem;

    @media(max-width: ${sizes.breakpoints.sm}) {
        text-align: center;
    }

    /* ------------------------------------------- */
    /* ----- Section Testimonials ----- */
    /* ------------------------------------------- */

    h2 {
        margin-bottom: 3rem;
        text-align: center;
    }

    .tweets {
        display: flex;
        overflow-x: scroll;
        align-items: center;

        @media(min-width: calc(${sizes.breakpoints.md} + 1px)) {
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
        min-width: 400px;

        @media(max-width: 440px) {
            min-width: 95%;
        }

        &:not(:last-of-type) {
            margin-right: 3rem;
        }
    }

`

// const twitterOptions = { theme: 'light', dnt: true, cards: 'hidden' };

// const tweets = [
//     '1115274432958930946',
//     '1102215129696010240',
//     '1167463499779338243',
//     '1191710936605831169',
//     '1131239314346729482',
//     '1217728632887611397',
//     '1117695539540365312',
//     '1116152894548582402',
//     '1159698330764611584',
//     '1117141675745402881',
//     '1120015913024139265',
//     '1221093493214310400',
//     '1215700809104740354',
// ]

const Testimonials: React.SFC<{}> = () => (
    <StyledTestimonials>
        <section className="testimonials">
            <div className="row">
                <h2>Trusted by <strong>200,000+ Developers</strong></h2>
            </div>
            <div className="tweets">
                <div className="tweet">
                    <blockquote data-cards="hidden" className="tweet twitter-tweet"><p dir="ltr" lang="en">GitPod is incredibly cool.<br /><br />In my opinion, this is a big step in open source software contribution. I'm excited to see where we go from here.<a href="https://t.co/KUKJ507okI">https://t.co/KUKJ507okI</a></p>— Ben Halpern 🌱 (@bendhalpern) <a href="https://twitter.com/bendhalpern/status/1115274432958930946?ref_src=twsrc%5Etfw">April 8, 2019</a></blockquote>
                </div>

                <div className="tweet">
                    <blockquote data-cards="hidden" className="tweet twitter-tweet"><p dir="ltr" lang="en">I've been playing around with the "next generation" of Cloud IDEs lately, and <a href="https://twitter.com/gitpodio?ref_src=twsrc%5Etfw">@gitpodio</a> is quickly emerging as one of the best 👨‍💻<br />Awesome <a href="https://twitter.com/github?ref_src=twsrc%5Etfw">@github</a> integration, slick Chrome extension, and super fast 🚀 <a href="https://t.co/WRmOwpD3Uu">https://t.co/WRmOwpD3Uu</a></p>— Hugh Durkin (@hughdurkin) <a href="https://twitter.com/hughdurkin/status/1102215129696010240?ref_src=twsrc%5Etfw">March 3, 2019</a></blockquote>
                </div>

                <div className="tweet">
                    <blockquote data-cards="hidden" className="tweet twitter-tweet"><p dir="ltr" lang="en">Ya'all <a href="https://twitter.com/gitpod?ref_src=twsrc%5Etfw">@gitpod</a> is freaking amazing! We integrated it into our workflow for working on <a href="https://twitter.com/freeCodeCamp?ref_src=twsrc%5Etfw">@freeCodeCamp</a> 's codebase and I am honestly loving it. 🔥🔥!<br /><br />Go check it out on our repo <a href="https://t.co/tKCG49NUlF">https://t.co/tKCG49NUlF</a> now!</p>— Mrugesh Mohapatra (@raisedadead) <a href="https://twitter.com/raisedadead/status/1167463499779338243?ref_src=twsrc%5Etfw">August 30, 2019</a></blockquote>
                </div>

                <div className="tweet">
                    <blockquote data-cards="hidden" className="tweet twitter-tweet"><p dir="ltr" lang="en">I think I’m in love with <a href="https://twitter.com/gitpod?ref_src=twsrc%5Etfw">@gitpod</a>. It’s such a powerful tool. I’ve learned so much in the past week just from stumbling across Github repos that interest me and appending “<a href="https://t.co/IkptsvEF3u">https://t.co/IkptsvEF3u</a>” to the URL. A+ tool all around.</p>— David Ressler (He/Him) (@DavidRessler) <a href="https://twitter.com/DavidRessler/status/1191710936605831169?ref_src=twsrc%5Etfw">November 5, 2019</a></blockquote>
                </div>
            </div>
        </section>
    </StyledTestimonials>
)

export default Testimonials
